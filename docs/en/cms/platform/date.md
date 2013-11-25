# The Date Package

There are only two rules you need to remember when working with dates in Joomla.

1. Store all dates in GMT (Greenwich Mean Time).
2. Display all dates in local time.

As long as you remember these fundamental principles, you will be able to reliably store and display dates.

## Storing in GMT

There are a number of very good reasons why we store dates in GMT and not in either server local time nor user local time.  Consider this situation.  An author schedules an article to display at midday, Brisbane (Australia) local time.  If the display is based on local time, then people in other parts of the world either see the article earlier than you (the author) or later than expected.  The only way to rationally solve this is to always convert the dates to GM time before inserting them into the database.

It also solves the difficulties of servers being in physically different locations around the globe.  When dates are stored in GM time, the data is more portable.  You can move the web site data to different locations in different time zones and it will still behave the same way.

## Displaying in Local Time

Local time is determined by the Timezone Offset setting in Global Configuration.  This setting is relative you you, the user, not the server on which the web site is hosted (the server offset is handled by converting dates to GM time before storing them as we explained in the previous section).  The Timezone Offset is set for the site as a whole, and each registered user in the Joomla web site can maintain their own timezone offset.  Because we are storing in GM time, we can physically move around the world and change our individual offset to reflect the local time of our actual location, or another desired location.  If you are a company in Japan and you have web sites in several countries, you can set the timezone offset for the web site targetting an Australian audience to an appropriate local time, and the web site marketing to Brazil in another.  In this way the dates you see while managing those web sites will be relative to your target audience, making it easier to schedule content for release at the right time of day.

## Using the JDate Class

Joomla makes it easy to be able to store your dates in GM time and display them in local time with a class called `JDate`.  Please note that this class is not for creating calendars or performing date arithmetic.  It is simply a utility class for maniputating date formats and timezones.

There are two ways to create a `JDate` object either directly or using the Joomla factory class.

### Creating a JDate Object Directly

```
$date = new JDate;
echo $date->toSql();
```

Without any arguments `JDate` will assume the current GM time.  If you are in Brisbane, Australia (GMT+10), the above previous example will show the date and time 10 hours behind the current local time.

You can optionally supply a date and time as the first argument, and a timezone offset (in hours) in the second offset.

```
$date1 = new JDate('2009-01-01 01:00:00');
echo $date1->toSql();

$tz = new DateTimeZone('Australia/Brisbane`);
$date2 = new JDate('2009-01-01 01:00:00', 10);
echo $date2->toSql();
```

Where no timezone offset is specified, the date argument is used as supplied.  The first example will echo `2009-01-01 01:00:00`.  The second example will adjust the time back by the timezone offset.  It will display `2008-12-31 15:00:00`.

### Creating a JDate Object Using JFactory

The `JFactory` class has a method for creating a date object.  It takes the same two optional argument but the behaviour is slightly different.

```
$date3 = JFactory::getDate();
// run some processor intensive code for 2 seconds
$date4 = JFactory::getDate();
echo $date3->toMySQL().' = '.$date4->MySQL();
```

Without any argument the getDate method will assume the current time.  However, this value is then cached and any future calls to getDate without any arguments will return the original object from when getDate was first called.  In the previous example this simply means that `$date3` and `$date4` are the same object representing the same time.  Sometimes this is useful and sometimes it can create unexpected results.

Similarly if a date and/or timezone offset is supplied, these values will also be cached.

You should not use `getDate` when you are logging times during an iterative process that may take more than a second to complete.  For example, if you are passing text files and writing time stamps to a log file, you should use JDate directly rather then `JFactory::getDate` because it will display the same time for each log message even though the process may have taken some seconds or minutes.

You should also be aware that some other code may have already called the `getDate method` (for example, in a plugin).  If you are not concerned about getting the exact time then JFactory::getDate can be used effectively.  If you need to know the time to the second, then you should create a new `JDate` object each time.

#### Support for Alternative Date Handling

Another characterist of using `JFactory::getDate` is that can load an alternative localised version of JDate from the language folder.  The file should be located in the following location:

`/language/en-GB/en-GB.date.php`

and the class must be named `JDateen_GB` and must implement all of the methods in the `JDate` class.  Because the class is a different name, you can actually extend `JDate` and simply override or add the required methods, for example:

`/language/klingon/klingon.date.php`

would contain the following class:

```
/**
 * Class to display in Klingon date format
 */
class JDateKlingon extends JDate
{
    function toKlingon()
    {
        // Some function to convert the date
        return date_to_klingon($this);
    }
}
```

## Storing Dates in the Database

As previously mentioned, we must ensure that all dates are stored in GM time.  There are two types of dates we need to worry about: system generated dates (like created or modifed time stamps) and user supplied dates (like publish start and finish time).

### Storing System Generated Dates

A system generate date is one where we are wanting to store a timestamp based on system or server time.  Common examples of a system date are the created or modifed times for an item of content, and which usually related to fields in a database table.

```
// Get the table object
$table = JTable::getInstance('Note', 'NoteTable');

