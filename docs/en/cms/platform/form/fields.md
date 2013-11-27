# Form Fields

## Types

* [Calendar](#/en/cms/platform/form/field-calendar.md)
* [Captcha](#/en/cms/platform/form/field-captcha.md)
* [Checkbox](#/en/cms/platform/form/field-checkbox.md)
* [Checkboxes](#/en/cms/platform/form/field-checkboxes.md)
* [Color](#/en/cms/platform/form/field-color.md)
* Grouped List
    * [Module Chrome Style](#/en/cms/platform/form/field-chromestyle.md)
* [List](#/en/cms/platform/form/field-list.md)
    * [Access Level](#/en/cms/platform/form/field-accesslevel.md)
    * [Cache Handler](#/en/cms/platform/form/field-cachehandler.md)
* [Text](#/en/cms/platform/form/field-text.md)

## XML Specification

### The `<field>` Tag

The `<field>` tag has several standard properties.

#### Required Attributes

| Attribute | Type | Availability | Comments |
| :-------: | :--: | :----------: | -------- |
| `name`    | string | 1.6+ | The name of the field. |
| `type`    | string | 1.6+ | The type of field. |
| `label`   | string | 1.6+ | The text (translatable) that will be used for the label when the field is displayed. |

#### Optional Attributes

Not all attributes are used by or available for all fields.

| Attribute | Type | Availability | Comments |
| :-------: | :--: | :----------: | -------- |
| `description` | string | 1.6+ | The text (translatable) that will be used as help text for the field, usually rendered as a tool-tip on the label text. |
| `hint` | string | ? | The text (translatable) that will be shown in a field for informational purposes when a value is not provided (but is not posted with the form). |
| `default` | alnum | 1.6+ | A default value for the HTML field. |
| `class` | string | 1.6+ | Additional class text to inject in the HTML class property of the rendered field. |
| `readonly` | boolean | 1.6+ | If `1` or `true`, the attribute prevents the field from being changed and the default value is used if supplied. |
| `disabled` | boolean | 1.6+ | If `1` or `true`, the attribute disabled the HTML form element. |
| `required` | boolean | 1.6+ | The form validation with flag this field as required if set to `1` or `true`. |
| `size` | number | 1.6+ | The HTML characters size for a text box. |
| `maxlength` | number | 1.6+ | The maximum number of characters that can be entered in a text box. |
| `filter` | enum | ? | Input filtering |
| `validate` | ? | ? |  |
| `autocomplete` | boolean | ? |  |
| `autofocus` | boolean | ? |  |
| `spellcheck` | boolean | ? |  |
| `inputmode` | boolean | ? |  |

If a `default` is used for fields based on `text` or `textarea` tags, an empty value for the field is not achievable.
In this case, when the user deletes the value of the field, the default will always override it.
