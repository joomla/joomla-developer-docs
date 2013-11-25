# Joomla Extensions

The Joomla CMS support seven types of extensions.

## Components

A component is used to display and manage data on the web Joomla web site. It main vehicle by which data is viewed
and maintained. An user interactions (a web request) is always handled by a component.

Components can be installed in either the front-end site application, and/or the backend administrator application.

## Modules

A module is used only used to display data or inject behaviours (such as JavaScript) into a part of the web page.
A module may display web page elements that allow user interaction, such as a login form, but the module code itself
should never process requests. They should be treated as read-only constructs.

Modules display in fixed positions within a template and can be configured to on different pages of the web site based
on the navigation menu.

Like components, modules can be installed in either the site and/or administrator applications.

## Plugins

A plugin is used to modify data, presentation or behaviour behind the scenes and does not interact directly with the user.
Rather, plugins use an Observer design pattern to react to events triggered by the CMS application's dispatcher,
and they fall into a number of sub-types:

* Authentication
* Captcha
* Content
* Editors
* Editors-xtd
* Extension
* Finder
* Quickicon
* Search
* System
* Two Factor Authentication
* User

Plugins are shared across both the site and administrator applications.

## Templates

A template is the outer presentational framework and structure around which components and modules are displayed.
It defines the look and feel for the web site as a whole.

Templates can be installed in either the site and/or administrator applications.

## Language Packs

A language pack is a collection of text files in `ini` format that allows static text on the Joomla web site to be
translated into other languages.

## Libraries

A library is base-level code that can be installed to support other types of extensions (for example, a mailing list library).

Libraries are shared across both the site and administrator applications.

## Packages

A package is simply a collection of extensions that can be installed in a single operation.
