let div = document.querySelector('.problem')
let img = document.querySelector('#pi')

let main = function () {
    let n = 4;
    div.addEventListener('click', function (event) {
        console.log("Hello problem");
        console.log(event.type);
        div.innerHTML = 'Welcome to my website';
        console.log(document.getElementById('pi').src);

        document.getElementById('pi').src = "static/images/questions/q" + n + ".png";
        n += 1;
    });
}

function print() {
    console.log("Hello print");
}

export {
    main,
    print
}