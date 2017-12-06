$(function() {
 //sliderCost
  if(document.getElementById('sliderange__cost')) { 
    var sliderCost = document.getElementById('sliderange__cost'); // через jQuery не подключается
    noUiSlider.create(sliderCost, {
      start: [25, 75],
      connect: true, 
      range: {
        'min': 0,
        'max': 100
      }
    });
    var costLower = document.getElementById('costLower');
    var costUpper = document.getElementById('costUpper');
    
    sliderCost.noUiSlider.on('update', function( values, handle ) {
      costLower.value = values[0];
      costUpper.value = values[1];
    });
    
    costLower.addEventListener('change', function(){
      sliderCost.noUiSlider.set([this.value,]);
    });
    
    costUpper.addEventListener('change', function(){
      sliderCost.noUiSlider.set([,this.value]);
    });
  } 
  //sliderCost END
  
  //sliderFloor
  if(document.getElementById('sliderange__floor')) {
    var sliderFloor = document.getElementById('sliderange__floor'); // через jQuery не подключается
    noUiSlider.create(sliderFloor, {
      start: [25, 75],
      connect: true,
      step: 1, 
      range: {
        'min': 0,
        'max': 100
      }
    });
    
    var floorLower = document.getElementById('floorLower');
    var floorUpper = document.getElementById('floorUpper');
    
    sliderFloor.noUiSlider.on('update', function( values, handle ) {
      floorLower.value = values[0];
      floorUpper.value = values[1];
    });
    
    floorLower.addEventListener('change', function(){
      sliderFloor.noUiSlider.set([this.value,]);
    });
    
    floorUpper.addEventListener('change', function(){
      sliderFloor.noUiSlider.set([,this.value]);
    });
  } 
  //sliderFloor END
  
  //sidebar sliderFloors
  if(document.getElementById('sliderange__floors')) {
    var sliderFloors = document.getElementById('sliderange__floors'); // через jQuery не подключается
    noUiSlider.create(sliderFloors, {
      start: [25, 75],
      connect: true,
      step: 1, 
      range: {
        'min': 0,
        'max': 100
      }
    });
    
    var floorsLower = document.getElementById('floorsLower');
    var floorsUpper = document.getElementById('floorsUpper');
    
    sliderFloors.noUiSlider.on('update', function( values, handle ) {
      floorsLower.value = values[0];
      floorsUpper.value = values[1];
    });
    
    floorsLower.addEventListener('change', function(){
      sliderFloors.noUiSlider.set([this.value,]);
    });
    
    floorsUpper.addEventListener('change', function(){
      sliderFloors.noUiSlider.set([,this.value]);
    });
  } 
  //sidebar sliderFloors END
  
  //sliderange__floor-searchpanel
  if(document.getElementById('sliderange__floor-searchpanel')) {
    var sliderFloorSearchpanel = document.getElementById('sliderange__floor-searchpanel'); // через jQuery не подключается
    noUiSlider.create(sliderFloorSearchpanel, {
      start: [25, 75],
      connect: true,
      step: 1, 
      range: {
        'min': 0,
        'max': 100
      }
    });
    
    var floorLowerSearchpanel = document.getElementById('floorLower-searchpanel');
    var floorUpperSearchpanel = document.getElementById('floorUpper-searchpanel');
    
    sliderFloorSearchpanel.noUiSlider.on('update', function( values, handle ) {
      floorLowerSearchpanel.value = values[0];
      floorUpperSearchpanel.value = values[1];
    });
    
    floorLowerSearchpanel.addEventListener('change', function(){
      sliderFloorSearchpanel.noUiSlider.set([this.value,]);
    });
    
    floorUpperSearchpanel.addEventListener('change', function(){
      sliderFloorSearchpanel.noUiSlider.set([,this.value]);
    });
  } 
  //sliderange__floor-searchpanel END
  
  //sliderange__cost-searchpanel
   if(document.getElementById('sliderange__cost-searchpanel')) { 
     var sliderCostSearchpanel = document.getElementById('sliderange__cost-searchpanel'); // через jQuery не подключается
     noUiSlider.create(sliderCostSearchpanel, {
       start: [25, 75],
       connect: true, 
       range: {
         'min': 0,
         'max': 100
       }
     });
     var costLowerSearchpanel = document.getElementById('costLower-searchpanel');
     var costUpperSearchpanel = document.getElementById('costUpper-searchpanel');
     
     sliderCostSearchpanel.noUiSlider.on('update', function( values, handle ) {
      costLowerSearchpanel.value = values[0];
      costUpperSearchpanel.value = values[1];
     });
     
     costLowerSearchpanel.addEventListener('change', function(){
      sliderCostSearchpanel.noUiSlider.set([this.value,]);
     });
     
     costUpperSearchpanel.addEventListener('change', function(){
      sliderCostSearchpanel.noUiSlider.set([,this.value]);
     });
   } 
   //sliderange__cost-searchpanel END











  //sliderange__floor-popupsearch
  if(document.getElementById('sliderange__floor-popupsearch')) {
    var sliderFloorpopupsearch = document.getElementById('sliderange__floor-popupsearch'); // через jQuery не подключается
    noUiSlider.create(sliderFloorpopupsearch, {
      start: [25, 75],
      connect: true,
      step: 1, 
      range: {
        'min': 0,
        'max': 100
      }
    });
    
    var floorLowerpopupsearch = document.getElementById('floorLower-popupsearch');
    var floorUpperpopupsearch = document.getElementById('floorUpper-popupsearch');
    
    sliderFloorpopupsearch.noUiSlider.on('update', function( values, handle ) {
      floorLowerpopupsearch.value = values[0];
      floorUpperpopupsearch.value = values[1];
    });
    
    floorLowerpopupsearch.addEventListener('change', function(){
      sliderFloorpopupsearch.noUiSlider.set([this.value,]);
    });
    
    floorUpperpopupsearch.addEventListener('change', function(){
      sliderFloorpopupsearch.noUiSlider.set([,this.value]);
    });
  } 
  //sliderange__floor-popupsearch END

  
  //sliderange__cost-popupsearch
   if(document.getElementById('sliderange__cost-popupsearch')) { 
     var sliderCostpopupsearch = document.getElementById('sliderange__cost-popupsearch'); // через jQuery не подключается
     noUiSlider.create(sliderCostpopupsearch, {
       start: [25, 75],
       connect: true, 
       range: {
         'min': 0,
         'max': 100
       }
     });
     var costLowerpopupsearch = document.getElementById('costLower-popupsearch');
     var costUpperpopupsearch = document.getElementById('costUpper-popupsearch');
     
     sliderCostpopupsearch.noUiSlider.on('update', function( values, handle ) {
      costLowerpopupsearch.value = values[0];
      costUpperpopupsearch.value = values[1];
     });
     
     costLowerpopupsearch.addEventListener('change', function(){
      sliderCostpopupsearch.noUiSlider.set([this.value,]);
     });
     
     costUpperpopupsearch.addEventListener('change', function(){
      sliderCostpopupsearch.noUiSlider.set([,this.value]);
     });
   } 
   //sliderange__cost-popupsearch END
  
  
});

