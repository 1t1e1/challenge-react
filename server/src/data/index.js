// let kitaplik = {
//     0: {
//         id: 0,
//         kitapAdi: "Gulun adi",
//         yazarinAdi: "umberto eco",
//         yayinEvi: "Can Yayinlari",
//     },
//     1: {
//         id: 1,
//         kitapAdi: "Gulun adi1",
//         yazarinAdi: "umberto eco1",
//         yayinEvi: "Can Yayinlari",
//     },
//     2: {
//         id: 2,
//         kitapAdi: "Gulun adi2",
//         yazarinAdi: "umberto eco2",
//         yayinEvi: "Can Yayinlari",
//     },
//     3: {
//         id: 3,
//         kitapAdi: "Gulun adi3",
//         yazarinAdi: "umberto eco3",
//         yayinEvi: "Can Yayinlari",
//     },
//     4: {
//         id: 4,
//         kitapAdi: "Gulun adi4",
//         yazarinAdi: "umberto eco4",
//         yayinEvi: "Can Yayinlari",
//     },
// };

// export default kitaplik;
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

let db = low(new FileSync("./src/data/database.json"));
db.defaults({ books: [] }).value();
let results = db.get("books", []);

// id sine gore
// yazarina   gore
// db da arama yap

// insert or look up
function saveBook(id, title, author, publisher) {
    let bookObject = { id, title, author, publisher };
    let result = results.find(bookObject);
    if (result.value()) {
        console.log("i think there is that book");
        return;
    }
    results.push(bookObject).value();
}

function writeMetrics() {
    results.write();
}

function readData() {
    return results;
}

module.exports = {
    saveBook,
    writeMetrics,
    readData,
};
