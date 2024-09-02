function primenumber(n) {
    if (n <= 1) {
        return false; // Numbers less than or equal to 1 are not prime
    }

    // Check divisibility from 2 to the square root of n
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false; // n is divisible by i, so it's not prime
        }
    }

    return true; // If no divisors were found, n is prime
}

console.log(primenumber(1)); // Output: false
console.log(primenumber(5)); // Output: true
console.log(primenumber(2)); // Output: true
console.log(primenumber(4)); // Output: false
