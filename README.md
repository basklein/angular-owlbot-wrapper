[![npm version](https://badge.fury.io/js/angular-owlbot-wrapper.svg)](https://badge.fury.io/js/angular-owlbot-wrapper)
[![GitHub issues](https://img.shields.io/github/issues/basklein/angular-owlbot-wrapper.svg?style=flat-square)](https://github.com/basklein/angular-owlbot-wrapper/issues)
[![GitHub license](https://img.shields.io/github/license/basklein/angular-owlbot-wrapper.svg?style=flat-square)](https://github.com/basklein/angular-owlbot-wrapper/blob/master/LICENSE)

# angular-owlbot-wrapper
Owlbot service for AngularJS

## Description
This is a service for AngularJS that allows for easy requests to the Owlbot dictionary API.

## Usage

1. Install via [npm](https://www.npmjs.com/) or downloaded files:
    1. via npm: `npm install --save angular-owlbot-wrapper`
    2. via [downloaded files](https://github.com/basklein/angular-owlbot-wrapper/master)
2. Add `angular-owlbot-wrapper` to your application's module dependencies.
3. Include dependencies and angular-owlbot-wrapper in your HTML.
    - When using npm
    ```html
    <script src="node_modules/angular-owlbot-wrapper/dist/angular-owlbot-wrapper.min.js"></script>
    ```
    - When using downloaded files
    ```html
    <script src="YOUR_PATH/angular-owlbot-wrapper.min.js"></script>
    ```
4. Set your Owlbot API token in your config script with the owlbotServiceProvider.setToken function.
5. Use the angular service `owlbotService`.

## Sample

Javascript:
```javascript
angular.module('app', ['angular-owlbot-wrapper']);

angular.module('angular-owlbot-wrapper').config(['owlbotServiceProvider', function (owlbotServiceProvider) {
  owlbotServiceProvider.setToken('TOKENGOESHERE');
}]);

angular.module('app')
    .controller('appController', function ($scope, owlbotService) {
        $scope.getDefinition = function (word) {
          return owlbotService.getDefinition(word).then(function (result) {
            console.log(result);
            return result;
          });
        };
    });
```

# LICENSE
MIT
