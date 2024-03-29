export default function initMenu(){
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
    function scrollToSection(event){
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href')
        const section = document.querySelector(href)

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    /*
        outra forma de fazer ir para a seção de forma suave
        const topo = section.offsetTop;
        window.scrollTo({
            top: topo,
            behavior:'smooth' ;
        }) */
    }

    linksInternos.forEach((link) =>{
        link.addEventListener('click', scrollToSection)
    })
}
