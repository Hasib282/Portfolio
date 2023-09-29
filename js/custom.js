// sidenavbar or side menubar js start here
const sideNav = document.getElementById("mySidenav");
const sideNavContainer = document.getElementById("sidenav-container");


function openNav() {
    sideNav.classList.add("show");
    sideNavContainer.classList.add("width");
    document.body.style.overflow = "hidden";
}
  
function closeNav() {
    sideNav.classList.remove("show");
    sideNavContainer.classList.remove("width");
    document.body.style.overflow = "visible";
}

function toggleNav() {
    if (sideNav.classList.contains("show") && sideNavContainer.classList.contains("width")) {
        closeNav();
    }
    else{
        openNav();
    }
}

// sidenavbar or side menubar js end here


function sendMail() {
    const form = document.getElementById("emailForm");
    const subject = form.querySelector('input[name="subject"]').value;
    const name = form.querySelector('input[name="name"]').value;
    const message = form.querySelector('textarea[name="message"]').value;
    const email = form.querySelector('input[name="email"]').value;
  
    const mailtoLink = `mailto:hasiburrahman81098@gmail.com?subject=${subject}&body=Hi, my name is ${name}. ${message} (${email})`;
  
    form.action = mailtoLink;
}