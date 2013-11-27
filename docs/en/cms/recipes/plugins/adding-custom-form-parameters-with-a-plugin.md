# Adding Custom Form Parameters with a Joomla Plugin

<versionInfo>CMS >= 2.5</versionInfo>

This recipe shows you how to use a plugin to add a custom form parameter to an article edit form and a category edit form.

## Ingredients

```none
site
`- plugins
   `- content
      |- forms
      |  |- attribs.xml
      |  `- params.xml
      |- language
      |  `- en-GB
      |     |- en-GB.plg_content_acme.ini
      |     `- en-GB.plg_content_acme.sys.ini
      |- acme.php
      `- acme.xml
```

### attribs.xml

The field to inject into the article edit form parameters.
This files is named 'attribs' because that is the name of the fields tag (`<fields name="attribs">`) tag in the
[XML form](https://github.com/joomla/joomla-cms/blob/3.2.0/administrator/components/com_content/models/forms/article.xml#L146)
controlling the article edit form (the important thing is the name of the fields tag, not the name of the file).

If the name of the fields tag was the same as what is used in categories, we could have just used on `params.xml` file.

```xml
<?xml version="1.0" encoding="utf-8"?>
<form>
    <fields name="attribs">
        <fieldset name="basic">
            <field
                name="enable_acme"
                type="list"
                label="PLG_ACME_ENABLE_LABEL"
                description="PLG_ACME_ENABLE_DESC">
                <option value="">PLG_ACME_USE_CATEGORY_SETTING</option>
                <option value="0">JNO</option>
                <option value="1">JYES</option>
            </field>
        </fieldset>
    </fields>
</form>
```

### params.xml

The field to inject into the category edit form parameters parameters.

```xml
<?xml version="1.0" encoding="utf-8"?>
<form>
    <fields name="params">
        <fieldset name="basic">
            <field
                name="enable_acme"
                type="list"
                label="PLG_ACME_ENABLE_LABEL"
                description="PLG_ACME_ENABLE_DESC"
                default="0">
                <option value="0">JNO</option>
                <option value="1">JYES</option>
            </field>
        </fieldset>
    </fields>
</form>
```

### en-GB.plg_content_acme.ini

This is the main language file for the plugin. Note that it is loaded manually in the plugin because plugins do not
automatically load their language files.

```ini
; Copyright (C) 2013 ACME, Inc. All rights reserved.
; License GNU General Public License version 2 or later.
; Note : All ini files need to be saved as UTF-8

PLG_ACME_ENABLE_DESC="Enable the acme iron bird seed feeder."
PLG_ACME_ENABLE_LABEL="Enable Acme"
PLG_ACME_USE_CATEGORY_SETTING="Use category setting"
PLG_ACME_XML_DESCRIPTION="A Joomla plugin injects parameters into forms."
```

### en-GB.plg_content_acme.sys.ini

This is the language file that is included by the installer and the list view of the plugin manager.

```ini
; Copyright (C) 2013 ACME, Inc. All rights reserved.
; License GNU General Public License version 2 or later.
; Note : All ini files need to be saved as UTF-8

PLG_CONTENT_ACME="Content - ACME"
PLG_ACME_XML_DESCRIPTION="A Joomla plugin injects parameters into forms."
```

### acme.php

This is the main plugin file. There are several things to note:

* We are listening for the `onContentPrepareForm` event using a class method of sharing the same name.
* The listener method accepts a `JForm` object and an array of data that represents the content.
* We have to load a different XML file because the name of the fields tag is different in an article and a category.
* We are checking the name of the form matches an expected value because this listener could respond to any edit form.
* If this is a form we don't know about, it returns and nothing special happens.
* We load the language file manually. This is not done automatically in a plugin like it is in a module or a component.
* We use the `JForm::addFormPath` to tell the API where to load the XML files included in the plugin.
* We load the form by name. This will merge the custom field into the appropriate fieldset in the target edit form.

```php
<?php
/**
 * @copyright  Copyright (C) 2013 ACME. All rights reserved.
 * @license    GNU General Public License version 2 or later.
 */

// No direct access
defined('_JEXEC') or die;

/**
 * Acme content plugin.
 *
 * @since  1.0
 */
class plgContentAcme extends JPlugin
{
    /**
     * Prepares an article form or an article category form.
     *
     * @param   JForm  $form  The form to be altered.
     * @param   array  $data  The associated data for the form.
     *
     * @return  boolean
     * @since   1.0
     */
    public function onContentPrepareForm($form, $data)
    {
        if (!($form instanceof JForm))
        {
            $this->_subject->setError('JERROR_NOT_A_FORM');
            return false;
        }

        // Check we are working with a valid form.
        $name = $form->getName();
        $forms = array(
            'com_content.article' => 'attribs',
            'com_categories.categorycom_content' => 'params',
        );

        if (!isset($forms[$name]))
        {
            return true;
        }

        $this->loadLanguage();

        JForm::addFormPath(__DIR__ . '/forms');
        $form->loadFile($forms[$name], false);

        return true;
    }
}
```

### acme.xml

This is the extension installer manifest shown for completeness.

```xml
<?xml version="1.0" encoding="utf-8"?>
<extension version="2.5.0" type="plugin" group="content" method="upgrade">
    <name>plg_content_acme</name>
    <author>Acme</author>
    <creationDate>{{CREATIONDATE}}</creationDate>
    <copyright>Copyright (C) 2013 ACME. All rights reserved.</copyright>
    <license>GNU General Public License version 2 or later.</license>
    <authorEmail>acme@example.com</authorEmail>
    <authorUrl>acme.example.com</authorUrl>
    <version>{{VERSION}}</version>
    <description>PLG_ACME_XML_DESCRIPTION</description>
    <files>
        <folder>forms</folder>
        <folder>language</folder>
        <filename plugin="acme">acme.php</filename>
    </files>
</extension>
```
