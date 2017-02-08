(function(){
        
    // creating named function and passed to cmSlider directive
    function cmSlider(){
        return{
            restrict:"A",
            link:function(scope,element,attrs){
                element.slider({
                        range: true,
                        min: 0,
                        max: 500,
                        values: [75, 300],
                        slide: function (event, ui) {
                            var rangeValues = ui.values[0] + " - $" + ui.values[1];
                            console.log(rangeValues);
                        }
                    });
            }
        };
    }
    
    // retriving common module and creating directive
    angular.module("common")
    .directive("cmSlider",[cmSlider]);
})();