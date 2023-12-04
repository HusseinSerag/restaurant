export default function createHeader(){
    const header = document.createElement('header')
    const homeDiv = document.createElement('div')
    const menuDiv = document.createElement('div')
    const contactDiv = document.createElement('div')
    header.classList.add('header')
    homeDiv.textContent = 'Home'
    menuDiv.textContent = 'Menu'
    contactDiv.textContent = 'Contact'
    header.appendChild(homeDiv)
    header.appendChild(menuDiv)
    header.appendChild(contactDiv)
    Array.from(header.children).forEach(child=>{
        child.classList.add('header-link')
    })


    return header
}