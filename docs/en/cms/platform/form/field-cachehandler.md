# Cache Handler

<versionInfo>(Joomla &gt;= 1.6)</versionInfo>

## Description

Displays a select list of available cache handlers.

```html
<label id="cache_handler-lbl" for="cache_handler" class="">Cache Handler</label>
<select id="cache_handler" name="cache_handler">
    <option value="apc">JLIB_FORM_VALUE_CACHE_apc</option>
    <option value="file">JLIB_FORM_VALUE_CACHE_file</option>
</select>
```

Inherits from the [List](#/en/cms/platform/form/field-list.md) field.

## Examples

### XML

```xml
<field name="cache_handler"
    type="cachehandler"
    label="COM_CONFIG_FIELD_CACHE_HANDLER_LABEL"
    description="COM_CONFIG_FIELD_CACHE_HANDLER_DESC"
    filter="word">
</field>
```

## See Also

* [Fields](#/en/cms/platform/form/fields.md)
* [List field](#/en/cms/platform/form/field-list.md)
* [JFormFieldCacheHandler](http://api.joomla.org/cms-3/classes/JFormFieldCacheHandler.html)
