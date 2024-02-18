function findMax(numbers) {
  if (numbers.length === 0) {
    return undefined; // If the array is empty, return undefined
  }

  let max = numbers[0]; // Assume the first element is the maximum

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i]; // If we find a number greater than current max, update max
    }
  }

  return max; // Return the maximum value found
}

module.exports = findMax;
