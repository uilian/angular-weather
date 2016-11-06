//Directives

myWeather.directive('weatherResults', function(){
    return {
        restrict : 'E',
        templateUrl : "directives/weatherResults.htm",
        replace : true,
        scope : {
            resultDate : '@',
            dayTemp : '@'
        }
    }
});