// Smart Parking System - Main JavaScript

// Registration Form Logic
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registerForm');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const firstName = document.getElementById('first_name');
    const lastName = document.getElementById('last_name');
    const phoneNumber = document.getElementById('phone_number');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm_password');

    // Validate username
    username.addEventListener('input', function () {
        const usernameRegex = /^[A-Za-z0-9_.]{3,64}$/;
        if (!username.value) {
            username.classList.add('is-invalid');
            document.getElementById('username-feedback').textContent = 'Username is required.';
            return false;
        } else if (!usernameRegex.test(username.value)) {
            username.classList.add('is-invalid');
            document.getElementById('username-feedback').textContent = 'Username must be 3-64 characters and contain only letters, numbers, dots and underscores.';
            return false;
        } else {
            username.classList.remove('is-invalid');
            username.classList.add('is-valid');
            return true;
        }
    });

    // Validate email
    email.addEventListener('input', function () {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.value) {
            email.classList.add('is-invalid');
            document.getElementById('email-feedback').textContent = 'Email is required.';
            return false;
        } else if (!emailRegex.test(email.value)) {
            email.classList.add('is-invalid');
            document.getElementById('email-feedback').textContent = 'Please enter a valid email address.';
            return false;
        } else {
            email.classList.remove('is-invalid');
            email.classList.add('is-valid');
            return true;
        }
    });

    // Validate first name
    firstName.addEventListener('input', function () {
        const nameRegex = /^[A-Za-z\s]+$/;
        if (!firstName.value) {
            firstName.classList.add('is-invalid');
            document.getElementById('first-name-feedback').textContent = 'First name is required.';
            return false;
        } else if (!nameRegex.test(firstName.value)) {
            firstName.classList.add('is-invalid');
            document.getElementById('first-name-feedback').textContent = 'First name must contain only letters and spaces.';
            return false;
        } else {
            firstName.classList.remove('is-invalid');
            firstName.classList.add('is-valid');
            return true;
        }
    });

    // Validate last name
    lastName.addEventListener('input', function () {
        const nameRegex = /^[A-Za-z\s]+$/;
        if (!lastName.value) {
            lastName.classList.add('is-invalid');
            document.getElementById('last-name-feedback').textContent = 'Last name is required.';
            return false;
        } else if (!nameRegex.test(lastName.value)) {
            lastName.classList.add('is-invalid');
            document.getElementById('last-name-feedback').textContent = 'Last name must contain only letters and spaces.';
            return false;
        } else {
            lastName.classList.remove('is-invalid');
            lastName.classList.add('is-valid');
            return true;
        }
    });

    // Validate phone number
    phoneNumber.addEventListener('input', function () {
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneNumber.value) {
            phoneNumber.classList.add('is-invalid');
            document.getElementById('phone-feedback').textContent = 'Phone number is required.';
            return false;
        } else if (!phoneRegex.test(phoneNumber.value)) {
            phoneNumber.classList.add('is-invalid');
            document.getElementById('phone-feedback').textContent = 'Phone number must be exactly 10 digits.';
            return false;
        } else {
            phoneNumber.classList.remove('is-invalid');
            phoneNumber.classList.add('is-valid');
            return true;
        }
    });

    // Validate password
    password.addEventListener('input', function () {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        const feedback = document.getElementById('password-feedback');

        if (!password.value) {
            password.classList.add('is-invalid');
            feedback.textContent = 'Password is required.';
            return false;
        } else if (!passwordRegex.test(password.value)) {
            password.classList.add('is-invalid');
            feedback.textContent = 'Password must be at least 8 characters and include at least one uppercase letter, one lowercase letter, one number, and one special character.';
            return false;
        } else {
            password.classList.remove('is-invalid');
            password.classList.add('is-valid');
            validateConfirmPassword();
            return true;
        }
    });

    // Validate confirm password
    function validateConfirmPassword() {
        if (!confirmPassword.value) {
            confirmPassword.classList.add('is-invalid');
            document.getElementById('confirm-password-feedback').textContent = 'Please confirm your password.';
            return false;
        } else if (confirmPassword.value !== password.value) {
            confirmPassword.classList.add('is-invalid');
            document.getElementById('confirm-password-feedback').textContent = 'Passwords must match.';
            return false;
        } else {
            confirmPassword.classList.remove('is-invalid');
            confirmPassword.classList.add('is-valid');
            return true;
        }
    }

    confirmPassword.addEventListener('input', validateConfirmPassword);

    // Form submission validation
    form.addEventListener('submit', function (event) {
        let isValid = true;

        // Trigger validation for all fields
        if (!username.value || !/^[A-Za-z0-9_.]{3,64}$/.test(username.value)) {
            username.classList.add('is-invalid');
            isValid = false;
        }

        if (!email.value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
            email.classList.add('is-invalid');
            isValid = false;
        }

        if (!firstName.value || !/^[A-Za-z\s]+$/.test(firstName.value)) {
            firstName.classList.add('is-invalid');
            isValid = false;
        }

        if (!lastName.value || !/^[A-Za-z\s]+$/.test(lastName.value)) {
            lastName.classList.add('is-invalid');
            isValid = false;
        }

        if (!phoneNumber.value || !/^[0-9]{10}$/.test(phoneNumber.value)) {
            phoneNumber.classList.add('is-invalid');
            isValid = false;
        }

        if (!password.value || !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password.value)) {
            password.classList.add('is-invalid');
            isValid = false;
        }

        if (!confirmPassword.value || confirmPassword.value !== password.value) {
            confirmPassword.classList.add('is-invalid');
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault();
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    console.log('Smart Parking System JavaScript loaded');

    // Password strength indicator
    const passwordField = document.getElementById('password');
    const passwordStrength = document.getElementById('password-strength');

    if (passwordField && passwordStrength) {
        passwordField.addEventListener('input', function () {
            const password = passwordField.value;
            let strength = 0;
            let feedback = '';

            if (password.length >= 8) {
                strength += 1;
            }

            if (password.match(/[a-z]/) && password.match(/[A-Z]/)) {
                strength += 1;
            }

            if (password.match(/\d/)) {
                strength += 1;
            }

            if (password.match(/[^a-zA-Z\d]/)) {
                strength += 1;
            }

            switch (strength) {
                case 0:
                    feedback = 'Very Weak';
                    passwordStrength.className = 'password-strength text-danger';
                    break;
                case 1:
                    feedback = 'Weak';
                    passwordStrength.className = 'password-strength text-danger';
                    break;
                case 2:
                    feedback = 'Fair';
                    passwordStrength.className = 'password-strength text-warning';
                    break;
                case 3:
                    feedback = 'Good';
                    passwordStrength.className = 'password-strength text-info';
                    break;
                case 4:
                    feedback = 'Strong';
                    passwordStrength.className = 'password-strength text-success';
                    break;
            }

            passwordStrength.textContent = feedback;
        });
    }

    // Form validation
    const forms = document.querySelectorAll('.needs-validation');

    if (forms.length > 0) {
        Array.from(forms).forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }

                form.classList.add('was-validated');
            }, false);
        });
    }

    // Tooltip initialization
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    if (tooltipTriggerList.length > 0) {
        tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    }

    // Flash message auto-dismiss
    const flashMessages = document.querySelectorAll('.alert:not(.alert-permanent)');
    if (flashMessages.length > 0) {
        flashMessages.forEach(function (message) {
            setTimeout(function () {
                const alert = new bootstrap.Alert(message);
                alert.close();
            }, 5000);
        });
    }

    // Profile image upload preview
    const changeAvatarBtn = document.getElementById('changeAvatarBtn');
    if (changeAvatarBtn) {
        changeAvatarBtn.addEventListener('click', function () {

            const fileInput = document.createElement('input');
            fileInput.type = 'file';
            fileInput.accept = 'image/*';
            fileInput.style.display = 'none';
            document.body.appendChild(fileInput);

            fileInput.click();

            fileInput.addEventListener('change', function () {
                if (fileInput.files && fileInput.files[0]) {

                    const reader = new FileReader();
                    reader.onload = function (e) {
                        const avatarContainer = document.querySelector('.avatar-container');
                        if (avatarContainer) {
                            avatarContainer.innerHTML = `<img src="${e.target.result}" alt="Profile Image" class="img-fluid rounded-circle" style="width: 150px; height: 150px; object-fit: cover;">`;
                        }
                    };
                    reader.readAsDataURL(fileInput.files[0]);
                }
                document.body.removeChild(fileInput);
            });
        });
    }

    // Date picker initialization 
    const datePickers = document.querySelectorAll('.datepicker');
    if (datePickers.length > 0 && typeof flatpickr !== 'undefined') {
        flatpickr('.datepicker', {
            enableTime: false,
            dateFormat: 'Y-m-d',
            minDate: 'today'
        });
    }

    // Time picker initialization
    const timePickers = document.querySelectorAll('.timepicker');
    if (timePickers.length > 0 && typeof flatpickr !== 'undefined') {
        flatpickr('.timepicker', {
            enableTime: true,
            noCalendar: true,
            dateFormat: 'H:i',
            time_24hr: true
        });
    }

    // Handle login form submission
    const loginForm = document.querySelector('form[action*="login"]');
    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            console.log('Login form submitted');
        });
    }

    const logoutLinks = document.querySelectorAll('a[href*="logout"]');

    // Click handler to all logout links
    logoutLinks.forEach(link => {
        link.addEventListener('click', function (event) {

            event.preventDefault();

            const logoutUrl = this.getAttribute('href');

            console.log('Logging out, redirecting to:', logoutUrl);

            window.location.href = logoutUrl;
        });
    });

    // Handle alert dismissals
    const alerts = document.querySelectorAll('.alert');
    alerts.forEach(alert => {
        const closeBtn = alert.querySelector('.btn-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', function () {
                alert.remove();
            });
        }

        // Auto close alerts after 5 seconds
        setTimeout(() => {
            alert.classList.remove('show');
            setTimeout(() => {
                alert.remove();
            }, 500);
        }, 5000);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('loginForm');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    // Validate email
    email.addEventListener('input', function () {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.value) {
            email.classList.add('is-invalid');
            document.getElementById('email-feedback').textContent = 'Email is required.';
            return false;
        } else if (!emailRegex.test(email.value)) {
            email.classList.add('is-invalid');
            document.getElementById('email-feedback').textContent = 'Please enter a valid email address.';
            return false;
        } else {
            email.classList.remove('is-invalid');
            email.classList.add('is-valid');
            return true;
        }
    });

    // Validate password
    password.addEventListener('input', function () {
        if (!password.value) {
            password.classList.add('is-invalid');
            document.getElementById('password-feedback').textContent = 'Password is required.';
            return false;
        } else {
            password.classList.remove('is-invalid');
            password.classList.add('is-valid');
            return true;
        }
    });

    // Form submission validation
    form.addEventListener('submit', function (event) {
        let isValid = true;

        // Check email
        if (!email.value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
            email.classList.add('is-invalid');
            isValid = false;
        }

        // Check password
        if (!password.value) {
            password.classList.add('is-invalid');
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault();
        }
    });
});
