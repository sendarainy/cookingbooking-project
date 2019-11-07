function compareArrays(arr1, arr2) {
  return arr1.every((el, i) => el & arr2[i])
}

const arr1 = [true, true, false]
const arr2 = [true, true, false]

console.log(compareArrays(arr1, arr2))