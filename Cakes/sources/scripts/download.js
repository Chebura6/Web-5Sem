let len = 0;

const url = `https://jsonplaceholder.typicode.com/posts`;

let urls =[]
for (let i = 1; i < 10; ++i) {
    urls.push(url + `/` + i);
}

function buttonClicked(button) {
    button.style.display = 'none';
    let loaders = document.getElementsByClassName("loader");
    loaders[0].style.display = 'inline-block';

    Promise.all(urls.map(url =>
        fetch(url).then(resp => resp.json())
            .catch(() => {
                alert("Что-то пошло не так, попробуйте позже");
            })
    )).then(
        result => {
            console.log("success");
            loaders[0].style.display = 'none';
            console.log(result);
            for (let i = 0; i < result.length; ++i) {
                const title = document.createElement('p');
                const text = document.createElement('p');
                title.innerHTML = `title: ${result[i].title}`;
                text.innerHTML = `text: ${result[i].body}`;
                document.querySelector('footer').appendChild(title);
                document.querySelector('footer').appendChild(text);
            }
        }
    );
}

// lazy loading

