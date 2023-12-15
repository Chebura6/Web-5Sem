let len = 0;
function buttonClicked(button) {
    button.style.display = 'none';
    let loaders = document.getElementsByClassName("loader");
    console.log(loaders[0]);
    loaders[0].style.display = 'inline-block';
    const countOfPosts = 100;
    let promise = new Promise(async function(resolve, reject) {
        let posts = [];
        for (let i = 1; i < countOfPosts; ++i) {
            let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${i}`);
            if (!response.ok) {
                reject("error");
            }

            let post = await response.json();
            posts.push(post);
        }
        loaders[0].style.display = 'none';
        len = posts.length;
        resolve(posts);
    })


    promise.then(
        result => {
            console.log("success");
            console.log(result);
            for (let i = 0 ; i < len; ++i) {
                const title = document.createElement('p');
                const text = document.createElement('p');
                title.innerHTML = `title: ${result[i].title}`;
                text.innerHTML = `text: ${result[i].body}`;
                document.querySelector('footer').appendChild(title);
                document.querySelector('footer').appendChild(text);
            }
        },
        error => {
            alert("Что-то пошло не так, попробуйте позже");
        });
}

