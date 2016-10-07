'use strict';
// @flow

import angular from 'angular';

type User = {
  name: string;
  email: string;
  status: string;
  password: string;
};

export default class IndividualSignupController {
  user: User = {
    name: '',
    email: '',
    status: 'permanent',
    password: ''
  };
  errors = {};
  submitted = false;
  Auth;
  $state;

  /*@ngInject*/
  constructor(Auth, $state) {
    this.Auth = Auth;
    this.$state = $state;
  }

  register(form) {
    this.submitted = true;

    if(form.$valid) {
      return this.Auth.createUser({
        name: this.user.name,
        email: this.user.email,
        status: 'permanent',
        password: this.user.password
      })
        .then(() => {
          // Account created, redirect to home
          this.$state.go('main');
        })
        .catch(err => {
          err = err.data;
          this.errors = {};
          // Update validity of form fields that match the mongoose errors
          angular.forEach(err.errors, (error, field) => {
            form[field].$setValidity('mongoose', false);
            this.errors[field] = error.message;
          });
        });
    }
  }
}
