# Module Chrome Style Form Field

<versionInfo>(Joomla &gt;= 3.0)</versionInfo>

## Description

Displays a select list of access levels.

```html
<label id="style-lbl" for="style" class="hasTooltip" title="...">Module Style</label>
<select id="style" name="jform[style]">
	<optgroup label="---From Template---">
		<option value="0">Inherited</option>
	</optgroup>
	<optgroup label="System">
		<option value="System-none">none</option>
		<option value="System-html5">html5</option>
		<option value="System-table">table</option>
		<option value="System-horz">horz</option>
		<option value="System-xhtml">xhtml</option>
		<option value="System-rounded">rounded</option>
		<option value="System-outline">outline</option>
	</optgroup>
	<optgroup label="Beez3">
		<option value="Beez3-beezDivision">beezDivision</option>
		<option value="Beez3-beezHide">beezHide</option>
		<option value="Beez3-beezTabs">beezTabs</option>
	</optgroup>
	<optgroup label="Protostar">
		<option value="Protostar-no">no</option>
		<option value="Protostar-well">well</option>
	</optgroup>
</select>
```

Inherits from the [Grouped List](#/en/cms/platform/form/field-groupedlist.md) field.

## Attributes

## Examples

### XML

```xml
<field
    name="style" type="chromestyle"
    label="COM_MODULES_FIELD_MODULE_STYLE_LABEL"
    description="COM_MODULES_FIELD_MODULE_STYLE_DESC"
/>
```

## See Also

* [Fields](#/en/cms/platform/form/fields.md)
* [Grouped List field](#/en/cms/platform/form/field-groupedlist.md)
* [JFormFieldChromeStyle](http://api.joomla.org/cms-3/classes/JFormFieldChromeStyle.html)
* [JFormFieldGroupedList](http://api.joomla.org/cms-3/classes/JFormFieldGroupedList.html)
* Module Chrome Style
