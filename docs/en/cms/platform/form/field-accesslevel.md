# Access Level Form Field

<versionInfo>(Joomla &gt;= 1.6)</versionInfo>

## Description

Displays a select list of access levels.

```html
<label id="access_level-lbl" for="access_level" class="">Access Level</label>
<select id="access_level" name="access_level">
    <option value="5">Guest</option>
    <option value="1">Public</option>
    <option value="2">Registered</option>
    <option value="3">Special</option>
    <option value="4">Customer Access Level (Example)</option>
</select>
```

Inherits from the [List](#/en/cms/platform/form/field-list.md) field.

## Attributes

Supports `class`, `disabled`, `size`, `multiple`, `onchange` and `autofocus` attributes.
Supports additional `option` tags that will be appended to the list.

## Examples

### XML

```xml
<field name="access_level" type="accesslevel"
    label="JFIELD_ACCESS_LABEL"
    description="JFIELD_ACCESS_DESC"
    class="span12 small" />
```

## See Also

* [Fields](#/en/cms/platform/form/fields.md)
* [List field](#/en/cms/platform/form/field-list.md)
* [JFormFieldAccessLevel](http://api.joomla.org/cms-3/classes/JFormFieldAccessLevel.html)
* [JHtmlAccess::level](http://api.joomla.org/cms-2.5/classes/JHtmlAccess.html#method_level)
