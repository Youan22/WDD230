let numVisit = 1;

if (localStorage.getItem("numVisit")) {
    numVisit =parseInt(localStorage.getItem("numVisit"));
    numVisit++;

}

// Setting value into local storage
localStorage.setItem("numVisit", numVisit)

const visitCounter = document.getElementById("numberVisit")
visitCounter.innerHTML = numVisit;
