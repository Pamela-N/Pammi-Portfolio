const bars = document.querySelector('.bars');
const MoMenu = document.querySelector('.moMenu');
const vala = document.querySelector('.time');
const website = document.querySelector('.Webber');

MoMenu.style.display = 'none'

bars.addEventListener('click', () =>{
    MoMenu.style.display = 'block';
    website.style.display = 'none';


});

vala.addEventListener('click',()=>{
    MoMenu.style.display = 'none';
    website.style.display = 'block';
});