

//1. {1,2,3,4}
//2. "ref"
//3. {[123]: true, [123] : false}

function hasDuplicate (arr) {
	return (new Set (arr)).size !== arr.length

}

function vowelCount (str) {
	const vowels = "aeiou"
	let newArr = []
	if (str.includes(vowels) == true ){
		newArr.push(vowels)
	}
	let newMap = new Map(newArr)
	return newMap
}