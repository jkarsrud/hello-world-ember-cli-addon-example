# Hello-world

This is an example of how to build an Ember-CLI addon that exports commands.

## Installation

* `git clone` this repository
* `npm install`
* `npm link`

In a regular Ember-CLI project, do the following:

* `npm link hello-world`
* Add `"hello-world": "latest"` to your package.json `devDependencies`

To make sure the addon's command is added correctly, run `ember -h` and look for

```
Available commands from hello-world:
ember print
  print 'hello' to the console
```

Verify that it works by running `ember print`
