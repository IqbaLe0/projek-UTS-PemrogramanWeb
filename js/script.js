// Hamburger Menu

const menu = document.querySelector('#menu');
const navbarNav = document.querySelector('.navbar-nav');


menu.onclick= function() {
    navbarNav.classList.toggle('active');
};

document.addEventListener('click', function(e){
    if(!menu.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active')
    }
});

// Hamburger Menu End


// Home Start
// Sinopsis Daftar Film Start

const film = document.getElementsByClassName('film');

for (let i = 0; i < film.length; i++) {
    film[i].addEventListener('click', function() {
        const sinopsis = film[i].querySelector('.sinopsis');
        if (sinopsis.style.display == 'none') {
            sinopsis.style.display = 'block';
        } else {
            sinopsis.style.display = 'none';
        }
    });
    
}

// Sinopsis Daftar Film End
// Home End


// Profil Start


// Profil End


// Layout Start

// Button Start

const left1 = document.getElementsByClassName('left1');
const right1 = document.getElementsByClassName('right1');
const center1 = document.getElementsByClassName('center1');
const btn = document.querySelectorAll('.btn');


// fungsi membuat warna random
function randomColor(index){
            const r = Math.round(Math.random()*255);
            const g = Math.round(Math.random()*255);
            const b = Math.round(Math.random()*255);

            for (let i = 0; i < index.length; i++) {
                index[i].style.backgroundColor= 'rgb(' + r + ',' + g + ',' + b +')';
            }
}

btn.forEach(function(idx) {
    idx.addEventListener('click',function(){
        if(idx.textContent == 'Ubah Warna Left'){
            randomColor(left1);
        }
        else if(idx.textContent == "Ubah Warna Center"){
            randomColor(center1);
        }
        else{
            randomColor(right1);
        }
    })
});

// Button End

// Layout End


// DOM Start

// Kamus Manual Start
const color= {
    "merah": "red",
    "biru": "blue",
    "kuning": "yellow",
    "ungu": "purple",
    "merah muda": "pink",
    "hijau": "green",
    "jingga": "orange",
    "coklat": "brown",
    "abu-abu": "gray",
    "hitam": "black",
    "putih": "white",
    "emas": "gold",
    "perak": "silver",
    "biru muda" : "lightblue",
    "magenta": "magenta",

};

function translate(indo) {
    return color[indo.toLowerCase()] ;
};

// Kamus Manual End



const actionList = document.querySelectorAll("#actionList li");
const colorInput = document.getElementById("colorInput");

// Fungsi untuk mengubah latar belakang
function changeListBackgroundColor() {
    const colorValue = colorInput.value.toLowerCase();
    const colorList = document.querySelectorAll("#colorList li");

    colorList.forEach(function(item) {
        if (item.textContent.toLowerCase() === colorValue) {
            if(translate(colorValue)){
            item.style.backgroundColor = translate(colorValue);
            }

        else{
            item.style.backgroundColor = colorValue;
        }
        }
    } );
}

// Fungsi untuk menambahkan warna baru 
function addColorToList() {
    const colorValue = colorInput.value;
    const newColorItem = document.createElement("li");
    newColorItem.textContent = colorValue;
    document.getElementById("colorList").appendChild(newColorItem); // Tambahkan elemen ke dalam ul
    const colorList = document.querySelectorAll("#colorList li");
}

// Fungsi untuk menambahkan footer 
function addFooter() {
    const footer = document.createElement("footer");
    footer.textContent = "⭐⭐⭐⭐⭐";
    document.body.appendChild(footer);
}


actionList.forEach(function (indx) {
    indx.addEventListener('click', function(){
        if(indx.textContent == 'set list backColor'){
            changeListBackgroundColor()
        }
        else if(indx.textContent == 'add new color to list'){
            addColorToList()
        }else{
            addFooter()
        }
    });
});

// DOM End

