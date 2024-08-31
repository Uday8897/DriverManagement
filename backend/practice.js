
function generateUserId() {
    return `U${Math.floor(Math.random() * 10000)}`;
}

function generateDriverId() {
    return `D${Math.floor(Math.random() * 10000)}`;
}

// Example usage
const userId = generateUserId();
const driverId = generateDriverId();

console.log(`Generated User ID: ${userId}`);
console.log(`Generated Driver ID: ${driverId}`);
