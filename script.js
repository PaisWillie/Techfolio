// Random Quote Function
writeRandomQuote = function () {
  var quotes = [
    "Talk is cheap. Show me the code. - Linus Torvalds",
    "Programs must be written for people to read, and only incidentally for machines to execute. - Harold Abelson",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. - Martin Fowler",
    "First, solve the problem. Then, write the code. - John Johnson",
    "Experience is the name everyone gives to their mistakes. - Oscar Wilde",
    "In order to be irreplaceable, one must always be different. - Coco Chanel",
    "Java is to JavaScript what car is to Carpet. - Chris Heilmann",
    "Knowledge is power. - Francis Bacon",
    "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code. - Dan Salomon",
    "Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away. - Antoine de Saint-Exupery"
  ];
  var rand = Math.floor(Math.random() * quotes.length);
  $('.random-quote').text(quotes[rand]);
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

// Function to render repositories using jQuery
function renderRepositoriesWithjQuery() {
  var experiencesSection = $('.experiences');

  // Clear any existing content
  experiencesSection.empty();

  // Loop through each repository
  repositories.forEach(function (repo) {
    // Create the main container div
    var experienceLink = $('<div>').addClass('experience-link');

    // Create the date div
    var experienceDate = $('<div>').addClass('experience-date');
    var dateSpan = $('<span>').text(repo.date);
    experienceDate.append(dateSpan);

    // Create the details div
    var experienceDetails = $('<div>').addClass('experience-details');

    // Create the header div
    var experienceHeader = $('<div>').addClass('experience-header');

    // Create the title link
    var titleLink = $('<a>')
      .attr({
        href: repo.url,
        target: '_blank',
        rel: 'noreferrer',
      })
      .append(
        $('<h3>').addClass('experience-title').text(repo.name)
      );

    // Create the external icon
    var externalIcon = $('<img>')
      .attr({
        width: 25,
        height: 25,
        src: 'https://img.icons8.com/external-thin-kawalan-studio/100/FFFFFF/external-arrow-up-right-arrows-thin-kawalan-studio.png',
        alt: 'External Link',
      })
      .addClass('external-icon');

    experienceHeader.append(titleLink, externalIcon);

    // Create the description paragraph
    var experienceDescription = $('<p>')
      .addClass('experience-description')
      .text(repo.description);

    // Create the experience links div
    var experienceLinks = $('<div>').addClass('experience-links');

    var repoLink = $('<a>')
      .attr({
        href: repo.url,
        target: '_blank',
        rel: 'noreferrer',
      })
      .addClass('repo-link')
      .append(
        $('<img>')
          .attr({
            width: 15,
            height: 15,
            src: 'https://img.icons8.com/ios-filled/15/FFFFFF/link--v1.png',
            alt: 'Link',
          })
          .addClass('link-icon'),
        $('<p>').text('GitHub Repository')
      );

    experienceLinks.append(repoLink);

    // Create the tags div
    var experienceTags = $('<div>').addClass('experience-tags');

    repo.languages.forEach(function (language) {
      var tag = $('<div>').addClass('tag').text(language);
      experienceTags.append(tag);
    });

    // Assemble the experience details
    experienceDetails.append(
      experienceHeader,
      experienceDescription,
      experienceLinks,
      experienceTags
    );

    // Assemble the main container
    experienceLink.append(experienceDate, experienceDetails);

    // Append to the experiences section
    experiencesSection.append(experienceLink);
  });
}

// Call the function to render repositories using jQuery
renderRepositoriesWithjQuery();

// Function to fetch repositories from GitHub API using Fetch API
function fetchRepositories() {
  fetch('https://api.github.com/users/PaisWillie/repos')
    .then(response => response.json())
    .then(data => {
      // Log the data to the console
      console.log('Fetched Repositories:', data);

      // Store the data for later use
      window.fetchedRepositories = data;
    })
    .catch(error => {
      console.error('Error fetching repositories:', error);
    });
}

// Call the function to fetch repositories
fetchRepositories();

// Tooltip functionality for social icons
$(document).ready(function () {
  $('.social-links a').each(function () {
    var link = $(this);
    var tooltipText = link.find('img').attr('alt');
    link.attr('title', tooltipText);
  });
});