// Get a date object
$date = new JDate;

// Deal with other variables and then set the date
if ($table->id)
{
    // Existing item
    $table->modified_date = $date->toSql();
}
else
{
    // New item
    $table->created_date = $date->toSql();
}
```

In this example you can see we've loaded a table object and instantiated the date object which will hold the GM time at the point it was created.  There is a logic check and then a variable in the table is set to the MySQL format of the date.

### Storing User Supplied Dates

Handling dates supplied by the user takes a few more steps because we assume that the user is inputing the date with respect to their local time.  If you don't account for this, the dates will be stored in GM time relative to the local time on the host server, not the user.

```
// Get the table object
$table = JTable::getInstance('Note', 'NoteTable');

// Check the date is set
if (intval($table->note_date))
{
    // Get an instance of the Application object
    $app = JFactory::getApplication();

    // Create a new date object, adjusting for the local timezone offset
    $date = new JDate($table->note_date, new DateTimeZone($app->getCfg('offset')));

    // Convert the date to MySQL format
    $table->note_date = $date->toSql();
}
else
{
    $table->note_date = 0;
}
```

In this example we are imagining that the note_date field has come from a calendar control on the edit form, so it's coming through in local user time.  We get the local timezone offset of the user from the configuration settings in the application.  The configuration variable is called offset.  For an anonymous visitor, this will be the timezone offset that as shown in the Global Configuration.  For a registered user that is logged in, they may have the opportunity to provide their own timezone offset in their profile.

The variable $date will now hold the local date supplied by the user, moved backwards by the timezone offset in order to arrive at GM time.

## Displaying Dates

The Joomla Framework provides a convenient HTML Helper for displaying the dates that have been stored in GM time as shown below:

```
<?php echo JHtml::date($item->note_date); ?>
```

This helper takes several optional arguments apart from the date.  Where no other arguments are supplied, the format is assumed to be the setting of the language string given by `DATE_FORMAT_LC1`.  This is typically set to `%A, %d %B %Y` which give you an output result of `Sunday, 1 January 2009`.

To specify a specific format, pass this in the second argument.  The formats are defined as for the PHP strftime function.

```
<?php echo JHtml::date($item->note_date, '%Y-%m-%d %H:%M:%S'); ?>
```

This would output the date in the MySQL format `2009-01-01 01:00:00`.

If we wanted to display the date in another timezone, then we can pass a custom offset as a third argument.

```
<?php echo JHtml::date($item->note_date, '%Y-%m-%d %H:%M:%S', -5); ?>
```

This will display the GM date 5 hours behind regardless of the timezone offset setting in Global Configuration.

You need to be aware that calendar controls in edit forms also need to display the date adjust for local user time otherwise the date will shift on every save and/or display.  Personally, I prefer to do this in the view before the date is assigned to the layout.  For example in view.html.php I would include the follow code:

```
// Get the item to edit
$item = $this->get('Item');

// Adjust for the time zones before display
if (intval($item->node_date))
{
    $item->node_date = JHtml::date($item->node_date, '%Y-%m-%d %H:%M:%S');
}

// Assign the item to the view for the layout to display
$this->assignRef('item', $item);
```

## Other Date Solutions

### Accounting for the Local User Offset

Registered users are generally allowed to set their own timezone offset.  This is a variable we can easily take into account.

```
$config = JFactory::getConfig();
$date = JFactory::getDate($timestamp);
$date->setOffset($user->getParam('timezone', $config->getValue('config.offset')));
echo $date->toFormat();
```
The user object stores the local user timezone offset as a parameter given by the key timezone.  The offset can be passed to the getDate factory method or set using the `setOffset` method.

### Determining the UTC of Today in Local User Time

When dealing with calendar applications, it's likely that you want to see what events are on today.  Today usually starts at midnight local time but the UTC time will not necessarily have a zero hour value or be the same day.  For example, consider if today was the 1 January 2000 in Brisabane, Australia with a timezone offset of +10 hours.  Today in MySQL format would be 2000-01-01 00:00:00 so we could search for all events after that timestamp.  However, if the dates are stored as UTC, the start time for the event is likely to be 1999-12-31 14:00:00.  The algorithm is going to miss some events.

To address this, we can find the search date by the following procedure.

```
// Get the timezone offset
$config = JFactory::getConfig();
$offset = $config->getValue('config.offset');

// Get the time now
$now = JFactory::getDate();

// Adjust the offset to local site or user time
$now->setOffset($offset);

// Get the raw date without hours, minutes and seccond (effectively midnight)
$temp = $now->toFormat('%Y-%m-%d');

// Pass this back into the factory method with the local site or user offset
$today = JFactory::getDate($temp, $offset);

// Get the UTC date for use in database queries
$date = $today->toMySQL();
```
