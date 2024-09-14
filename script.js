function firstNonRepeatedChar(str) {
    // Create a frequency map to count occurrences of each character
    const frequencyMap = new Map();
    
    // Populate the frequency map
    for (let char of str) {
        if (frequencyMap.has(char)) {
            frequencyMap.set(char, frequencyMap.get(char) + 1);
        } else {
            frequencyMap.set(char, 1);
        }
    }
    
    // Find the first character with a count of 1
    for (let char of str) {
        if (frequencyMap.get(char) === 1) {
            return char;
        }
    }
    
    // If no non-repeated character is found, return null
    return null;
}

const input = prompt("Enter a string");
const result = firstNonRepeatedChar(input);
if (result !== null) {
    alert(result);
} else {
    alert("No non-repeated character found"); // Change this to align with your test if necessary
}
