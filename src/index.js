import './styles/styles.css'
import { homeTab } from './home';
import { menuTab } from './menu';
import { contactTab } from './contact';

//initial page 
export const content = document.querySelector('#content');
export const menu = document.querySelector('[class$=menu]');
export const home = document.querySelector('[class$=home]');
export const contact = document.querySelector('[class$=contact]');

content.appendChild(homeTab())
let arr =  [menu,contact,home]
arr.forEach(tab=>{
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