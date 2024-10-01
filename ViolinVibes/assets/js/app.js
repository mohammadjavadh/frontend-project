function handleScroll() {
    const navbar = document.getElementById('navbar');
    const scrollPosition = window.scrollY;
  
    if (scrollPosition > 110) {
      navbar.classList.add('scrolled');
      document.body.classList.add('sticky-nav');
    } else {
      navbar.classList.remove('scrolled');
      document.body.classList.remove('sticky-nav');
    }
  }
window.addEventListener('scroll', handleScroll);

// small menu
let Smenu = document.getElementById("s-menu");
let closeIcon = document.getElementById("fa-close");
Smenu.addEventListener("click" , function(){
  let sMenuNav = document.getElementById("small-menu-nav");
  let hasDnone = sMenuNav.classList;
  if( hasDnone ){
    sMenuNav.classList.remove("d-none");
  }
 else{
    sMenuNav.classList.add("d-none");
  }
});
closeIcon.addEventListener("click" , function(){
  let sMenuNav = document.getElementById("small-menu-nav");
  let doesntHavDnone = sMenuNav.classList;
  if( doesntHavDnone ){
    sMenuNav.classList.add("d-none");
  }
 else{
    sMenuNav.classList.remove("d-none");
  }
});



// enroll lessons
document.addEventListener("DOMContentLoaded", function () {
  const enrollButtons = document.querySelectorAll(".enroll-button");

  enrollButtons.forEach(button => {
    button.addEventListener("click", function () {
      const subject = this.getAttribute("data-subject");
      alert(`You have enrolled in ${subject} lessons!`);
    });
  });
});

// Schedule and Availability:
document.addEventListener("DOMContentLoaded", function () {
  const scheduleTable = document.querySelector(".table");

  // Get the current day (0: Sunday, 1: Monday, ..., 6: Saturday)
  const currentDay = new Date().getDay();

  // Highlight the row for the current day
  if (currentDay > 0) {
    const rows = scheduleTable.querySelectorAll("tbody tr");
    rows[currentDay - 1].classList.add("highlighted");
  }
});



document.addEventListener("DOMContentLoaded", function () {
  const eventsContainer = document.getElementById("events-container");

  const eventsData = [
    {
      title: "Playing in an Ensemble",
      target: "Intermediate to advanced students.",
      description: "A workshop focused on the skills needed for successful ensemble playing, including listening, blending, and communicating with other musicians.",
    },
    {
      title: "Performance Preparation and Stage Presence",
      target: "Intermediate to advanced",
      description: "Techniques for preparing for performances.",
    },
    {
      title: "Improvisation and Creative Playing",
      target: " Intermediate to advanced",
      description: "Encourages students to explore improvisation and develop their own musical ideas, with exercises in creativity and spontaneous playing.",
    },
    {
      title: "Violin Maintenance and Repair",
      target: "All levels",
      description: "Practical tips on how to care for and maintain a violin, including minor repairs, adjusting the bridge, and changing strings.",
    },
  ];

  eventsData.forEach(event => {
    const eventCard = document.createElement("div");
    eventCard.classList.add("col-md-6", "mb-4");
    eventCard.innerHTML = `
      <div class="card">
        <div class="card-body">
          <h3 class="card-title">${event.title}</h3>
          <p class="card-text">${event.target}</p>
          <p class="card-text">${event.description}</p>
        </div>
      </div>
    `;
    eventsContainer.appendChild(eventCard);
  });
});
