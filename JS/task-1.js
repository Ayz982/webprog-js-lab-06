function isEnoughCapacity(products, containerSize, fragileItems, minVolume) {
  let size = 0;
  let Volume = 0;
  let result = "";
  let check = true;
  for (const key in products) {
    if (check) {
      for (let i = 0; i < fragileItems.length; i++) {
        if (key === fragileItems[i]) {
          result += "Container should be used with care.";
          check = false;
        }
      }
    }
    Volume = products[key].count * products[key].volume;
    size += products[key].count;
  }
  if (size > containerSize) {
    console.log(`Container is not enough for all products. You need to add ${size - containerSize} more capacity.`);
    return false;
  } else if (Volume < minVolume){
    console.log(`Not enough capacity for the minimum allowed volume. Exceeded by ${minVolume - Volume}.`);
    return false;
  } else {
    if (!check) {
      console.log(result);
      return true;
    }
  }
}
let fragileItems = ["grapes", "lime"];
const products = {
    apples: { count: 2, volume: 1.5 },
    grapes: { count: 3, volume: 0.5 },
    oranges: { count: 4, volume: 1.2 }
  };
  console.log(isEnoughCapacity(products, 10, fragileItems, 6)); 