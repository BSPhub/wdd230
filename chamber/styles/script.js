

function toggleMenu () {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById('hamburgerBtn');
x.onclick  = toggleMenu;


// section of code for the YEAR
const options = {year: 'numeric'};
document.getElementById('date').textContent = new Date().toLocaleDateString('en-US', options);

// section of code for the SITE LAST UPDATED
let modified = document.lastModified;
document.getElementById('updated').textContent = modified;