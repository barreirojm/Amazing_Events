
function captureData() {
    let name = document.getElementById('name_form')
    let email = document.getElementById('email_form')
    let message = document.getElementById('msg_form')

    let dataForm = {
        [name.name]: name.value,
        [email.name]: email.value,
        [message.name]: message.value
    }
    console.log(dataForm);
}

const handleForm = (event) => {
    event.preventDefault()
    captureData()
}

let buttonForm = document.getElementById('form-button')
buttonForm.addEventListener('click', handleForm)