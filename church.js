

let menuicon =document.querySelector('#menu-icon');
let navbar = document.querySelector('.navlist');

menuicon.onclick = () => {
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navlinks = document.querySelector('.links');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id =sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);

    menuicon.classList.remove('bx-x');
    navbar.classList.removeo('active');
}




window.addEventListener('DOMContentLoaded',()=>{
document.querySelector('.random').addEventListener('click',()=>{
    loadBibleVerses();
})

    function loadBibleVerses(){

        const api = 
        'https://beta.ourmanna.com/api/v1/get?format=json&order=daily'

        fetch(api)
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data)
            const container = document.querySelector('.card-bible')
                    const verse = data.verse
                    const details = verse.details
                const data2 = document.createElement('div')
                console.log(details.text)
                data2.innerHTML = `<p>verse:${details.reference}</p>
                <p>${details.text}</p>
                `
            container.appendChild(data2)
            ;
        })
    }


})