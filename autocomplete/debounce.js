/**
 * Created by akanadam on 9/26/17.
 */

function debounce(element, event, listener, time){
    var t ;
    var self = this;
    $(element).bind(event,function(){
        clearTimeout(t);
        t = setTimeout(function(){
            listener.call(self,element);
        }, time);
    });
}

function searchCountriesListener(elementId){
   var search =  $(elementId).val();
   $.ajax({
       method:"get",
       url:"countries.json",
       success:function(response){
           var countries = response.countries;
           var searchList = countries.filter(function(country){
               return country.toLowerCase().indexOf(search.toLowerCase()) !== -1;
           });
           console.log(searchList);
           var countriesList = [];
           for(var i = 0; i < searchList.length; i++){
               countriesList.push("<li>");
               countriesList.push(searchList[i]);
               countriesList.push("</li>")
           }
           $("#countriesList").html(countriesList.join(''));
           //$("#countriesList").html("<li>" + searchList.join('</li> <li>') + "</li>");
       }
   });
}

debounce("#countries" , "keypress" , searchCountriesListener, 200);