export default function initScroll(){
    const sections = document.querySelectorAll('.js-scroll');
    if(sections.length){
        const metadeTela = window.innerHeight * 0.6;
        
        function animaScroll(){
            sections.forEach((section) =>{
                const sectionTop = section.getBoundingClientRect().top;
                const isvisivel = (sectionTop - metadeTela) < 0
                if(isvisivel){
                    section.classList.add('ativo')
                }else if(section.classList.contains('ativo')){
                    section.classList.remove('ativo')
                }
            })
        }
        animaScroll()
        window.addEventListener('scroll', animaScroll);
    }
    
}
