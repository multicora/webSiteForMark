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
      var elementY = element.offsetTop-300;

      if (window.scrollY > elementY) {
        element.classList.remove(oldClass);
        element.classList.add(newClass);
      }
    }

    window.addEventListener('scroll', function(e) {  
      vm.animated('more-icon1', 'non', 'fadeInUp');
      vm.animated('more-icon2', 'non', 'fadeInUp');
      vm.animated('more-icon3', 'non', 'fadeInUp');
      vm.animated('client-logos', 'non', 'fadeIn');
      vm.animated('how-we-work1', 'non', 'fadeInRight');
      vm.animated('how-we-work2', 'non', 'fadeInLeft');
      vm.animated('how-we-work3', 'non', 'fadeInRight');
      vm.animated('will-get', 'non', 'fadeInDown');

    });

  }
})();