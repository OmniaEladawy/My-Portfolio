

function toggleNavbar() {
    let element = document.getElementById('toggle-navbar')
    
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}