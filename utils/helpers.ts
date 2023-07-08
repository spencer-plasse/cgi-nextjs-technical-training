/**
 * Capitalizes either the first word or all words in a given string.
 * 
 * @param str String to capitalize
 * @param mode `"start"` or `"all"`, representing whether to capitalize only the first word
 * 						or every word
 * 
 * @returns Capitalized string
 */
export const capitalize = (str: string, mode: "start" | "all") => {
	let result: string = "";

	if (mode === "all"){
		const words: string[] = str.split(' ');
		const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
		result = capitalizedWords.join(' ');
	}
	
	else {
		result = str.charAt(0).toUpperCase() + str.slice(1);
	}

	return result;
}