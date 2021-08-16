document.getElementById('btn-submit').addEventListener('click', function() {
    // get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    emailField.value = '';
    // get user password
    const passField = document.getElementById('user-password');
    const userPass = passField.value;
    passField.value = '';
    if (userEmail == 'skemonalom@gmail.com' && userPass == 'bank@36') {
        window.location.href = 'banking.html';
    } else {
        console.log(`invalid`);
    }
})