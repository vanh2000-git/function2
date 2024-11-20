// BAI1
function squareNumber(number) {
    return number * number;
}

// Gọi hàm
let number = 5;
console.log("Bình phương của", number, "là:", squareNumber(number));

// BAI2
function circleArea(radius) {
    return Math.PI * radius * radius;
}

function circlePerimeter(radius) {
    return 2 * Math.PI * radius;
}

// Gọi hàm
let radius = 7;
console.log("Diện tích hình tròn là:", circleArea(radius));
console.log("Chu vi hình tròn là:", circlePerimeter(radius));

// BAI3
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Gọi hàm
let num = 5;
console.log("Giai thừa của", num, "là:", factorial(num));

// BAI4
function isNumber(char) {
    return !isNaN(char) && !isNaN(parseFloat(char));
}

// Gọi hàm
let character = "5";
console.log("Ký tự", character, "có phải là số không:", isNumber(character));

// BAI5
function findMin(a, b, c) {
    return Math.min(a, b, c);
}

// Gọi hàm
let num1 = 3, num2 = 7, num3 = 5;
console.log("Số nhỏ nhất trong", num1, num2, num3, "là:", findMin(num1, num2, num3));

// BAI6
function isPositiveInteger(number) {
    return Number.isInteger(number) && number > 0;
}

// Gọi hàm
let number = 8;
console.log("Số", number, "có phải là nguyên dương không:", isPositiveInteger(number));

// BAI7
function swapNumbers(a, b) {
    let temp = a;
    a = b;
    b = temp;
    return [a, b];
}

// Gọi hàm
let num1 = 3, num2 = 5;
let swapped = swapNumbers(num1, num2);
console.log("Sau khi đổi chỗ:", swapped[0], swapped[1]);

// BAI8
function reverseArray(arr) {
    return arr.reverse();
}

// Gọi hàm
let numbers = [1, 2, 3, 4, 5];
console.log("Mảng sau khi đảo ngược:", reverseArray(numbers));

// BAI9
function countCharacterInArray(arr, char) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === char) {
            count++;
        }
    }
    return count > 0 ? count : -1;
}

// Gọi hàm
let characters = ['a', 'b', 'c', 'a', 'd', 'a'];
let charToFind = 'a';
console.log("Số lần xuất hiện của ký tự", charToFind, "là:", countCharacterInArray(characters, charToFind));
