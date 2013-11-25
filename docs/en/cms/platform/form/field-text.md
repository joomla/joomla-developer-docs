# Text Box Form Field

## Description

Displays an HTML text box.

<form>
    <input name="text_field" type="text" />
</form>

## Attributes

Supports `class`, `readonly`, `disabled`, `required`, `hint`, `size`, `maxlength`, `multiple`, `required`, `onchange`,
`dirname`, `inputmode`, `pattern`, `filter`, `spellcheck`, `autocomplete` and `autofocus` attributes.

Text fields also support suggestion in the form of `<option>` tags.
Option text is translatable but limited to alnum, - and _.
When was this added?

## Examples

```xml
<field name="text_field" type="text"
    default="Some text"
    label="Text to save" size="10" />
```

## See Also

* [Fields](#/en/cms/platform/form/fields.md)
* JFormFieldText
* JHtmlSelect::genericlist
