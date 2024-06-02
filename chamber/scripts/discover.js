// const visit = document.querySelector("#visit-message");

// let visitMessage = "This is your first visit to the page.";
// let visitDate = new Date();

// let lastVisitString = window.localStorage.getItem("last-visit");
// if (lastVisitString != null){
//     let lastVisitDate = new Date(lastVisitString);
//     let dateDifference = Math.floor((visitDate.getTime() - lastVisitDate.getTime()) / (24 * 60 * 60 * 1000));
//     visitMessage = `You last visited the page ${dateDifference} days ago.`;
// }

// visit.textContent = visitMessage;
// window.localStorage.setItem("last-visit", visitDate.toString());

document.addEventListener("DOMContentLoaded", () => {
  const visitMessageElement = document.getElementById("visit-message");

  const currentVisit = new Date();
  let lastVisit = localStorage.getItem("lastVisit");

  if (lastVisit) {
    lastVisit = new Date(lastVisit);
    const timeDifference = currentVisit - lastVisit;
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    if (daysDifference === 0) {
      visitMessageElement.textContent = "Welcome back! You visited today.";
    } else if (daysDifference === 1) {
      visitMessageElement.textContent = "Welcome back! You visited yesterday.";
    } else {
      visitMessageElement.textContent = `Welcome back! It's been ${daysDifference} days since your last visit.`;
    }
  } else {
    visitMessageElement.textContent = "Welcome! This is your first visit.";
  }

  localStorage.setItem("lastVisit", currentVisit);
});
