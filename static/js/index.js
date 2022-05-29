let div = document.querySelector('.problem')
let img = document.querySelector('#pi')

let main = function () {
    div.addEventListener('click', function (event) {
        console.log("Hello problem");
        console.log(event.type);
        div.innerHTML = 'Welcome to my website';
        console.log(document.getElementById('pi').src);
        document.getElementById('pi').src = "static/images/questions/q4.png";

    });
}

function print() {
    console.log("Hello print");
}

export {
    main,
    print
}