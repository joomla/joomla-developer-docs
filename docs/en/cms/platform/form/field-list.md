# List Form Field

<versionInfo>(Joomla &gt;= 1.6)</versionInfo>

## Description

Displays a select list.

```html
<select name="list_field">
    <option value="a">A</option>
    <option value="a">B</option>
    <option value="a">C</option>
</select>
```

## Attributes

Supports `class`, `readonly`, `disabled`, `size`, `multiple`, `required`, `onchange` and `autofocus` attributes.

Supports additional `option` tags that will be appended to the list.

Option text is translatable. Option tags support `class`, `onclick`, `disabled` and `requires`.
The `requires` attribute can have a value of "multilanguage" or "associations" or both if separated by a comma (no spaces).

## Examples

### XML

```xml
<field name="list_field" type="list"
    label="Letter"
    description="Select something from the list">
    <option value="a">A</option>
    <option value="a">B</option>
    <option value="a">C</option>
</field>
```

## See Also

* [Fields](#/en/cms/platform/form/fields.md)
* [JFormFieldList](http://api.joomla.org/cms-3/classes/JFormFieldList.html)
* [JHtmlSelect::genericlist](http://api.joomla.org/cms-3/classes/JHtmlSelect.html#method_genericlist)
