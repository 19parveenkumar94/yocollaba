'use strict';

import angular from 'angular';
import LoginController from './login.controller';

export default angular.module('yoCollaba3App.login', [])
  .controller('LoginController', LoginController)
  .name;
