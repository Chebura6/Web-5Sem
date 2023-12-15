
let currentPage = document.location.pathname.split("/").pop();
console.log(currentPage);
let menuItems = document.querySelectorAll('a')
console.log(menuItems);
menuItems.forEach(function(item) {

    let href = item.getAttribute('href')
    if (href === currentPage) {
        item.classList.add('active');
    }
});
