const form = document.querySelector('form')


form.addEventListener('submit', e => {
    e.preventDefault()
    const passwordInput = document.querySelector('#password')
    const passwordConfirmInput = document.querySelector('#confirm-password')

    if (passwordInput.value !== passwordConfirmInput.value) {
        alert("Passwords do not match")}
})