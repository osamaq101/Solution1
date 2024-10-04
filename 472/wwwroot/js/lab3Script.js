import libraryBooks, { get_items, add_item, update_item_title_by_id, delete_item_by_id, get_item_title_by_id } from './data.js';
"use strict";

//////////////////////////////Question 1 - A////////////////////////

//Regular Function

//function computeSumOfSquares(arr)
//{

//    let sum=arr.map(x => x * x).reduce((acc, curr) => acc + curr, 0);
   
//    return sum;
//}

//Function Expression 
//const computeSumOfSquares = function (arr) {
//    return arr.map(x * x).reduce((y, z) => x + z, 0);
//}

//Arrow Function 
const computeSumOfSquares = (arr) => arr.map(x => x * x).reduce((x, y) => x + y, 0);

// Q-1 b
const printOddNumbersOnly = (arr) => arr.filter(x => x % 2 !== 0).map(x => x);

//Q-1 c

const printFibo = (n, a, b) => {
    if (n <= 0) return console.log(""); 
   
    const generateFibo = (length, sequence) =>
        length === sequence.length ? sequence : generateFibo(length, [...sequence, sequence.at(-1) + sequence.at(-2)]);

    
    const result = generateFibo(n, [a, b].slice(0, n));
    console.log(result.join(", "));
};

//Q-2 
let user = { name: "John", years: 30 };
const { name, years: age, isAdmin = false } = user;

//Q3
let libraryBooks = [
    { title: "The Road Ahead", author: "Bill Gates", ID: 1235 },
    { title: "Walter Isaacson", author: "Steve Jobs", ID: 4268 },
    { title: "The Road Ahead", author: "Bill Gates", ID: 4268 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", ID: 3257 }
];

function addBook(title, author, ID)
{

    const bookExist = libraryBooks.find(book => book.ID === ID);

    if (bookExist)
    {
        return null;

    }

    const newBook = { title, author, ID };


    libraryBooks.push(newBook);

    returnnewBook;
}

const newBook = addBook("Murder Is Easy", "Agatha Christie", 234234);

//get the titles sorted
const titles = libraryBooks.map(t => t.title).sort();

//find book by title
function findBooks(keyword) {
    return libraryBooks
        .filter(book => book.title.toLowerCase().includes(keyword.toLowerCase()))
        .sort((a, b) => a.ID - b.ID);
}

console.log("Initial library books:", get_items());

// Test add_item
console.log("\nAdding new book with ID 7890:");
const newBookAdded = add_item({ title: "1984", author: "George Orwell", ID: 7890 });
console.log("Book added successfully:", newBookAdded);
console.log("Updated library books:", get_items());

// Test add_item with duplicate ID
console.log("\nAdding book with duplicate ID 7890:");
const duplicateBookAdded = add_item({ title: "Duplicate Book", author: "Author Name", ID: 7890 });
console.log("Book added successfully:", duplicateBookAdded);
console.log("Updated library books:", get_items());

// Test update_item_title_by_id
console.log("\nUpdating title of book with ID 7890:");
const titleUpdated = update_item_title_by_id(7890, "Nineteen Eighty-Four");
console.log("Title updated successfully:", titleUpdated);
console.log("Updated library books:", get_items());

// Test update_item_title_by_id with non-existent ID
console.log("\nUpdating title of book with non-existent ID 9999:");
const nonExistentUpdate = update_item_title_by_id(9999, "Non-Existent Book");
console.log("Title updated successfully:", nonExistentUpdate);
console.log("Updated library books:", get_items());

// Test delete_item_by_id
console.log("\nDeleting book with ID 7890:");
const bookDeleted = delete_item_by_id(7890);
console.log("Book deleted successfully:", bookDeleted);
console.log("Updated library books:", get_items());

// Test delete_item_by_id with non-existent ID
console.log("\nDeleting book with non-existent ID 9999:");
const nonExistentDelete = delete_item_by_id(9999);
console.log("Book deleted successfully:", nonExistentDelete);
console.log("Updated library books:", get_items());

// Test get_item_title_by_id
console.log("\nGetting title of book with ID 1235:");
const bookTitle = get_item_title_by_id(1235);
console.log("Book title:", bookTitle);

// Test get_item_title_by_id with non-existent ID
console.log("\nGetting title of book with non-existent ID 9999:");
const nonExistentTitle = get_item_title_by_id(9999);
console.log("Book title:", nonExistentTitle);