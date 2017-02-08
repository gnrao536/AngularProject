(function(){
    
    // creating named function and passed to cmDatePicker directive
    function cmDatePicker(){
        return{
            restrict:"A",
            link:function(scope,element,attrs){
                var options={};
                if(attrs["mindate"]){
                    options.minDate=attrs["mindate"];
                }
                if(attrs["maxdate"]){
                    options.maxDate=attrs["maxdate"];
                }
                element.datepicker(options);
            }
        }
    }
    
    //  retriving common module and creating directive
    angular.module("common")
    .directive("cmDatePicker",[cmDatePicker]);
})();