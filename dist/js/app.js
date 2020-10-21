const time = new Date().getHours(),
    box = document.querySelector('.box'),
    eye = document.querySelectorAll('.eye'),
    timeElement = document.querySelector('.time'),
    nameElement = document.querySelector('.name'),
    first = document.querySelector('.first'),
    second = document.querySelector('.second'),
    third = document.querySelector('.third'),
    fourth = document.querySelector('.fourth'),
    fifth = document.querySelector('.fifth'),
    button = document.querySelectorAll('.button'),
    yearElement = document.querySelector('[name="year"]'),
    errYear = document.querySelector('.err.year'),
    thirdHeader = document.querySelector('.third .ml11 .letters'),
    fourthHeader = document.querySelector('.fourth .ml11 .letters');

let counter = 0;

const answers = [
    'Hmm gitu yah ?',
    'Okedeh',
    'Iyasih aku suka gitu 🤣',
    'Gatau lagi deh udah bawaan 🤣'
]

const yearAnswers = [
    "Kamu lupa pasti ! 🙄",
    "Gimana sih katanya sayang ? Masa ga inget ! 😭",
    "Salah, yang bener 2013 sayang 😒"
]

function convertTime(timeNow) {
    if (timeNow >= 1 && timeNow < 6) {
        return "selamat petang";
    } else if (timeNow >= 6 && timeNow < 12) {
        return "selamat pagi";
    } else if (timeNow >= 12 && timeNow < 15) {
        return "selamat siang";
    } else if (timeNow >= 15 && timeNow < 18) {
        return "selamat sore";
    } else if (timeNow >= 18 && timeNow <= 23) {
        return "selamat malam";
    }
}

function randomThat(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function setInputFilter(textbox, inputFilter) {
    ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function (event) {
        textbox.addEventListener(event, function () {
            if (inputFilter(this.value)) {
                this.oldValue = this.value;
                this.oldSelectionStart = this.selectionStart;
                this.oldSelectionEnd = this.selectionEnd;
            } else if (this.hasOwnProperty("oldValue")) {
                this.value = this.oldValue;
                this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
            } else {
                this.value = "";
            }
        });
    });
}

setTimeout(() => {
    first.classList.add('active');
}, 500);

timeElement.innerHTML = convertTime(time);

timeElement.innerHTML = timeElement.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
nameElement.innerHTML = nameElement.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
thirdHeader.innerHTML = thirdHeader.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");
fourthHeader.innerHTML = fourthHeader.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({
        loop: false
    })
    .add({
        targets: '.time .letter',
        opacity: [0, 1],
        easing: "easeInOutQuad",
        duration: 1000,
        delay: (el, i) => 75 * (i + 1)
    })

anime.timeline({
        loop: false
    })
    .add({
        targets: '.name .letter',
        translateY: ["1.3em", 0],
        translateZ: 0,
        duration: 750,
        delay: (el, i) => 2250 + (30 * i)
    })


anime.timeline({
        loop: false
    })
    .add({
        targets: '.box svg',
        translateY: [250, 100],
        easing: "easeInOutQuad",
        delay: 3000
    })

anime.timeline({
        loop: false
    })
    .add({
        targets: '.box svg .eye',
        translateX: [0, 20, 20, 0],
        easing: "easeInOutQuad",
        delay: 3300
    })

anime.timeline({
        loop: false
    })
    .add({
        targets: '.box .line',
        width: [0, '100%'],
        easing: "easeInOutQuad",
        delay: 4000
    })

anime.timeline({
        loop: false
    })
    .add({
        targets: 'footer',
        bottom: ['-50', 0],
        opacity: [0, 1],
        easing: "easeInOutQuad",
        delay: 4500
    })

anime.timeline({
        loop: false
    })
    .add({
        targets: '.first .button',
        opacity: [0, 1],
        easing: "easeInOutQuad",
        delay: 4800
    })
setInputFilter(yearElement, function (value) {
    return /^\d*\.?\d*$/.test(value);
});

button[0].addEventListener('click', function () {
    anime.timeline({
            loop: false
        })
        .add({
            targets: '.first',
            opacity: [1, 0],
            easing: "easeInOutQuad",
            duration: 500
        })
    anime.timeline({
            loop: false
        })
        .add({
            targets: '.second',
            opacity: [0, 1],
            easing: "easeInOutQuad",
            duration: 500,
            delay: 500
        })
    anime.timeline({
            loop: false
        })
        .add({
            targets: 'body',
            backgroundColor: '#ddd',
            easing: "easeInOutQuad",
            duration: 500,
            delay: 500
        })

    setTimeout(() => {
        first.classList.remove('active');
        second.classList.add('active');
    }, 500);
})

