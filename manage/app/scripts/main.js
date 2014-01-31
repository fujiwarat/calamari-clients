/*global require */
'use strict';
require.config({
    shim: {
        'angular-resource': {
            deps: ['angular']
        },
        'angular-cookies': {
            deps: ['angular']
        },
        'angular-sanitize': {
            deps: ['angular']
        },
        'angular-route': {
            deps: ['angular']
        },
        'angular-strap': {
            deps: ['angular']
        },
        'angular-animate': {
            deps: ['angular']
        },
        'bootstrap': {
            deps: ['jquery']
        },
        'angular': {
            deps: ['jquery'],
            exports: 'angular'
        }
    },
    paths: {
        'jquery': '../bower_components/jquery/jquery',
        'angular': '../bower_components/angular/angular',
        'angular-resource': '../bower_components/angular-resource/angular-resource',
        'angular-cookies': '../bower_components/angular-cookies/angular-cookies',
        'angular-sanitize': '../bower_components/angular-sanitize/angular-sanitize',
        'angular-route': '../bower_components/angular-route/angular-route',
        'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap',
        'angular-strap': '../bower_components/angular-strap/dist/angular-strap.min',
        'angular-animate': '../bower_components/angular-animate/angular-animate'
    }
});

require(['./app'], function() {});