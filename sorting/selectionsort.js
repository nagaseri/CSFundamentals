//function run in selectionSort to swap the values after being checked
function swap(items, firstIndex, secondIndex){
	//variable to hold the first index while it's being swapped
	var temp = items[firstIndex];
	//first index becomes second index
	items[firstIndex] = items[secondIndex];
	//second index becomes temporary variable
	items[secondIndex] = temp;
};

function selectionSort(items){

	var len = items.length;
	var min;

	//loop through the array of numbers
	for (var i = 0; i < len; i++) {
		//set the variable minimum to i so that it holds on to the i of the first loop
		min = i;
		//loop through the rest of the array 
		for (var j = i + 1; j < len; j++){
			//if the index being checked is less than the i
			if (items[j] < items[min]){
				//make the new minimum value j 
				min = j;
			}
		}
		//if the checked value is not the minimum
		if (i !== min){
			//make the second index the first 
			swap(items, i, min);
		}
	}
	//return the motherfuckin array
	return items;
}