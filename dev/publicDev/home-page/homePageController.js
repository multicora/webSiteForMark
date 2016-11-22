'use strict';

(function() {
  angular
    .module('app')
    .controller('homePageController', homePageController);

  homePageController.$inject = [];

  function homePageController() {
    var vm = this;

    vm.animated = function (elementId, oldClass, newClass) {
      var element = document.getElementById(elementId);
      var elementY = element.offsetTop-500;

      if (window.scrollY >= elementY) {
        element.classList.remove(oldClass);
        element.classList.add(newClass);
      }
    }

    var logoIcon = document.getElementById('logo-icon');
    var logoScaling = document.getElementById('logo-scaling');
    var logoSales = document.getElementById('logo-sales');
    var header = document.getElementById('header');
    
    window.addEventListener('scroll', function(e) {

      setTimeout(function() {
        logoSales.classList.add('logo-sales-animated');
        logoScaling.classList.add('logo-scaling-animated');
        logoIcon.classList.add('logo-icon-animated');
      }, 500);

      setTimeout(function() {
        logoSales.classList.add('logo-sales-animated-top');
        logoScaling.classList.add('logo-scaling-animated-top');
        logoIcon.classList.add('logo-icon-animated-top');
      }, 2500);

      vm.animated('more-icon1', 'none', 'fadeInUp');
      vm.animated('more-icon2', 'none', 'fadeInUp');
      vm.animated('more-icon3', 'none', 'fadeInUp');
      vm.animated('client-logos', 'none', 'fadeIn');
      vm.animated('how-we-work1', 'none', 'fadeInRight');
      vm.animated('how-we-work2', 'none', 'fadeInLeft');
      vm.animated('how-we-work3', 'none', 'fadeInRight');
      vm.animated('will-get', 'none', 'fadeInDown');
    });

  }
})();