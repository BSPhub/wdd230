'strict mode'

// section of code for the YEAR
const options = {year: 'numeric'};
document.getElementById('date').textContent = new Date().toLocaleDateString('en-US', options);

// section of code for the SITE LAST UPDATED
let modified = new Date(document.lastModified);
document.getElementById('updated').textContent = modified;
