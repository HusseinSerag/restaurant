import './styles/styles.css'
import * as Controller from './index'
import { menuTab } from './menu'
export function homeTab(){
    let opacity = document.createElement('div')
    opacity.classList.add('opacity')
    let container = document.createElement('div')
    container.appendChild(opacity)
    container.classList.add('homeContainer')
    let title =document.createElement('h1')
    let subTitle = document.createElement('h4')
    let titleContainer = document.createElement('div')
    titleContainer.appendChild(title)
    titleContainer.appendChild(subTitle)
    title.textContent = 'Burgeria'
    subTitle.textContent = 'the best burger in town!'
    titleContainer.classList.add('titleContainer')
    container.appendChild(titleContainer)

    let menuOption = document.createElement('button')
    menuOption.textContent = 'Our menu'
    menuOption.className = 'btn menu-btn'
    menuOption.addEventListener('click',()=>{
        Controller.menu.classList.remove('chosen-tab')
        Controller.contact.classList.remove('chosen-tab')
        Controller.home.classList.remove('chosen-tab')
        Array.from(Controller.content.children).forEach(child=>content.removeChild(child))
        Controller.menu.classList.add('chosen-tab')
        Controller.content.appendChild(menuTab())
    })

    container.appendChild(menuOption)
    let locationContainer = document.createElement('div')
    locationContainer.classList.add('locationContainer')
    locationContainer.textContent = 'Our location is 1234 Broad way , Europe'
    container.appendChild(locationContainer)
    return container
}