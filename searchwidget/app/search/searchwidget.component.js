/**
 * Created by akanadam on 10/13/17.
 */

angular.module('searchWidget')
    .component('searchBox',{
       templateUrl:'search/searchwidget.template.html',
        controller:['$http',function SearchWidgetController($http){
           this.searchQuery = "";
           this.searchResult = "";
           var self = this;

           this.getSearchResults = function (searchInput){
               var urlEncoded = encodeURI(searchInput);
               var searchUrl = 'https://itunes.apple.com/search?term='+urlEncoded+'&limit=10';
               $http.get(searchUrl)
                   .then(function(response){
                       console.log("Calling");
                      self.formatResults(response.data.results);
                   })
           }

           this.formatResults = function(results){
               self.searchResult = results;
               console.log(JSON.stringify(results));
           }
        }]
    });