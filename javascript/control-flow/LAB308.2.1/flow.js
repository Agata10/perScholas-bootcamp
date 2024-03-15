const radius = 5; //meters
const PI = 3.1415;
const area = Math.floor(PI * radius * radius); ///our maximum area
const minSpace = 0.8; //meters
let plantCount = 20;
///plants double in number every week

///maximumPlants we can plant
let maxPlants = area / minSpace;

let week = 2;
let plantsInTheWeek = plantCount * 2 ** week; //  calculate plants in current week

if (plantsInTheWeek > 0.8 * maxPlants) {
  // greater than 80% of capacity
  console.log("Pruned");
} else if (
  plantsInTheWeek >= 0.5 * maxPlants && // less than 80% of capacity or bigger than 50% of area capacity
  plantsInTheWeek <= 0.8 * maxPlants
) {
  console.log("Monitored");
} else if (plantsInTheWeek < 0.5 * maxPlants) {
  //less than 50% of capacity area
  console.log("Planted");
}

/// week 1 result : Planted
///wek 2 result : Planted
/// week 3 result : Pruned

/// 100 weeks
plantCount = 100;
week = 10;
let plantPerWeek10 = plantCount * 2 ** week; ///count of plants after 10 weeks
let spaceForInitialPlantCount = Math.floor(plantCount * minSpace); //space for 100 plants
let finalSpaceAfter10weeks = Math.floor(plantPerWeek10 * minSpace); // space after 10 weeks
const additionalSpace = finalSpaceAfter10weeks - spaceForInitialPlantCount;

let newArea = area + additionalSpace;
console.log(finalSpaceAfter10weeks);

let circle = Math.floor(Math.sqrt(newArea / PI)); /// 161
console.log("New circle area " + circle);
