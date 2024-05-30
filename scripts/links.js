const linksURL = 'data/links.json'; // Updated to local path

async function getLinks() {
  try {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.weeks);
  } catch (error) {
    console.error('Error fetching links data:', error);
  }
}

function displayLinks(weeks) {
  const activitySection = document.querySelector('.card ul');
  activitySection.innerHTML = ''; // Clear existing content

  weeks.forEach(week => {
    const weekItem = document.createElement('li');
    weekItem.textContent = `${week.week}: `;
    
    week.links.forEach((link, index) => {
      const linkElement = document.createElement('a');
      linkElement.href = link.url;
      linkElement.textContent = link.title;

      weekItem.appendChild(linkElement);

      if (index < week.links.length - 1) {
        weekItem.appendChild(document.createTextNode(' | '));
      }
    });

    activitySection.appendChild(weekItem);
  });
}

document.addEventListener('DOMContentLoaded', getLinks);
