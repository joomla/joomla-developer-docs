# Captcha Form Field

<versionInfo>(Joomla &gt;= 2.5)</versionInfo>

## Description

Displays Captcha field.

## Attributes

Supports `class`, `plugin`, `hidden`, `required` and `namespace` attributes.

## Examples

```xml
<field name="captcha" type="captcha"
    label="COM_CONTACT_CAPTCHA_LABEL"
    description="COM_CONTACT_CAPTCHA_DESC"
    validate="captcha"
    namespace="contact" />
```

## See Also

* [Fields](#/en/cms/platform/form/fields.md)
* [JFormFieldCaptcha](http://api.joomla.org/cms-3/classes/JFormFieldCaptcha.html)
* [JCaptcha](http://api.joomla.org/cms-3/classes/JCaptcha.html)
