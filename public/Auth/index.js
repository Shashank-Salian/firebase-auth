const userLoggedIn = (user) => {
	formContainer.remove()
	$('#auth-container').removeClass('d-none')
	authText.innerText = `You are Logged In as ${user.email}\nVerified: ${user.emailVerified}`
	if (user.emailVerified) {
		verifyEmailBtn.classList.add('d-none')
	} else {
		verifyEmailBtn.classList.remove('d-none')
	}
}

const userLoggedOut = () => {
	$('body')[0].append(formContainer)
	$('#auth-container')[0].classList.add('d-none')
}

const errorHandler = (err, isInfo = false) => {
	if (isInfo) {
		$('#error-heading')[0].innerText = "Info"
	} else {
		$('#error-heading')[0].innerText = "Error"
	}
	$('#error-msg')[0].innerText = err.message
	errorModal.modal('show')
}