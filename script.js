const navbarIcon = document.getElementById('navbar-icon');
let isIconEnabled = true;

navbarIcon.addEventListener('click', function() {
    if (isIconEnabled) {
        navbarIcon.classList.toggle('active');
        isIconEnabled = false;
        setTimeout(function() {
            isIconEnabled = true;
        }, 500); // add a delay of 0.5 second before enabling the icon again
    }
});
