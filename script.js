// script.js

// Random Quote Function
writeRandomQuote = function () {
  var quotes = new Array();
  quotes[0] = "Talk is cheap. Show me the code. - Linus Torvalds";
  quotes[1] =
    "Programs must be written for people to read, and only incidentally for machines to execute. - Harold Abelson";
  quotes[2] =
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. - Martin Fowler";
  quotes[3] =
    "First, solve the problem. Then, write the code. - John Johnson";
  quotes[4] =
    "Experience is the name everyone gives to their mistakes. - Oscar Wilde";
  quotes[5] =
    "In order to be irreplaceable, one must always be different. - Coco Chanel";
  quotes[6] =
    "Java is to JavaScript what car is to Carpet. - Chris Heilmann";
  quotes[7] = "Knowledge is power. - Francis Bacon";
  quotes[8] =
    "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code. - Dan Salomon";
  quotes[9] =
    "Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away. - Antoine de Saint-Exupery";
  var rand = Math.floor(Math.random() * quotes.length);
  document.querySelector('.random-quote').textContent = quotes[rand];
};

// Call the function to display a random quote
writeRandomQuote();

// Hard-coded repository data
var repositories = [
  {
    name: "Website Portfolio",
    description:
      "My personal website portfolio built with HTML, CSS, and JavaScript.",
    url: "https://github.com/PaisWillie/Website-Portfolio",
    languages: ["JavaScript", "HTML", "CSS"],
    date: "2023 — PRESENT",
  },
  {
    name: "Project Alpha",
    description: "An innovative project that solves complex problems.",
    url: "https://github.com/PaisWillie/Project-Alpha",
    languages: ["Python", "Flask"],
    date: "2022 — 2023",
  },
  // Add more repositories as needed
];

// Function to render repositories
function renderRepositories() {
  // Get the experiences section
  var experiencesSection = document.querySelector('.experiences');

  // Clear any existing content
  experiencesSection.innerHTML = '';

  // Loop through each repository
  repositories.forEach(function (repo) {
    // Create the main container div
    var experienceLink = document.createElement('div');
    experienceLink.className = 'experience-link';

    // Create the date div
    var experienceDate = document.createElement('div');
    experienceDate.className = 'experience-date';
    var dateSpan = document.createElement('span');
    dateSpan.textContent = repo.date;
    experienceDate.appendChild(dateSpan);

    // Create the details div
    var experienceDetails = document.createElement('div');
    experienceDetails.className = 'experience-details';

    // Create the header div
    var experienceHeader = document.createElement('div');
    experienceHeader.className = 'experience-header';

    // Create the title link
    var titleLink = document.createElement('a');
    titleLink.href = repo.url;
    titleLink.target = '_blank';
    titleLink.rel = 'noreferrer';

    var experienceTitle = document.createElement('h3');
    experienceTitle.className = 'experience-title';
    experienceTitle.textContent = repo.name;

    titleLink.appendChild(experienceTitle);

    // Create the external icon
    var externalIcon = document.createElement('img');
    externalIcon.width = 25;
    externalIcon.height = 25;
    externalIcon.src =
      'https://img.icons8.com/external-thin-kawalan-studio/100/FFFFFF/external-arrow-up-right-arrows-thin-kawalan-studio.png';
    externalIcon.alt = 'External Link';
    externalIcon.className = 'external-icon';

    experienceHeader.appendChild(titleLink);
    experienceHeader.appendChild(externalIcon);

    // Create the description paragraph
    var experienceDescription = document.createElement('p');
    experienceDescription.className = 'experience-description';
    experienceDescription.textContent = repo.description;

    // Create the experience links div
    var experienceLinks = document.createElement('div');
    experienceLinks.className = 'experience-links';

    var repoLink = document.createElement('a');
    repoLink.href = repo.url;
    repoLink.target = '_blank';
    repoLink.rel = 'noreferrer';
    repoLink.className = 'repo-link';

    var linkIcon = document.createElement('img');
    linkIcon.width = 15;
    linkIcon.height = 15;
    linkIcon.src =
      'https://img.icons8.com/ios-filled/15/FFFFFF/link--v1.png';
    linkIcon.alt = 'Link';
    linkIcon.className = 'link-icon';

    var linkText = document.createElement('p');
    linkText.textContent = 'GitHub Repository';

    repoLink.appendChild(linkIcon);
    repoLink.appendChild(linkText);
    experienceLinks.appendChild(repoLink);

    // Create the tags div
    var experienceTags = document.createElement('div');
    experienceTags.className = 'experience-tags';

    repo.languages.forEach(function (language) {
      var tag = document.createElement('div');
      tag.className = 'tag';
      tag.textContent = language;
      experienceTags.appendChild(tag);
    });

    // Assemble the experience details
    experienceDetails.appendChild(experienceHeader);
    experienceDetails.appendChild(experienceDescription);
    experienceDetails.appendChild(experienceLinks);
    experienceDetails.appendChild(experienceTags);

    // Assemble the main container
    experienceLink.appendChild(experienceDate);
    experienceLink.appendChild(experienceDetails);

    // Append to the experiences section
    experiencesSection.appendChild(experienceLink);
  });
}

// Call the function to render repositories
renderRepositories();
