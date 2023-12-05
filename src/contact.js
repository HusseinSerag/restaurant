import './styles/styles.css'

export function contactTab(){
    let opacity = document.createElement('div')
    opacity.classList.add('opacity')
    let container = document.createElement('div')
    container.appendChild(opacity)
    container.classList.add('contactContainer')
    let workDay = document.createElement('div')
    let title = document.createElement('h1')
    title.textContent = 'Working Hours'
    container.appendChild(title)
    workDay.appendChild(createDay('Monday'))
    workDay.appendChild(createDay('Tuesday'))
    workDay.appendChild(createDay('Wednesday'))
    workDay.appendChild(createDay('Thursday'))
    workDay.appendChild(createDay('Friday',undefined,'11:00'))
    workDay.appendChild(createDay('Saturday' ,undefined , '11:00'))
    workDay.appendChild(createDay('Sunday','10:00' , '5:00'))
    workDay.classList.add('workDay')

    container.appendChild(workDay)

    let title2 = document.createElement('h1')
    title2.textContent = 'Contact Us'
    container.appendChild(title2)

    let contactus = document.createElement('div')
    contactus.classList.add('contact-us')
    
    container.appendChild(contactus)

    let [number , email]=createContact()
    contactus.appendChild(number)
    contactus.appendChild(email)
    return container
}

function createDay(day , start='8:00' , end='10:00'){
   let dayDiv =  document.createElement('div');
   dayDiv.classList.add('day')
   dayDiv.textContent = `${day} from ${start} AM to ${end} PM `
   return dayDiv
}


function createContact(){
    let number = document.createElement('div')
    number.textContent = 'Call us on +123456789'
    let email = document.createElement('div')
    email.textContent = 'Our email is burgeria@gmail.com'
    
    return [number,email]
}

