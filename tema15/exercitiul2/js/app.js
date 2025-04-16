const titles = document.querySelectorAll('.title');

titles.forEach( title => {
    title.addEventListener('click', (e)=>{
        e.target.nextElementSibling.classList.toggle('active');
    });
} )