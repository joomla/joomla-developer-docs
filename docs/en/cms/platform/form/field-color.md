# Color Form Field

<versionInfo>(Joomla &gt;= 2.5)</versionInfo>

## Description

Displays either an HTML text box with a color picker control (`control` = "hue"),
where the user can enter the color as a hexadecimal code (`#ff00ff`) or from the popup palette,
or display a simple HTML select list (`control` = "simple").

** Default Simple List**

```html
<select>
    <option>none</option>
    <option>#049cdb</option>
    <option>#46a546</option>
    <option>#9d261d</option>
    <option>#ffc40d</option>
    <option>#f89406</option>
    <option>#c3325f</option>
    <option>#7a43b6</option>
    <option>#ffffff</option>
    <option>#999999</option>
    <option>#555555</option>
    <option>#000000</option>
</select>
```

## Attributes

* `colors` - A comma separated list of hexadecimal color codes for the simple color list.
* `control` - Control type: hue (default) or simple.
* `position` - Color picker panel position: right, left, top or bottom.
* `split` - A number used to split the simple color list into groups.

Supports the standard `class`, `required`, `disabled`, `onchange` and `autofocus` attributes.

## Examples

### XML

```xml
<field name="backgroundcolor" type="color" default="#eee"
    label="TPL_BEEZ3_FIELD_HEADER_BACKGROUND_COLOR_LABEL"
    description="TPL_BEEZ3_FIELD_HEADER_BACKGROUND_COLOR_DESC" />
```

## Changelog

| Version | Description |
| :-----: | ----------- |
| 3.2     | The `colors`, `control`, `position`, and `split` attributes were added. |


## See Also

* [Fields](#/en/cms/platform/form/fields.md)
* [JFormFieldColor](http://api.joomla.org/cms-3/classes/JFormFieldColor.html)
