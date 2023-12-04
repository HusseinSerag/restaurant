import './styles/styles.css'
import { homeTab } from './home';
import { menuTab } from './menu';
import { contactTab } from './contact';

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
    })
    
})
home.addEventListener('click',()=>{
    content.appendChild(homeTab())
})
menu.addEventListener('click',()=>{
    content.appendChild(menuTab())
})
contact.addEventListener('click',()=>{
    content.appendChild(contactTab())
})