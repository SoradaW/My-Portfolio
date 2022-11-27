alert("Please fill in your details")

console.log('It works')

$(document).ready(function () {
    $('.submit').click(function (event) {
    event.preventDefault()
    console.log('Clicked button')
    var full_name = $('.full_name').val()
    var email = $('.email').val()
    var message = $('.message').val()
    var statusElm = $('.status')
    statusElm.empty()

    if(email.length >= 5 && email.includes ('@') && email.includes('.')){
     console.log('<div>Email is valid</div>')}
    else {
     statusElm.append('<div>Please enter a valid E-mail address</div>')
    }
    })
})