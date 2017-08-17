var result = binarySearch([
	1, 
	2,
	3,
	4,
	5,
	6,
	7,
	8,
	9,
	10,
	11,
	12,
	13,
	14,
	15,
	16
], 13);

console.log(result);

function binarySearch(stuff, searchElement){
	var currentElement;
	var currentIndex;
	var maxIndex = stuff.length - 1;
	var minIndex = 0;
	
	//in the array
	while (minIndex <= maxIndex){

		//set currentIndex to be exactly half of the array
		currentIndex = Math.Floor((minIndex + maxIndex) / 2);

		//set currentElement to be the halfway point of the specified array
		currentElement = stuff[currentIndex];
		console.log('Start Index: ', minIndex);
		console.log('End Index: ', maxIndex);
		console.log('Current Element: ', stuff[currentIndex]);

		//if the halfway point is less than the element being searched, look at the second half of the array
		if(currentElement < searchElement){
			//set the first index of new array to one above the halfway point  
			minIndex = currentIndex + 1;
		 
		}
		//if the halfway point is more than the element being searched, look at the first half of the array 
		else if(currentElement > searchElement){	
			//set last item in the array to be one less than the halfway point 
			maxIndex = currentIndex - 1;

		}
		//Once the whole array is searched through, console.log and return the current index
		else {
			console.log('Current Index: ', currentIndex);
			console.log('Current Element: ', stuff[currentIndex]);
			console.log("---------");
			return currentIndex;
		}
		//you fucked up
		return false;
	}
};

