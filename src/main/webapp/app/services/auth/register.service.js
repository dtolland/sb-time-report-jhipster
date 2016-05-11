(function () {
    'use strict';

    angular
        .module('sbTimeReportApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
