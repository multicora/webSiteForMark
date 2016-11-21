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

    console.log(document.getElementById('more-icon1').offsetTop);

    window.addEventListener('scroll', function(e) {  
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