function initTabNav() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li')
  const tabContent = document.querySelectorAll('.js-tabcontent section')

  if (tabMenu.length && tabContent.length) {
    //Verificação para rodar o código apenas se as consts não estiverem vazias, evitando erro caso esteja em outra aba de navegação

    tabContent[0].classList.add('ativo') //Iniciando a 1º section com a class ativo, para mostrar o texto

    function activeTab(index) {
      tabContent.forEach(section => {
        //Passando por todas as sections e removendo a classe ativo
        section.classList.remove('ativo')
      })

      tabContent[index].classList.add('ativo') //Passando por todas as sections e adicionando a classe ativo
    }

    tabMenu.forEach((itemMenu, index) => {
      //Add evento de clique nas imagens e chamando a função activeTab
      itemMenu.addEventListener('click', () => {
        activeTab(index)
      })
    })
  }
}

initTabNav()

function initAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt')
  const activeClass = 'ativo'
  if (accordionList.length) {
    accordionList[0].classList.add(activeClass) //Para o 1º dt estar aberto
    accordionList[0].nextElementSibling.classList.add(activeClass) //Para 0 1º dd estar aberto

    function activeAccordion() {
      this.classList.toggle(activeClass) //This é o elemento clicado dt, logo deixa o dt activeClass
      this.nextElementSibling.classList.toggle(activeClass) //add class ativo ao dd
    }

    accordionList.forEach(item => {
      item.addEventListener('click', activeAccordion)
    })
  }
}

initAccordion()

function initScrollSuave() {
  const linkInternos = document.querySelectorAll('.js-menu a[href^="#"]')

  function scrollToSection(event) {
    event.preventDefault()
    const href = event.currentTarget.getAttribute('href') //Pegando o atributo href
    const section = document.querySelector(href) //Linkando item e seção

    section.scrollIntoView({
      behavior: 'smooth', //Desce suave
      block: 'start' //Alinha no topo
    })

    /*Forma alternativa de criar o scroll suave
    const topo = section.offsetTop //Pega a distância do topo
    window.scrollTo({
      top: topo,
      behavior: 'smooth'
    })*/
  }

  linkInternos.forEach(link => {
    link.addEventListener('click', scrollToSection)
  })
}

initScrollSuave()

function initAnimationScroll() {
  const sections = document.querySelectorAll('.js-scroll')
  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6 //Estou pegando 60% da tela, para o elemento já começar a aparecer nesse momento e não ficar uma parte vazia até o scroll atingir o topo

    function animaScroll() {
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top //Encontrando a distância dos el do topo
        const isSectionVisible = sectionTop - windowMetade < 0
        if (isSectionVisible) {
          section.classList.add('ativo')
        }
      })
    }

    animaScroll() //Para já animar no momento que o site abrir

    window.addEventListener('scroll', animaScroll)
  }
}

initAnimationScroll()
