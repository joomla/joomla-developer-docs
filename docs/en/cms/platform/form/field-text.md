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

## Examples

### XML

```xml
<field name="text_field" type="text"
    default="Some text"
    label="Text to save" size="10" />
```

## Use Suggestion Datalist

Text fields also support suggestion in the form of `<option>` tags.
Option text is translatable but limited to alnum, - and _.

```xml
<field name="cars"
	type="text"
	label="Cars"
	>
	<option value="benz" >Benz</option>
	<option value="audi" >Audi</option>
	<option value="BMW" />
</field>
```

The optput result:

```html
<datalist id="cars_datalist">
	<option value="benz">Benz</option>
	<option value="audi">Audi</option>
	<option value="BMW">BMW</option>
</datalist>
<input type="text" name="cars" id="cars" value="" list="cars_datalist"></div>
```

## See Also

* [Fields](#/en/cms/platform/form/fields.md)
* [JFormFieldText](http://api.joomla.org/cms-3/classes/JFormFieldText.html)
* [Html5 Datalist](http://www.w3schools.com/tags/tag_datalist.asp)
