(function(){
    
    //  creating named function and passed to loginCtrl  controller
    function loginCtrl(){
        var vm=this;
        vm.user={};
    }
    
    
    //  retriving login module and creating controller
    angular.module("login")
    .controller("loginCtrl",[loginCtrl]);
})();