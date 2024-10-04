let libraryBooks = [
    { title: "The Road Ahead", author: "Bill Gates", ID: 1235 },
    { title: "Walter Isaacson", author: "Steve Jobs", ID: 4268 },
    { title: "The Road Ahead", author: "Bill Gates", ID: 4268 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", ID: 3257 }
];

export default libraryBooks;

export function get_items() {
    return libraryBooks;
}
export function add_item(new_item) {
    let itemExists = libraryBooks.find(x => x.ID === new_item.ID);
    if (itemExists) return false;
    libraryBooks.push(new_item);
    return true;

}
export function update_item_title_by_id(id, new_title) {
    let itemExists = libraryBooks.find(x => x.ID ===id);
    if (!itemExists) return false;
    itemExists.title = new_title;
    return true;
     
}
export function delete_item_by_id(id) {
    const index = libraryBooks.findIndex(item => item.ID === id);
    if (index===-1) return false;

    libraryBooks.splice(index, 1);
    return true;
}
export function get_item_title_by_id(id) {
    let itemExists = libraryBooks.find(x => x.ID === id);
    if (!itemExists) return false;
    return itemExists.title;
}
