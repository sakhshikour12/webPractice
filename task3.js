/** Return a new array with every item in array1 and array2. **/
// function extend(array1,array2){
//     return [...array1,...array2]
// }
// console.log(extend([1,2,3,4,5],[6,7,8,9,34,6]))


/** Return a new object with all the keys and values
from obj and a new key/value pair **/
// const addKeyVal = (obj, key, val) => {
//     let newObj = { ...obj }
//     newObj[key] = val;
//     return newObj;
//   }
//   let ob = {
//     caste:'kour',
//     age:21,
//   }
//   console.log(addKeyVal(ob,'hello','anything'))

/** Return a new object with a key removed. **/
const removeKey = (obj, key) => {
        let nobj = {...obj}
        delete nobj[key]
        return nobj
    
}
console.log(removeKey({fname:'sak',lname:'kour'},'lname'))

/** Combine two objects and return a new object. **/
const newob = (obj,obj1) =>{
  return {...obj , ...obj1}
}

/** Return a new object with a modified key and value. */
const upt = (obj, key, val)=>{
  let newob = {...obj}
  newob[key] = val
  return newob;
}


console.log(upt({fname:'sak', lname:'kour',age:21},'fname','sakshi'));

  