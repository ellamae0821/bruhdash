var global = window || GLOBAL;

/****************************************************************************************
 * Function signatures have been intentionally left out of the comments describing what *
 * each function does so that you can have practice looking up documentation. Please    *
 * Reference the documentation at [ https://lodash.com/docs/4.17.4 ] You should have    *
 * documentation up in a browser window at all times when working on projects!          *
 ****************************************************************************************/

global.bruhdash = {

  // returns the first element of an array
  first: function (array) {
      return array[0];
  },

  // returns the last element of an array
  last: function (array) {
      return array[array.length-1];
  },

  // returns the index of the first matching element from left to right
/*  indexOf: function (array, value) {
  var result = 0;
  for (var i=0; i<array.length; i++){
    if(i === value){
      result = i - 1;
    }else{
      result = -1;
    }
  }return result;
},*/

  indexOf: function (array, value) {
  for (var i=0; i < array.length; i++){ 
    if(array[i] === value){
      return i;
    }
  }return -1;
},


  // returns the index of the first matching element from left to right
/*  lastIndexOf: function (array, value) {
  for (var i=0; i< array.length; i--){
    if(array [i] === value){
      return i;
    }
  }return -1;
},

*/
/*  lastIndexOf: function (array, value) {
  for (var i=1; i = array.length; i--){
    if(array[i] === value){
      return i;
    }
  }return -1;
},*/


  // returns an array with all elements except for the last element
  initial: function (array) {
     array.pop();
     return array;
  },
  
/*    initial: function (array) {
      newArray = newArray.initial(array);
      return newArray;
  },*/
  // returns an array with all falsey values removed
/*  compact: function(array) {
    for (var i=0;i<array.length; i++){
      return array.filter(Boolean);
    }
  },*/

  compact: function(array){
    newArray = [];
    for (var i=0; i<array.length; i++){
      if(array[i]){ // truthy values in array's index
        newArray.push(array[i]);
      }
    }
    return newArray;
  },

  // creates a slice of an array from the start index up to but not including the end index
  slice: function (array, start, end) {
    newArray = [];
    for (var i=start; i<end; i++){
      newArray.push(array[i]);
    }
    return newArray;
  },



  // returns a slice of array with n elements dropped from the beignning
  drop: function(array, nDrop){
    newArray = [];
    if (nDrop){
      for (var i=nDrop; i<array.length; i++){
        newArray.push(array[i]);
      }
      return newArray;
    }else if(nDrop=== 0){
      return array;
    }
    for (var j=1; j<array.length; j++){
      newArray.push(array[j]);
    }
    return newArray;    

  },


  // returns a slice of array with n elements dropped from the end
  dropRight: function(array, nDrop) {
    newArray = [];
    if (nDrop){
      for (var i=0; i<array.length-nDrop; i++){
        newArray.push(array[i]);
      }
      return newArray;
    }else if(nDrop=== 0){
      return array;
    }
    for (var j=0; j<array.length-1; j++){
      newArray.push(array[j]);
    }
    return newArray;    

},


  // creates a slice of an array with n elements taken from the beginning
  take: function (array, nTake) {
    newArray = [];
    if (nTake){
      for (var i=0; i<nTake; i++){
        newArray.push(array[i]);
      }
/*    }else if (nTake > array.length){
      for(var j=0; j<array.length; j++){
        newArray.push(array[j]);
      }*/
      
    }else if (nTake === 0){
      return [];
    }

    return newArray;
  },
 /* take: function (array, takeNum) {
    var takeArr = [];
    if(takeNum === 0) { 
      return [];
    } else if(takeNum > array.length) { 
      return array;
    } else if(takeNum) {
      for(var i = 0; i < takeNum; i++) { 
        takeArr.push(array[i]);
      }
      return takeArr;
    }
    takeArr.push(array[0]);
    return takeArr;
*/
  // creates a slice of an array with n elements taken from the end
  takeRight: function () {

  },

  // fills elements of array with specified value from the start index
  // up to but not including the end index
  fill: function(array, value, start, end) {
    if(start && end) {
      return array.fill(value, start, end);
    }
    return array.fill(value);
  },

  // removes all given values from an array
  pull: function (array, value) {
    var pulling;
        for(var i = 0; i < value.length; i++) {
          pulling = array.indexOf(value[i]);
          if(pulling >= value) {
            array.splice(pulling, 3);
          }
        }
    return array;
  },

  // removes elements of an array corresponding to the given indices
  pullAt: function (array, indices) {
    for(var i = indices.length-1; i >= 0; i--) {
      array.splice(indices[i], 1);
    }
    return array;
  },

  // creates an array excluding all the specified values
  without: function(array, values) {
    var loc;
        for(var i = 0; i < values.length; i++) {
          loc = array.indexOf(values[i]);
          if(loc >= 0) {
            array.splice(loc, 1);
          }
        }
    return array;
  },

  // returns an array with specified values excluded
  difference: function() {

  },

  /*******************
   *  STRETCH GOALS! *
   *******************/ 

  // creates an array of grouped elements
  zip: function () {

  },

  // creates an array of grouped elements in their pre-zip configuration
  unzip: function () {

  },

  // creates an array of elements into groups of length of specified size
  chunk: function(){

  },

  // iterates over elements of a collection and invokes iteratee for each element
  // Note: this should work for arrays and objects
  forEach: function() {

  },

  // creates an array of values by running each element in collection thru the iteratee
  // Note: this should work for arrays and objects
  map: function() {

  },

  /*************************
   *  SUPER STRETCH GOALS!  *
   *************************/ 

  // iterates over elements of a collection and returns all elements that the predicate returns truthy for
  // Note: this should work for arrays and objects
  filter: function() {

  },

  // Reduces the collection to a value which is the accumulated result of running each element
  // in the collection through an iteratee
  // Note: this should work for arrays and objects
  reduce: function() {
    
  }
};