button[1].addEventListener('click', function () {
    if (yearElement.value !== 'null' && yearElement.value == 2013) {
        this.style.display = 'none';
        button[2].classList.remove('d-none');
        return errYear.innerHTML = "Ciyeeee masih ingetttt &#129325"
    } else {
        return errYear.innerHTML = randomThat(yearAnswers);
    }
})

button[2].addEventListener('click', function () {
    const footer = document.querySelector('footer')
    footer.style.color = "#222"
    anime.timeline({
            loop: false
        })
        .add({
            targets: '.second',
            opacity: [1, 0],
            easing: "easeInOutQuad",
            duration: 500
        })
    anime.timeline({
            loop: false
        })
        .add({
            targets: 'body',
            background: 'linear-gradient(to right, #74ebd5, #acb6e5)',
            backgroundColor: '#acb6e5',
            easing: "easeInOutQuad",
            duration: 500,
            delay: 500
        })
    anime.timeline({
            loop: false
        })
        .add({
            targets: '.third',
            opacity: [0, 1],
            easing: "easeInOutQuad",
            duration: 500,
            delay: 500
        })


    anime.timeline({
        loop: false
    }).add({
        targets: '.third .ml11 .letter',
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=775',
        delay: (el, i) => 1600 + (34 * (i + 1))
    })

    anime.timeline({
        loop: false
    }).add({
        targets: '.third p',
        translateY: ['-40px', 0],
        opacity: [0, 1],
        easing: "easeOutExpo",
        delay: 2100
    })

    anime.timeline({
        loop: false
    }).add({
        targets: '.third .button',
        translateY: ['40px', 0],
        opacity: [0, 1],
        easing: "easeOutExpo",
        delay: 2100
    })

    setTimeout(() => {
        second.classList.remove('active');
        third.classList.add('active');
    }, 500);
})


button[3].addEventListener('click', function () {
    const footer = document.querySelector('footer')
    footer.style.color = "#222"
    anime.timeline({
            loop: false
        })
        .add({
            targets: '.third',
            opacity: [1, 0],
            easing: "easeInOutQuad",
            duration: 500
        })

    anime.timeline({
            loop: false
        })
        .add({
            targets: '.fourth',
            opacity: [0, 1],
            easing: "easeInOutQuad",
            duration: 500,
            delay: 500
        })


    anime.timeline({
        loop: false
    }).add({
        targets: '.fourth .ml11 .letter',
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=775',
        delay: (el, i) => 1600 + (34 * (i + 1))
    })

    anime.timeline({
        loop: false
    }).add({
        targets: '.fourth p',
        translateY: ['-40px', 0],
        opacity: [0, 1],
        easing: "easeOutExpo",
        delay: 2100
    })

    anime.timeline({
        loop: false
    }).add({
        targets: '.fourth .button',
        translateY: ['40px', 0],
        opacity: [0, 1],
        easing: "easeOutExpo",
        delay: 2100
    })

    setTimeout(() => {
        third.classList.remove('active');
        fourth.classList.add('active');
    }, 500);
})


button[4].addEventListener('click', function () {
    const footer = document.querySelector('footer')
    footer.style.color = "#eee"
    anime.timeline({
            loop: false
        })
        .add({
            targets: '.third',
            opacity: [1, 0],
            easing: "easeInOutQuad",
            duration: 500
        })

    anime.timeline({
            loop: false
        })
        .add({
            targets: '.fourth',
            opacity: [0, 1],
            easing: "easeInOutQuad",
            duration: 500,
            delay: 500
        })


    anime.timeline({
        loop: false
    }).add({
        targets: '.fourth .ml11 .letter',
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=775',
        delay: (el, i) => 1600 + (34 * (i + 1))
    })

    anime.timeline({
        loop: false
    }).add({
        targets: '.fourth p',
        translateY: ['-40px', 0],
        opacity: [0, 1],
        easing: "easeOutExpo",
        delay: 2100
    })

    anime.timeline({
        loop: false
    }).add({
        targets: '.fourth .button',
        translateY: ['40px', 0],
        opacity: [0, 1],
        easing: "easeOutExpo",
        delay: 2100
    })

    setTimeout(() => {
        third.classList.remove('active');
        fourth.classList.add('active');
    }, 500);
})