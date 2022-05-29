let div = document.querySelector('.problem')
let img = document.querySelector('#pi')

let main = function () {
    let n = 4;
    div.addEventListener('click', function (event) {
        div.innerHTML = 'Welcome to my website';
        console.log(document.getElementById('pi').src);
        if (n > 20) {
            div.innerHTML = "Thre are no more questions!";
        } else {
            document.getElementById('pi').src = "static/images/questions/q" + n + ".png";
            n += 1;
        }
    });
}

function print() {
    console.log("Hello print");
}

export {
    main,
    print
}