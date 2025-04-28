document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const schoolName = document.getElementById('schoolName').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    // Password validation
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
    
    // Normally you would send this data to a server for registration
    console.log('Registration data:', { 
        firstName, 
        lastName, 
        email,
        phoneNumber,
        schoolName,
        password 
    });
    
    // Redirect to dashboard after successful registration
    window.location.href = 'login.html';
});