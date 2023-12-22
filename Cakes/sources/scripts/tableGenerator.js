
let form = document.getElementById('Assortment');
let resultTable = document.getElementById('resultTable');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    let type = form.elements.type.value;
    let weight = form.elements.weight.value;
    let taste = form.elements.taste.value;
    let priceFrom = form.elements.priceFrom.value;
    let priceTo = form.elements.priceTo.value;
    
    let table = generateTable(weight, taste, Number(priceFrom), Number(priceTo));
    
    resultTable.innerHTML = '';
    resultTable.appendChild(table);
});

function generateTable(weight, taste, minPrice, maxPrice) {

    let books = [
        { name: "Орео классический", type: "Торт", taste: "Взбитые сливки", weight: "1.0", price: 1500},
        { name: "Берри", type: "Пирожное", taste: "Черничное пюре и сливочный сыр", weight: "1.2", price: 1800},
        { name: "Сладость", type: "Торт", taste: "Мармеладный бисквит и маскарпоне", weight: "0.8", price: 1500},
        { name: "Рай", type: "Торт", taste: "Карамельный бисквит и сливочный крем", weight: "1.0", price: 2000},
        { name: "Итальянский", type: "Пирожное", taste: "Кофе и маскарпоне", weight: "1.0", price: 2000},
        { name: "Медовик", type: "Торт", taste: "Мед и сметана", weight: "1.0", price: 1200},
        { name: "Наполеон", type: "Торт", taste: "Сливочный крем и ваниль", weight: "1.2", price: 1200},
        { name: "Эклер", type: "Пирожное", taste: "Слоеное тесто и масло", weight: "0.1", price: 250},
        { name: "Кекс", type: "Выпечка", taste: "Лимон", weight: "0.08",  price: 85},
        { name: "Картошка", type: "Пирожное", taste: "Крем в ассортименте", weight: "0.1",  price: 90}
    ];

    let filteredBooks = books.filter(book => {
        return (
            (weight === "" || book.weight === weight) &&
            (taste === "" || book.taste.includes(taste)) &&
            (!minPrice || book.price >= minPrice) &&
            (!maxPrice || book.price <= maxPrice)
        );
    });


    let table = document.createElement('table');
    let headerRow = table.insertRow();
    addCell(headerRow, "Название");
    addCell(headerRow, "Вкус");
    addCell(headerRow, "Вес");
    addCell(headerRow, "Цена");

    filteredBooks.forEach(cake => {
        let row = table.insertRow();
        addCell(row, cake.name);
        addCell(row, cake.taste);
        addCell(row, cake.weight);
        addCell(row, cake.price);
    });

    return table;
}

function addCell(row, text) {
    let cell = row.insertCell();
    let textNode = document.createTextNode(text);
    cell.appendChild(textNode);
}