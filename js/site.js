let ul = document.querySelector('nav .ul');

function openMenu(){
    ul.classList.add('open')
}

function closeMenu(){
    console.log(ul)
    ul.classList.remove('open')
}