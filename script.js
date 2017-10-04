var locations = []; // this array will hold your objects

// object constructor
function State (state, revenue, locationCount){
  this.state = state;
  this.revenue = revenue;
  this.locationCount = locationCount;
  this.averageRevenue = function(){
    var averageRevenue = this.revenue/this.locationCount;
    return averageRevenue;
  };
}


// object instances
var pizzaPlace1 = new State('IL', 5000, 12);
var pizzaPlace2 = new State('MN', 300, 3);
var pizzaPlace3 = new State('NV', 25000, 1);
// console.log(pizzaPlace1.averageRevenue);
// console.log(pizzaPlace2.averageRevenue);
// console.log(pizzaPlace3);
// push object instances to locations array
locations.push(pizzaPlace1);
locations.push(pizzaPlace2);
locations.push(pizzaPlace3);
// DO NOT MODIFY THIS CODE
$(document).ready(function () {
  locations.forEach(function (element, index) {
    var $li = $('<li></li>');
    $li.append('<span>' +  element.state + '</span>');
    $li.append('<span>' +  element.revenue + '</span>');
    $li.append('<span>' +  element.locationCount + '</span>');
    $li.append('<span>' +  element.averageRevenue() + '</span>');
    $('ol').append($li);
  });
});
