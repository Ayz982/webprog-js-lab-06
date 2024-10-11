function calcAverageCalories(days) {
  let suma = 0;
  let count = 0;
  let average = 0;
    for (const day of days) {
        if (day.calories != null && day.calories != undefined) {
            suma += day.calories;
            if (day.intensity == "high") {
                suma += day.calories - day.calories * 0.1;
            } else if (day.intensity == "low") {
                suma += day.calories + day.calories * 0.1;
            } else {
                suma += day.calories;
            }
            count++;
        }
    }
    if (count != 0) {
        average = suma / count;
        if (average > 3000) {
            console.log("The athlete consumes enough calories.");
        } else {
            console.log("The athlete does not consume enough calories.");
        }
        return average;
    } else {
        console.log("The athlete does not consume enough calories.");
        return 0;
    }
}
let days1 = [
    { intensity: "medium" },
    { intensity: "high" },
    { intensity: "low" },  
  ];
console.log(calcAverageCalories(days1)); 
let days2 = [];
console.log(calcAverageCalories(days2));
let days3 = [{ calories: 2000 }, { calories: 1500 }, { calories: 1800 }];
console.log(calcAverageCalories(days3));
