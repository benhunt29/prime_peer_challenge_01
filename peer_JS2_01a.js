
/*
1. Start with the number 42 and set that equal to 'value'

2. Create condition logic to check if the value is great or equal to 53
2-1. If true, add 42 to 'value'
2-2. If false, subtract 13 from 'value'

3. Create a string that is set to 11, add it to 'value'

4. Create an array, loop through 'value' using charAt, set array[i] to each value

5. Remove the first and last values off the array

6. Create a new variable. Loop backwards through the array and store each value into the new Variable, combining each of the values of that array (backwards remember!)

7. parseInt both the 'value' and the new variable created in Step 6, ensure that both 'value' and the new variable are set to these new parsed values;

******* SWITCH PROGRAMMERS *******

8. Add 'value' and the new variable created in Step 6 together and store them in 'value'

9. If the new value of 'value' is less than 60, set 'value' equal to 14. If not, check to see if it is equal to 2930, if it is, set 'value' equal to 27. 
If neither of these are true, set the value to 2.

10. Create a while loop that counts down from 10 and increments 'value' by 1.

11. Create a function that accepts an argument 'val'. The function should convert 'val' to a String, then drop the first character off the String, but only if there 
is more than 1 character in the String. Return 'val' and set the 'value' to the returned value.

12. Call the function.

13. Console log value. Create an index.html file, link the this Javascript file. Load in the browser, check the value.

14. Your answer should be a String value that equals 7. Is that what you got?
*/

'use strict';
//step 1
var value = 42;
//step 2
if(value >= 53) {
	value += 42;
} else {
	value -= 13;
};
//step 3
var string = "11";
value += string;
//step 4
var array = [];
for(var i= 0; i < value.length; i++) {
	array[i] = value.charAt(i);
};
//step 5
array.shift();
array.pop();
//step 6
var arraySum = 0;
for(var i = array.length - 1; i >= 0; i--){
	arraySum += array[i];
}
//step 7
value = parseInt(value);
arraySum = parseInt(arraySum);

//step 8
value += arraySum;

//step 9
if (value < 60){
	value = 14;
} else if(value ==2930){
	value = 27;
}else{
	value = 2;
};

//step 10
var counter = 10;
while(counter > 0){
	value++;
	counter--;
};

//step 11
function augmentA(val){
	val = val.toString();

	if(val.length > 1){
		
		
		/*
		ALTERNATE, EXTREMELY UNNECESSARY METHOD
		var val_array = val.split('');
		
		val_array.shift();
		var val = '';

		for(i = 0; i < val_array.length; i++){
			val += val_array[i];
		}*/
		val = val.substring(1,val.length);

		value = val;
		return val;
	}
	
}

//step 12
augmentA(value);

//step13
console.log(value);

