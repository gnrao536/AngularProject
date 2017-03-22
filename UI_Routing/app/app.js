(function(){
    angular.module('routerApp', ['ui.router','login','home','register']);

    angular.module('routerApp')
     .config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
        
        // multiple views
    
    var home={
        views:{
            '':{templateUrl: 'app/home/home.tpl.html',controller:"homeCtrl"},
        'home1':{templateUrl: 'app/home/home1.tpl.html'},
         'home2':{templateUrl: 'app/home/home2.tpl.html'}
        },
        url: '/home'
    }
    
    //  adding controller
    
    var login={
        templateUrl: 'app/login/login.tpl.html',
               url: '/login',
        controller:"loginCtrl"
              }
    
    // nested views
    
    var register={templateUrl: 'app/register/register.tpl.html', url: '/register',  controller:"registerCtrl"}
    var register1= {templateUrl:'app/register/register1.tpl.html'}
    var register2= {parent:'register',templateUrl:'app/register/register2.tpl.html'}
    
    $stateProvider.state('home', home);
    $stateProvider.state('login',login);
    $stateProvider.state('register',register);
    $stateProvider.state('register.register1',register1);
    $stateProvider.state('register.register2',register2);
        
        
});
})();