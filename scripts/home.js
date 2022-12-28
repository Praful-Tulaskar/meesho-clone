const cat = document.getElementById('mobile-view-cat');
const resCat = document.getElementById('res-cat');
const resBarCat = document.getElementById('res-bar-cat');
const resUsr = document.getElementById('res-user');
const accountProfile = document.getElementById('account-profile-block')


// ===================================== Profile clickable or add event listner ========================

window.addEventListener('click', (e) => {
    if (!e.target.parentNode.matches('.res-use')) {

        if (accountProfile.classList.contains('account-profile-block')) {
            accountProfile.classList.remove('account-profile-block');

        }
    }
});
resUsr.addEventListener('click', (e) => {
    accountProfile.classList.toggle('account-profile-block');
});


// ===================================== Catagory clickable or add event listner ========================

const genderSvg = document.getElementById('gender-svg')
const genderDrp = document.getElementById('gender-drp')

genderSvg.addEventListener('click', () => {
    genderDrp.forEach(element => {
        element.classList.toggle('gender-show');
    });

})
resCat.addEventListener('click', () => {
    cat.classList.toggle('mobile-view-cat1');
});

// ===================================== menu-bar clickable or add event listner ========================

resBarCat.addEventListener('click', () => {
    cat.classList.toggle('mobile-view-cat1');
});


window.addEventListener('click', (e) => {
    if (!e.target.matches('.res-grid') && (!e.target.matches('.res-bar-cat'))) {
        if (cat.classList.contains('mobile-view-cat1')) {
            cat.classList.remove('mobile-view-cat1');
        }
    }
});

// ** ** ** ** ** ** ** ** ** ** ** * Page connect ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** *



// ** ** ** ** ** ** ** ** ** ** ** *       Data from json File     * ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** *



fetch("https://prakash-dey.github.io/api/ecommerce.json").then((data)=>{
    data = data.json().then((data)=>{
        console.log(data)
    })
})
let  http =new XMLHttpRequest();

http.open('get', 'data.json', true)

http.send()

http.onload= function(){
    if(this.readyState ==4 && this.status ==200){
        let product = JSON.parse(this.responseText)
        let output =''

        for(let item of product){

            output += `<div class="box-pro "><img src="${item.image} " alt=" ">
            <div class="more ">+3 More</div>
            <div class="pro-detail ">${item.title} </div>
            <div class="rate ">${item.price}  <span>onwards</span></div>
            <div class="free-del "><button>Free Delivery</button></div>
            <div class="rev "><button>${item.rating.rate}</button>
                <span>${item.rating.count} Reviews</span>
            </div>
        </div>
            `
            document.querySelector('.right-flex').innerHTML += output;
            const arr = document.querySelectorAll('.box-pro');

for(let a of arr){
    a.addEventListener('click', ()=>{
        window.location.href= ("http://127.0.0.1:5501/pages/product.html");
        
    })
}
        }
    }
}

const arr = document.querySelectorAll('.box-pro');

for(let a of arr){
    a.addEventListener('click', ()=>{
        window.location.href= ("http://127.0.0.1:5501/pages/product.html");
        
    })
}


window.onload = async () => {

    const result = await fetch(`https://prakash-dey.github.io/api/ecommerce.json`);

    const data = await result.json();

    // console.log(data);
    // console.log(document.querySelector('.box-pro'));

    
    document.querySelector('.box-pro').insertAdjacentHTML('beforeend', data.map((item) => {
        // const date = new Date(item.creationDatetime);
        // console.log('inside map')
        return `<div class="box-pro "><img src="${item.image} " alt=" ">
        <div class="more ">+3 More</div>
        <div class="pro-detail ">${item.name}</div>
        <div class="rate ">${item.price} <span>onwards</span></div>
        <div class="free-del "><button>Free Delivery</button></div>
        <div class="rev "><button>${item.rating.rate}</button>
            <span>${item.rating.count}Reviews</span>
        </div>
    </div>`
    const arr = document.querySelectorAll('.box-pro');

for(let a of arr){
    a.addEventListener('click', ()=>{
        window.location.href= ("http://127.0.0.1:5501/pages/product.html");
        
    })
}

    }).join("")
    )}
// let a =[3, 56, 8, 9]

// b =a.map((a)=>{
//     return a*2;
// })
// console.log(b);
