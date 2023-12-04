import './styles/styles.css'

//initial page 
const content = document.querySelector('#content');
const menu = document.querySelector('[class$=menu]');
const home = document.querySelector('[class$=home]');
const contact = document.querySelector('[class$=contact]');
[menu,contact,home].forEach(tab=>{
    tab.addEventListener('click',()=>{
        menu.classList.remove('chosen-tab')
        contact.classList.remove('chosen-tab')
        home.classList.remove('chosen-tab')
        Array.from(content.children).forEach(child=>content.removeChild(child))
        tab.classList.add('chosen-tab')
        content.appendChild()
    })
    
})
