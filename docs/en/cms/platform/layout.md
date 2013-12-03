# The Layout Package

<versioninfo>CMS > 3</versioninfo>

Layouts allow you to do simple rendering from a file in a layouts folder. This allows you to share layouts across views without the overhead of using a view for rendering individual outputs.

Up until Joomla! 3.0, the loading (and template overriding) of layout files was restricted to a given view. The `JLayout`<sup>[1]</sup> interface and set of classes was added to Joomla! 3 to help solve this very problem. It encapsulates a layout and the data required to display it so that they can be reused across views and extensions. <sup>[2]</sup>

This package consists of an interface and three support classes.

## Layout Files

The layout itself is a combination of PHP and HTML. It is typically located in a folder named layouts.
When searching for layouts, class methods search in the following order:

```
[0] => $basePath (if a valid file path)
[1] => templates/mytemplate/html/layouts/com_mycomponent
[2] => components/com_mycomponent/layouts
[3] => templates/mytemplate/html/layouts
[4] => layouts
```

## JLayoutHelper Class

The `JLayoutHelper`<sup>[3]</sup> is a static class with a static `render` method that renders a layout in a single line of code.

### Examples

```php
$basePath = JPATH_COMPONENT_ADMINISTRATOR . '/layouts';

echo JLayoutHelper::render('path.to.file', $yourData);
echo JLayoutHelper::render('path.to.file', $yourData, $basePath);
echo JLayoutHelper::render('path.to.file', $yourData, '', array('client'=>'admin'));
```
Note that the path to the layout file is deliberately shown in dot-notation. The `path.to.file` string is parsed as 'path/to/file.php' and is appended to `$basePath`.

The display data (`$yourData` in the examples) is passed to `JLayoutFile::render` as `$displayData`. Rendering is done using output buffers so anything you pass will be available in your layout as `$displayData`.

### Example Layout File

```php
<?php
defined('JPATH_BASE') or die;

$items = $displayData;

if (!empty($items)) : ?>
	<ul class="item-associations">
		<?php foreach ($items as $id => $item) : ?>
				<li>
					<?php echo $item->link; ?>
				</li>
		<?php endforeach; ?>
	</ul>
<?php endif;
```


### Working With Sub-layouts

We'll use the layout helper:

```php
echo JLayoutHelper::render('invoice', $invoiceData);
```

Then in the 'invoice' layout file:

```php
<div class="invoice">
    <div class="customer">
        <?php echo $this->sublayout('shopper', $displayData['shopper']); ?>
    </div>
    <div class="header">
        <?php echo $this->sublayout('header', $displayData); ?>
    </div>
    <div class="products">
        <?php echo $this->sublayout('products', $displayData['products']); ?>
    </div>
    <div class="footer">
        <?php echo $this->sublayout('footer', $displayData); ?>
    </div>
</div>
```

## JLayout Interface

`JLayout` is an interface that requires an `escape` method and a `render` method.

* The `escape` method is used to safely prepared a string for display in the browser.
* The `render` method is used render an object into a layout.

## JLayoutFile Class

`JLayoutFile`<sup>[4]</sup> is the base class used for rendering a display layout loaded from a layout file. It has a companion static helper `JLayoutHelper::render`. The constructor take a layout ID (a dot-path), a base path and an associative array of options. Options can include the following:

* **suffixes** - an array of file suffixes. Each suffix in the list is appended to layout ID and a search is performed. If a layout is found, it is rendered.
* **debug** - a boolean value to show debug information.
* **client** - either a boolean value or `admin` or `site`.
* **component** - a name of a component folder.

```php
// Create a new layout (use the default base path).
$layout = new JLayoutFile('joomla.content.tags', null, array('component' => 'com_tags'));
```

```
// Create a new layout with suffix options.
$layout = new JLayoutFile('my.path.layout', null, array('suffixes' => array('rtl', 'json')));
```

In this case, if `my/path/layout.rtl.php` exists, it is rendered. Note that only the first suffix matched in the list is rendered.

For more information, see [setDebug], [setClient], and [setComponent].

```php
// Render the layout.
echo $layout->render($displayData);
```

### Debugging Layouts

```php
$layout->setDebug(true);

// or using options in the constructor:
$options = array('debug' => true, 'suffixes' => array('j3x', 'j25'));
$layout = new JLayout('joomla.content.tags', '', $options);
```
Will produce output something like this:
```
Layout: joomla.content.tags
Include paths: Array
(
    [0] => /home/user/www/jcms3x/templates/protostar/html/layouts/com_content
    [1] => /home/user/www/jcms3x/components/com_content/layouts
    [2] => /home/user/www/jcms3x/templates/protostar/html/layouts
    [3] => /home/user/www/jcms3x/layouts
)

Suffixes: Array
(
    [0] => j3x
    [1] => j25
)

Searching layout for: joomla/content/tags.j3x.php
Found layout: /home/user/www/jcms3x/components/com_content/layouts/joomla/content/tags.j3x.php
```
## See Also

* http://api.joomla.org/cms-3/classes/JLayout.html
* http://api.joomla.org/cms-3/classes/JLayoutFile.html
* http://api.joomla.org/cms-3/classes/JLayoutHelper.html
* http://docs.joomla.org/J3.2:JLayout_Improvements_for_Joomla

[1]: http://api.joomla.org/cms-3/classes/JLayout.html
[2]: http://docs.joomla.org/J3.2:JLayout_Improvements_for_Joomla
[3]: http://api.joomla.org/cms-3/classes/JLayoutHelper.html
[4]: http://api.joomla.org/cms-3/classes/JLayoutFile.html
[setDebug]: http://api.joomla.org/cms-3/classes/JLayoutFile.html#method_setDebug
[setClient]: http://api.joomla.org/cms-3/classes/JLayoutFile.html#method_setClient
[setComponent]: http://api.joomla.org/cms-3/classes/JLayoutFile.html#method_setComponent