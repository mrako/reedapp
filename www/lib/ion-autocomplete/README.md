ion-autocomplete
================
[![Build Status](https://travis-ci.org/guylabs/ion-autocomplete.svg?branch=master)](https://travis-ci.org/guylabs/ion-autocomplete)
[![Coverage Status](https://img.shields.io/coveralls/guylabs/ion-autocomplete.svg)](https://coveralls.io/r/guylabs/ion-autocomplete)

Configurable Ionic directive for an autocomplete dropdown.

![Animated demo](https://github.com/guylabs/ion-autocomplete/raw/master/demo.gif)

This is a simple directive for an autocomplete overlay location field built for Ionic Framework.

#Installation

1. Use bower to install the new module:
```bash
bower install ion-autocomplete
```
2. Import the `ion-autocomplete` javascript and css file into your HTML file:
```html
<script src="bower_components/ion-autocomplete/dist/ion-autocomplete.js"></script>
<link href="bower_components/ion-autocomplete/dist/ion-autocomplete.css" rel="stylesheet">
```
3. Add `ion-autocomplete` as a dependency on your Ionic app:
```javascript
angular.module('myApp', [
  'ionic',
  'ion-autocomplete'
]);
```
#Usage

To use the `ion-autocomplete` directive you need to add the following snippet to your template:
```html
<ion-autocomplete ng-model="model" />
```

Check out the next chapter on how to configure the directive.

## Configurable options

### The items method

You are able to pass in a callback method which gets called when the user changes the value of the search input field. This is
normally a call to the back end which retrieves the items for the specified query. Here is a small sample which will
return a static item of the query:

Define the callback in your scope:
```javascript
$scope.callbackMethod = function (query) {
    return [query];
}
```

And set the items method on the directive:
```html
<ion-autocomplete ng-model="model" items-method="callbackMethod(query)" />
```

Note that the parameter for the `callbackMethod needs to be named `query`. Otherwise the callback will not get called properly.

### The `item-value-key`

You are able to set the `item-value-key` which maps to a value of the returned object from the `items-method`. The value
is then saved in the defined `ng-model`. Here an example:

The items method returns the following object:
```javascript
[
    {
        "id": "1",
        "name": "Item 1",
        ...
    }
    ...
]
```

And now you set the following `item-value-key`:
```html
<ion-autocomplete ng-model="model" item-value-key="id" />
```

Now when the user selects the `Item 1` from the list, then the value of the objects `id` is stored in the `ng-model`. If
no `item-value-key` is passed into the directive, the whole item object will be stored in the `ng-model`.

### The `item-view-value-key`

You are able to set the `item-view-value-key` which maps to a value of the returned object from the `items-method`. The
value is then showed in both input fields. Here an example:

The items method returns the following object:
```javascript
[
    {
        "id": "1",
        "name": "Item 1",
        ...
    }
    ...
]
```

And now you set the following `item-view-value-key`:
```html
<ion-autocomplete ng-model="model" item-view-value-key="name" />
```

Now when the user selects the `Item 1` from the list, then the value of the objects `name` is showed in both input fields. If
no `item-view-value-key` is passed into the directive, the whole item object will be showed in both input fields.

### Placeholder

You are also able to set the placeholder on the input field and on the search input field if you add the `placeholder`
attribute to the directive:
```html
<ion-autocomplete ng-model="model" placeholder="Enter the query to search for ..." />`
```

### Cancel button label

You are also able to set the cancel button label (defaults to `Cancel`)if you add the `cancel-label` attribute to the directive:
```html
<ion-autocomplete ng-model="model" cancel-label="Go back" />`
```

## Acknowledgements

When I first searched for an Ionic autocomplete component I just found the project from Danny. So please have a look at
his [ion-google-place](https://github.com/israelidanny/ion-google-place) project as this project here is a fork of it.
At this point I want to thank him for his nice work.

## License

This Ionic autocomplete directive is available under the MIT license.

(c) Danny Povolotski

(c) Modifications by Guy Brand
