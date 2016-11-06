// Service

myWeather.service('cityService', function(){
    
    this.city = 'New York, NY';
    
});



myWeather.service('weatherService', ['$resource', function($resource){
   
    this.GetWeather = function(city, days){
        var weatherAPI = $resource(
            'http://api.openweathermap.org/data/2.5/forecast/daily?APPID=b2c161adce5c1020c59c5cfd0129723b', 
            { callback : "JSON_CALLBACK" }, 
            { get : { method : "JSONP" }});

        return weatherAPI.get({q: city, cnt: days, units : 'metric'});
    };

    
}]);

// http://api.openweathermap.org/data/2.5/forecast/daily?APPID=b2c161adce5c1020c59c5cfd0129723b
