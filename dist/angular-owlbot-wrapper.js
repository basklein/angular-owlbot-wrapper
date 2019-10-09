/**
    @name: angular-owlbot-wrapper 
    @version: 0.0.1 (09-10-2019) 
    @author: Bas Klein <basklein@basklein.com> 
    @url: https://github.com/basklein/angular-owlbot-wrapper#readme 
    @license: MIT
*/
angular.module('angular-owlbot-wrapper', []);

angular.module('angular-owlbot-wrapper').provider('owlbotService', function () {
  var token = null;

  this.setToken = function (value) {
    token = value;
  }

  this.$get = ['$http', function ($http) {
    return {
      getDefinition: function (word) {
        if (!token) {
          console.error("No token provided. Please use the setToken() function to set a token.");
          return null;
        }

        return $http.get('https://cors-anywhere.herokuapp.com/https://owlbot.info/api/v3/dictionary/' + word, {headers:{'Authorization':'Token ' + token}}).then(function(response) {
          return response;
        }, function () {
          return null;
        });
      }
    }
  }];
});
