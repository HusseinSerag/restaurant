import './styles/styles.css'
import item1Photo from './photos/item1.jpg'
import item2Photo from './photos/item2Photo.jpg'
import item3Photo from './photos/item3Photo.jpg'
export function menuTab(){

    let opacity = document.createElement('div')
    opacity.classList.add('opacity')
    let container = document.createElement('div')
    container.appendChild(opacity)
    container.classList.add('menuMainContainer')
    let title =document.createElement('h1')
    title.textContent = 'Burgers'
    let titleContainer = document.createElement('div')
    titleContainer.classList.add('titleContainer')
    titleContainer.appendChild(title)
    
    container.appendChild(titleContainer)

    let items = document.createElement('div')
    items.classList.add('items')
    container.appendChild(items)
    items.appendChild(createMenuItem('Classic Burger and Crispy Fries Combo',10,'Indulge in a timeless culinary experience with our Classic Burger and Crispy Fries Combo—a symphony of flavors that promises to satisfy your cravings. Our succulent, handcrafted burger features a perfectly seasoned, flame-grilled patty made from premium, locally-sourced beef, ensuring a juicy and mouthwatering bite with every savory sensation.' , item1Photo , 13.5))
    items.appendChild(createMenuItem('Gourmet Truffle Burger with Parmesan Truffle Fries',12,'Embark on a culinary adventure with our exquisite Gourmet Truffle Burger paired with indulgent Parmesan Truffle Fries—a symphony of luxury and flavor that transcends the ordinary. At the heart of this culinary masterpiece is a prime, hand-selected Wagyu beef patty, expertly grilled to perfection to achieve a melt-in-your-mouth tenderness that defines gourmet excellence.',item2Photo,15))
    items.appendChild(createMenuItem(' Southwest Chipotle Burger with Potato Fries' , 9 , 'Dive into a world of bold flavors with our Southwest Chipotle Burger paired with Loaded Sweet Potato Fries—a culinary fiesta that ignites your palate with a fusion of spice, smokiness, and sweetness. Our signature burger boasts a zesty chipotle-infused beef patty, perfectly grilled to capture the essence of Southwestern flair.',item3Photo , 12.5))
    

    return container
}

function createMenuItem(name,price,description,img,comboPrice){
    let itemContainer = document.createElement('div')
    itemContainer.classList.add('item-container')

    let itemName = document.createElement('div')
    itemName.classList.add('itemName')
    itemName.textContent = name

    let priceName = document.createElement('div')
    priceName.classList.add('priceName')
    let drink = document.createElement('div')
    drink.textContent = `add ${comboPrice - price}$ to get a drink!`
    priceName.textContent = `Combo: ${price}$`
    priceName.appendChild(drink)

    
    

    let descriptionDiv = document.createElement('div')
    descriptionDiv.classList.add('description')
    descriptionDiv.textContent = description

    let imgContainer = document.createElement('div')
    imgContainer.classList.add('imgContainer')
    let image =document.createElement('img')
    image.src = img
    imgContainer.appendChild(image)
    


    itemContainer.appendChild(itemName)
    itemContainer.appendChild(priceName)
    itemContainer.appendChild(descriptionDiv)
    itemContainer.appendChild(imgContainer)

    return itemContainer
}