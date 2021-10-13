

var donuts = [
  { type: "Jelly", cost: 1.22 },
  { type: "Chocolate", cost: 2.45 },
  { type: "Cider", cost: 1.59 },
  { type: "Boston Cream", cost: 5.99 }
];
/*
for (let thingy of donuts){
   if (thingy == donuts[0]){
    console.log("Jelly donuts cost " + "$" + donuts[0].cost + " each");
    
}  else if (thingy == donuts[1]){
    console.log("Chocolate donuts cost " + "$" + donuts[1].cost + " each");
    
}  else if (thingy == donuts[2]){
    console.log("Cider donuts cost " + "$" + donuts[2].cost + " each");
    
}   else if (thingy == donuts[3]){
    console.log("Boston Cream donuts cost " + "$" + donuts[3].cost + " each");
    
} 
}
*/

// ALL OF THIS IS BASICALLY REPLACED WITH...

donuts.forEach(function(donut){

  console.log(donut.type+" donuts cost $"+donut.cost+" each");

});
