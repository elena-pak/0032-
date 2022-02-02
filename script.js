// let array = [1, [2, 7, 8], [3, 4], [5, [6, 7]]];
 

//   function look_for_key(myArr){
//       for (let i = 0; i < myArr.length; i++){
//           if (Array.isArray(myArr[i])){
//               look_for_key(myArr[i])
//           }else if (myArr[i] === 83){
//               console.log(`found the key - ${myArr[i]}`)
//           }
//       }
//     }
// let a = [1, [2, 7, 8], [3, 4], [5, [6, 7]]]
// look_for_key(a)



function convert(myArr, resultArr){
    for (let i = 0; i < myArr.length; i++){
        if(Array.isArray(myArr[i])){
            convert(myArr[i], resultArr)
        } else{

            resultArr.push(myArr[i])
        }
  }
  return resultArr
}
let a = [1, [2, 7, 8], [3, 4], [5, [6, 7]]]
let b = []
console.log(convert(a, b))