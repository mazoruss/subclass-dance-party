

var BlinkyDancer = function(top, left, timeBetweenSteps) {

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  
  Dancer.call(this, top, left, timeBetweenSteps);
  //debugger;
  //this.$node = $('<span class="blinkydancer"></span>');
};


BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;



BlinkyDancer.prototype.step = function(timeBetweenSteps) {
  // call the old version of step at the beginning of any call to this new version of step

  Dancer.prototype.step.call(this, timeBetweenSteps);

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.

  //console.log("node toggle" + JSON.stringify(this.$node));
  //console.log("this " + this);
  this.$node.toggle();
};
