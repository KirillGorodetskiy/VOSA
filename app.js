const can_1 = document.getElementById('canvas_1');
const can_2 = document.getElementById('canvas_2');


function randomArr (size, min, max) {
	let arr = [];
	for(let i = 0; i < size; i++) {
		arr.push(Math.floor(Math.random()*(max - min)) + min);
	}
	return arr;
}

const arr1 = randomArr(150, 1, 300);
const arr2 = randomArr(100, 1, 150);
let compare = (n1, n2) => n1 - n2;

function drawArr (can, arr, lineColor = "black", step = 4, pos = 5) { 
	const ctx = can.getContext("2d"); // create object for drawing
	const height = can.height;
	const width = can.width;
	
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


function bubbleSortAnimation (arr, cmp = compare) {
  let i = 0;
  let j = 0;

  (function delayedLoop() {	
	drawArr(can_1, arr);    
	window.setTimeout(function () {
			if (i < arr.length) {		
			if (j > 0) {
				if (cmp(arr[j], arr[j - 1]) < 0) {
					[arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];		       	
				}
				j--;						
				delayedLoop();
			} else {
				i++;
				j = i;				
				delayedLoop();
			}
		} else {
			console.log("Bubble sorting finished");
			return arr;	
		}					
	}, 1);
   }	
)(); 
};


	
function insertionSort(arr) { 
	let i = 1;
	let j = 1; 
	let toCmp = arr[1];	
	(function delayedLoop() {
		drawArr(can_2, arr);
		window.setTimeout(function() {
			if (i < arr.length) {				
				if (j > 0 && toCmp < arr[j - 1]) {
					arr[j] = arr[j - 1];   				
					j--;						
					delayedLoop();
				} else {					
					arr[j] = toCmp;	
					i++;
					toCmp = arr[i];
					j = i;									
					delayedLoop();
				}			
			} else {
				console.log("Insertion ssorting finished");
			}	
		}, 1);
})();
}	

//bubbleSortAnimation(arr1);	
//insertionSort(arr1);

//							//
//							//
/* Merge sorting in progress*/
//							//
//
							//
/*
function mergeSortAnimation(arr) {
	
		if (arr.length < 2)
			return arr;
	 
		var middle = parseInt(arr.length / 2);
		var left   = arr.slice(0, middle);
		var right  = arr.slice(middle, arr.length);
	 
		return merge(mergeSortAnimation(left), mergeSortAnimation(right));	
	
	function merge(left, right){
	setTimeout(function(){
		
		var result = [];
	 
		while (left.length && right.length) {
			if (left[0] <= right[0]) {
				result.push(left.shift());
			} else {
				result.push(right.shift());
			}
		}
	 
		while (left.length)
			result.push(left.shift());
	 
		while (right.length)
			result.push(right.shift());	
	 
		drawArr(can_1, result);
		return result;
	}, 100);
	}
}
*/

function quickSortAnimation(arr) {
	setTimeout(function() {
		if (arr.length < 2) {
			return arr;
		}
		
		let left = [];
		let  right = [];
		
		const pivot = arr[0];
		arr.slice(1).forEach(cur => {
			if(cur <= pivot) {
				left.push(cur);
			} else {
				right.push(cur);
			}
		})
		return quickSortAnimation(left).concat(pivot).concat(quickSortAnimation(right));
		
	}, 10);
}


console.log(quickSortAnimation(arr1));



