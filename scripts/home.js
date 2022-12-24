const cat = document.getElementById('mobile-view-cat');
const resCat = document.getElementById('res-cat');
const resCat1 = document.getElementById('res-cat1');
// const cat1 =document.getElementById('mobile-view-cat');
const resUsr = document.getElementById('res-user');
const accountProfile = document.getElementById('account-profile-block')


window.addEventListener('click', (e) => {
    console.log(e.target)
    console.log(e.target.parentNode.parentNode)
    if (!e.target.parentNode.matches('.res-use')) {

        if (accountProfile.classList.contains('account-profile-block')) {
            accountProfile.classList.remove('account-profile-block');

        }
    }
});



resUsr.firstElementChild.addEventListener('click', (e) => {
    console.log(e.target.parentNode.parentNode)
    accountProfile.classList.toggle('account-profile-block');
});








const genderSvg = document.getElementById('gender-svg')
const genderDrp = document.querySelectorAll('.gender-drp')

genderSvg.addEventListener('click', () => {
    genderDrp.forEach(element => {
        element.classList.toggle('gender-show');
    });

})



resCat.addEventListener('click', () => {
    cat.classList.toggle('mobile-view-cat1');

});

resCat1.addEventListener('click', () => {
    cat.classList.toggle('mobile-view-cat1');
});


window.addEventListener('click', (e) => {
    if (!e.target.matches('.res-grid')) {
        if (cat.classList.contains('mobile-view-cat1')) {
            cat.classList.remove('mobile-view-cat1');
        }
    }
});



resCat1.addEventListener('click', () => {
    cat.classList.add('mobile-view-cat1')
        // console.log(cat.classList.toggle('cls','thudd'))
})