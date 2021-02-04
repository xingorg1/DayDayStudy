// Problem: 添加元素(指定位置添加)
// 描述：在数组arr的index处添加元素item，不要直接修改数组arr，结果返回新的数组
// [1,2,3]  2,6  结果为[1,2,6,3]
// @interview start
let arr = [1, 2, 3]
// arr.splice(1, 1, 2, 6)

function appendNode(arr, index, ...item) {
  console.log(item)
  let arrLeft = arr.slice(0, index)
  let arrRight = arr.slice(index)
  let arrRst = arrLeft.concat(item).concat(arrRight)
  return [...new Set(arrRst)]
}
console.log(appendNode(arr, 1, 2, 6))

// @interview end
