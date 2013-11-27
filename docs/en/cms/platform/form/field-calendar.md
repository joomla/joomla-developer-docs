# Calendar Form Field

<versionInfo>(Joomla &gt;= 1.6)</versionInfo>

## Description

Displays a popup calendar.

## Attributes

Supports `size`, `maxlength`, `class`, `required`, `readonly`, `disabled`, `size`, `onchange`, `placeholder`, `autocomplete`,
`filter`, `format` and `autofocus` attributes.

The `filter` attribute can take one of the following values:

* **SERVER_UTC** - Converts a date to UTC based on the server timezone as set in the application configuration.
* **USER_UTC** - Converts a date to UTC based on the user timezone as set in the user's profile.

The `format` attribute sets the format that the date will be displayed in the HTML text field.
The format can be made up of the following special characters, similar to the PHP
[strftime](http://us1.php.net/manual/en/function.strftime.php) function

* `%a` - abbreviated weekday name
* `%A` — full weekday name
* `%b` — abbreviated month name
* `%B` — full month name
* `%C` — the century number
* `%d` — the day of the month (range 01 to 31)
* `%e` — the day of the month (range 1 to 31)
* `%H` — hour, range 00 to 23 (24h format)
* `%I` — hour, range 01 to 12 (12h format)
* `%j` — day of the year (range 001 to 366)
* `%k` — hour, range 0 to 23 (24h format)
* `%l` — hour, range 1 to 12 (12h format)
* `%m` — month, range 01 to 12
* `%o` — month, range 1 to 12
* `%M` — minute, range 00 to 59
* `%n` — a newline character
* `%p` — **PM** or **AM**
* `%P` — **pm** or **am**
* `%s` — UNIX time (number of seconds since 1970-01-01)
* `%S` — seconds, range 00 to 59
* `%t` — a tab character
* `%W` — week number
* `%u` — the day of the week (range 1 to 7, 1 = MON)
* `%w` — the day of the week (range 0 to 6, 0 = SUN)
* `%y` — year without the century (range 00 to 99)
* `%Y` — year with the century
* `%%` — a literal '%' character

## Examples

```xml
<field name="publish_up" type="calendar"
    label="COM_CONTENT_FIELD_PUBLISH_UP_LABEL" description="COM_CONTENT_FIELD_PUBLISH_UP_DESC"
    class="inputbox" format="%Y-%m-%d %H:%M:%S" size="22"
    default="NOW"
    filter="user_utc" />
```

## See Also

* [Fields](#/en/cms/platform/form/fields.md)
* JHtmlAccess::level
