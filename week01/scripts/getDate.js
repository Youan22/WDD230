let myDate = new Date();
let myYear = myDate.getFullYear();

document.querySelector('.currentYear').textContent = myYear;

document.querySelector('#lastModified').textContent = myDate;