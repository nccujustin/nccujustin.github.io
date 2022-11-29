async function sleep(time) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Sleeping")
        resolve();
      }, time)
    })
    
  }
  
  async function main() {
    console.log("start to sleep 1 seconds");
    await sleep(3000);
    console.log("first sleep over");
  }
  
  main().then(async() => {
    console.log("start 2 seconds sleep")
    await sleep(2000);
    console.log("end")
  })