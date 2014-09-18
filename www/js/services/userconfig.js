'use strict';

angular.module('services')
  .service('userconfig', ["insight", "$http", function userconfig(insight, $http) {
    
    var test = function(userdatas) {
        var testUrl = 'https://' + userdatas.userid + ':' + userdatas.usertoken + '@' + insight.uri + 'projects';
        return $http.get(testUrl)
    };

    return {
        test: test
    };

  }]);
