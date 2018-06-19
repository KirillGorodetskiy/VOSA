const can = document.getElementById('canvas_1');
const ctx = can.getContext("2d");
const height = can.height;
const width = can.width;

function randomArr (size, min, max) {
	let arr = [];
	for(let i = 0; i < size; i++) {
		arr.push(Math.floor(Math.random()*(max - min)) + min);
	}
	return arr;
}

const arr1 = randomArr(150, 1, 300);
const arr2 = randomArr(100, 1, 150);

function drawArr (arr, lineColor = "black", step = 4, pos = 5) { 
	ctx.clearRect(0,0, width, height); // clear canvas
	// move to the start point
	ctx.beginPath();
	ctx.moveTo(pos,height);	
	// draw each element of the array
	arr.forEach((cur) => {	
		ctx.lineTo(pos, height - cur);	
		pos+=step; //shift position to the right
		ctx.moveTo(pos,height)
	});	
	ctx.strokeStyle = lineColor;	
	ctx.stroke(); // draw lines	
}

drawArr(arr1, "red");

let compare = (n1, n2) => n1 - n2;

let m = 0;
let bubbleSort = (arr, cmp = compare) => {
  let i = 0;
  let j = 0;

  (function delayedLoopI() {
	//console.log(m++);
	drawArr(arr);
    //console.log(i);
	window.setTimeout(function () {
			if (i < arr.length) {		
			if (j > 0) {
				if (cmp(arr[j], arr[j - 1]) < 0) {
					[arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];		       	
				}
				j--;						
				delayedLoopI();
			} else {
				i++;
				j = i;				
				delayedLoopI();
			}
		} else {			
			return arr;	
		}					
  }, 10);
	}	
)() 

  
 /* for (let i = 0; i < arr1.length; i++) {
    for (let j = i; j > 0; j--) {	   
		 if (cmp(arr[j], arr[j - 1]) < 0) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];		       	
      }	
    }
  }
  return arr;*/
};

console.log(bubbleSort(arr1));
	




