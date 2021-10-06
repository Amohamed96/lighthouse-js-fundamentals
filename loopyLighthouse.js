let i = 100;

while (i >= 100 && i <= 200) {
   
  if (i % 3 !== 0 && i % 4 !== 0) {
    console.log(i);
  }
  if (i % 4 === 0 && i % 3 === 0){
    console.log("LoopyLighthouse");
  }
  if (i % 3 === 0 && i % 4 !== 0){
    console.log("Loopy");
  }
  if (i % 4 === 0 && i % 3 !== 0){
    console.log("Lighthouse"); 
  }
  i++;
}