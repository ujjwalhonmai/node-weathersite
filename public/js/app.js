console.log('Client side javascript file is loaded!')
const weatherform=document.querySelector('form')
const search=document.querySelector('input')
const first=document.querySelector('#first')
const second=document.querySelector('#second')
weatherform.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location=search.value
    first.textContent='loading...'
    second.textContent=''
    fetch('/weather?address='+location).then((response)=>{
        response.json().then((data)=>{
            if(data.error)
            {
                first.textContent=data.error
            }
            else{
                first.textContent=data.location
                second.textContent=data.forecast
            }
    
        })
    })
    })