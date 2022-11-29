// async function 本身會回傳 Promise，
// 因此 async function 之後也可以用 `.then()` 串起來
main().then((value) => {
    console.log(value);
  });
  
   async function main() {
    console.log('a')
    console.log(`step1`,'start fn'); // STEP 1-1
    let val = await get(); // STEP 1-2
    console.log(`step2`,'get value after await', val); // STEP 2-1
    
    let result = await process(val); // STEP 2-2
    
    console.log(`step3`,'Final result', result); // STEP 3-1
    return result;
   }
  
  function get() {
    console.log(`step1-2`,'I am in get out of Promise'); //  STEP 1-3
    return new Promise((resolve, reject) => {
      //  STEP 1-4
      setTimeout(() => resolve('running'), 3000); //  STEP 1-5 To STEP 2 after 1 sec
    });
  }
  
  function process(value) {
    console.log(`step2-2`,"I'm in process,", value, ", please wait..."); //  STEP 2-3
    return new Promise((resolve, reject) => {
      //  STEP 2-4
      setTimeout(() => resolve(`${value} finished`), 3000); // STEP 2-5 To STEP 3 after 1 sec
    });
  }

// function main(){
//     console.log('hi')
//     let a = 'a'
//     var b = 'b'
//     console.log(a)
//     console.log(b)
// }