# Access Level Form Field

## Description

Displays a select list of access levels.

<form>
    <select name="access_level" type="list">
        <option>Public</option>
        <option>Registered</option>
        <option>Special</option>
    </select>
</form>

Inherits from the [List](#/en/cms/platform/form/field-list.md) field.

## Attributes

Supports `class`, `disabled`, `size`, `multiple`, `onchange` and `autofocus` attributes.
Supports additional `option` tags that will be appended to the list.

## Examples

```xml
<field name="access_level" type="accesslevel"
    label="JFIELD_ACCESS_LABEL"
    description="JFIELD_ACCESS_DESC"
    class="span12 small" />
```

## See Also

* [Fields](#/en/cms/platform/form/fields.md)
* [List field](#/en/cms/platform/form/field-list.md)
* JFormFieldAccessLevel
* JHtmlAccess::level
