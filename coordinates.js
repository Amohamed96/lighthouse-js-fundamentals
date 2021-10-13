const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  
let x = 0;
let y = 0;
const finalPosition = function(moves){
  for (let position of moves){
    if (position === 'north'){
      y= y+1;
    }   
    if (position === 'south'){
      y = y-1;
    } if (position === 'east'){
      x= x+1;
    } if (position === 'west'){
      x= x-1;
    } 

  }
  console.log([x,y])

return  [x,y];
}
finalPosition(moves);