const navSlide = () => {
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.nav-link')
    const navLinks = document.querySelectorAll('.nav-link li')


    burger.addEventListener('click',()=>{
            
        // toggle nav 
        nav.classList.toggle('nav-active')

        // animate links
        navLinks.forEach((link,index) =>{
            if(link.style.animation)
                link.style.animation = ''
            else
                link.style.animation =`navLinkFade 0.5 ease forwards ${index / 7 + 1.5}s`
    })
        burger.classList.toggle('toggle')

        
    })


}

navSlide();