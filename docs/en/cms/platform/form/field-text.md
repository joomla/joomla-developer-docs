# Text Box Form Field

<versionInfo>(Joomla &gt;= 1.6)</versionInfo>

## Description

Displays an HTML text box.

```html
<input name="text_field" type="text" />
```

## Attributes

Supports `class`, `readonly`, `disabled`, `required`, `hint`, `size`, `maxlength`, `multiple`, `required`, `onchange`,
`dirname`, `inputmode`, `pattern`, `filter`, `spellcheck`, `autocomplete` and `autofocus` attributes.

Text fields also support suggestion in the form of `<option>` tags.
Option text is translatable but limited to alnum, - and _.
When was this added?

## Examples

### XML

```xml
<field name="text_field" type="text"
    default="Some text"
    label="Text to save" size="10" />
```

## See Also

* [Fields](#/en/cms/platform/form/fields.md)
* [JFormFieldText](http://api.joomla.org/cms-3/classes/JFormFieldText.html)
