
// Prompt the visitor for their list of comma-separated froyo flavors
const flavorsInput = prompt("Please enter some froyo flavors.",
"vanilla,vanilla,vanilla,strawberry,coffee,coffee");
const flavorsArray = flavorsInput.split(",");

// Create an object to store the count of each flavor
const flavorCount = {};

// Count the occurrences of each flavor using forEach
flavorsArray.forEach(flavor => {
    // Trim the whitespace around the flavor
    const trimmedFlavor = flavor.trim();
    
    // Check if the flavor already exists in the count object
    if (flavorCount[trimmedFlavor]) {
        // If it does, increment the count
        flavorCount[trimmedFlavor]++;
    } else {
        // If it doesn't, initialize the count to 1
        flavorCount[trimmedFlavor] = 1;
    }
});

// Log the counts to the console
console.table(flavorCount);