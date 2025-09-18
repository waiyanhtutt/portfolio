// console.log("hello");
document.addEventListener("DOMContentLoaded", function () {
  const profilesection = document.querySelector("#profile-section");
  const elements = profilesection.querySelectorAll("p, h1, h2");

  const observerForprofile = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          elements[0].classList.add("animate__animated", "animate__fadeInLeft");
          elements[1].classList.add(
            "animate__animated",
            "animate__fadeInRight"
          );
          elements[2].classList.add("animate__animated", "animate__fadeInUp");
        } else {
          elements.forEach((element) => {
            element.classList.remove(
              "animate__animated",
              "animate__fadeInLeft",
              "animate__fadeInRight",
              "animate__fadeInUp"
            );
          });
        }
      });
    },
    { threshold: 0.3 }
  );

  observerForprofile.observe(profilesection);

  const myskillTitle = document.querySelector("#myskill-title");
  const myskillsele = myskillTitle.querySelector("h2");

  const observerForTtile = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          myskillsele.classList.add("animate__animated", "animate__fadeInLeft");
        } else {
          myskillsele.classList.remove(
            "animate__animated",
            "animate__fadeInLeft"
          );
        }
      });
    },
    { threshold: 0.3 }
  );

  observerForTtile.observe(myskillTitle);

  const myservicesTitle = document.querySelector("#myservices-title");
  const myservice = myservicesTitle.querySelector("h2");

  const observerForservicetitle = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          myservice.classList.add("animate__animated", "animate__fadeInUp");
        } else {
          myservice.classList.remove("animate__animated", "animate__fadeInUp");
        }
      });
    },
    { threshold: 0.3 }
  );

  observerForservicetitle.observe(myservicesTitle);

  const projectTitle = document.querySelector("#project-title");
  const myprojectTitle = projectTitle.querySelector("h2");

  const observerForprojecttitle = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          myprojectTitle.classList.add(
            "animate__animated",
            "animate__fadeInUp"
          );
        } else {
          myprojectTitle.classList.remove(
            "animate__animated",
            "animate__fadeInUp"
          );
        }
      });
    },
    { threshold: 0.3 }
  );

  observerForprojecttitle.observe(projectTitle);

  const contactTitle = document.querySelector("#contact-title");
  const mycontactTitle = contactTitle.querySelector("h2");

  const observerForcontacttitle = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          mycontactTitle.classList.add("animate__animated", "animate__bounce");
        } else {
          mycontactTitle.classList.remove(
            "animate__animated",
            "animate__bounce"
          );
        }
      });
    },
    { threshold: 0.3 }
  );

  observerForcontacttitle.observe(contactTitle);

  const skillsection = document.querySelector("#skills-section");
  const progressBars = document.querySelectorAll(".progress-bar");

  const observerForskill = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          progressBars.forEach((progressbar) => {
            // console.log(progressbar);
            let finalWidth = progressbar.getAttribute("aria-valuenow") + "%";
            progressbar.style.width = finalWidth;
          });
        } else {
          progressBars.forEach((progressbar) => {
            progressbar.style.width = "0";
          });
        }
      });
    },
    { threshold: 0.3 }
  );

  observerForskill.observe(skillsection);

  // start Footer Section
  const getyear = document.getElementById("getyear");
  const getfullyear = new Date().getFullYear();
  getyear.textContent = getfullyear;
  // End Footer Section
});

// back to top start
$(document).ready(function () {
  $(".btn-backtotop").hide();
  $(window).scroll(function () {
    let getscrollTop = $(this).scrollTop();
    // console.log(getscrollTop);
    if (getscrollTop >= 370) {
      $(".btn-backtotop").fadeIn(1000);
    } else {
      $(".btn-backtotop").fadeOut(1000);
    }
  });
});
// back to top end
