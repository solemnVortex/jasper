document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(TextPlugin);
  gsap.registerPlugin(ScrollTrigger);
  smoothScroll();
  typingAnimation();

  const heroTimeline = gsap.timeline({ ease: "power1.in", duration: 0.2 });
  heroTimeline
    .to(".greeting-cover", {
      y: 100,
      delay: 0.8,
    })
    .fromTo(".name", { opacity: 0 }, { opacity: 1 })
    .fromTo(".introduction", { opacity: 0 }, { opacity: 1 })
    .fromTo(".cta", { y: -100, opacity: 0 }, { y: 0, opacity: 1 })
    .fromTo(".contacts-cover", { x: "105%" }, { x: 0 })
    .to(".contacts-cover", { scaleX: 0 })
    .from(".contacts", { borderLeftColor: "transparent" })
    .fromTo(".contacts p", { opacity: 0 }, { opacity: 1 })
    .fromTo(
      ".section-1 .scroll-down-guide > div",
      { opacity: 0 },
      { opacity: 1 }
    )
    .to(".section-1 .absolute-scroll", {
      repeat: -1,
      yoyo: true,
      duration: 1,
      text: "Scroll",
      ease: "bounce.in",
    });

  const aboutMeTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#section-2",
      start: "20% center",
      end: "bottom center",
      duration: 0.2,
      toggleActions: "play reverse play reverse",
    },
  });

  aboutMeTimeline
    .fromTo(
      ".about-me-title",
      {
        yoyo: true,
        text: "_",
        color: "transparent",
      },
      {
        yoyo: true,
        text: "About Me",
        color: "#000",
      }
    )
    .from(".about-highlight", {
      x: -1000,
      ease: "elastic.out",
    })
    .fromTo(
      ".rest-intro",
      {
        opacity: 0,
      },
      {
        opacity: 1,
      }
    )
    .fromTo(
      ".section-2 .scroll-down-guide > div",
      { opacity: 0 },
      { opacity: 1 }
    )
    .to(".section-2 .absolute-scroll", {
      repeat: -1,
      yoyo: true,
      duration: 1,
      text: "Scroll",
      ease: "bounce.in",
    });

  const projects = [
    {
      title: "P-Media Landing Page",
      description:
        "A mobile responsive landing page. This project taught me how CSS selectors are used to implement simple interactivity within the page.",
      stack: ["HTML", "CSS"],
      type: "Front End",
      link: "https://solemnvortex.github.io/p-media/",
      wideImage: "images/pmedia-wide.webp",
      mockImage: "images/pmedia-mock.webp",
    },
    {
      title: "Login Page",
      description: "A simple login page that has animated input fields.",
      stack: ["HTML", "CSS"],
      type: "Front End",
      link: "https://solemnvortex.github.io/simple-login/",
      wideImage: "images/login-wide.webp",
      mockImage: "images/login-mock.webp",
    },
    {
      title: "ATM Interface",
      description:
        "This project is not meant to show a proper login system, but it demonstrates how content can be dynamically changed through JavaScript.",
      stack: ["HTML", "CSS", "JAVASCRIPT"],
      type: "Front End",
      link: "https://solemnvortex.github.io/atm-ui/",
      wideImage: "images/ATM-wide.webp",
      mockImage: "images/ATM-mock.webp",
    },
    {
      title: "Basic Calculator",
      description:
        "A basic calculator that showcases how to manipulate user inputs.",
      stack: ["HTML", "CSS", "JAVASCRIPT"],
      type: "Front End",
      link: "https://solemnvortex.github.io/basic-calculator/",
      wideImage: "images/calc-wide.webp",
      mockImage: "images/calc-mock.webp",
    },
    {
      title: "Pixel Editor",
      description:
        'A simple and fun editor, select a color and fill the "Pixels".',
      stack: ["HTML", "CSS", "JAVASCRIPT"],
      type: "Front End",
      link: "https://solemnvortex.github.io/pixel-editor/",
      wideImage: "images/pixelEdtr-wide.webp",
      mockImage: "images/pixelEdtr-mock.webp",
    },
    {
      title: "Simple E-commerce",
      description:
        "This project demonstrates the basic usage of the Fetch API in Javascript.",
      stack: ["HTML", "CSS", "JAVASCRIPT"],
      type: "Front End",
      link: "https://solemnvortex.github.io/simple-ecommerce/pages/home.html",
      wideImage: "images/simpleEcommerce-wide.webp",
      mockImage: "images/simpleEcommerce-mock.webp",
    },
    {
      title: "Form Builder",
      description:
        "A basic form builder that can be used as a frontend for a backend API. It demonstrates a usage of the contentEditable attribute in HTML.",
      stack: ["HTML", "CSS", "JAVASCRIPT"],
      type: "Front End",
      link: "https://solemnvortex.github.io/simple-form-builder/",
      wideImage: "images/simpleFormBuilder-wide.webp",
      mockImage: "images/simpleFormBuilder-mock.webp",
    },
    {
      title: "Simple Quiz App",
      description:
        "A static quiz app that evaluates the user answers after a submit. This project is built to partially imitate Microsoft form.",
      stack: ["HTML", "CSS", "JAVASCRIPT"],
      type: "Front End",
      link: "https://solemnvortex.github.io/simple-quiz/",
      wideImage: "images/simpleQuizApp-wide.webp",
      mockImage: "images/simpleQuizApp-mock.webp",
    },
    {
      title: "Employee Registration",
      description:
        "A registration form that inserts data into the database. The app has basic input validation.",
      stack: ["HTML", "CSS", "JAVASCRIPT", "PHP"],
      type: "Full Stack",
      link: "http://employee-registration.infinityfreeapp.com/",
      wideImage: "images/employeeRegistration-wide.webp",
      mockImage: "images/employeeRegistration-mock.webp",
    },
  ];
  let projectCount = 0;

  const projectControl = document.querySelector(".proj-control");

  for (let i = projects.length; i > 0; i--) {
    const btn = document.createElement("button");
    btn.value = i;
    btn.type = "button";
    projectControl.prepend(btn);
  }

  const personalProjectTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#project-section",
      start: "top center",
      end: "bottom center",
      duration: 0.3,
      toggleActions: "play reverse play reverse",
    },
  });

  personalProjectTimeline.to(".personal-proj-cover", { scaleX: 0 }).fromTo(
    ".proj-intro",
    {
      y: -50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
    }
  );

  changeContent(projectCount, projects, personalProjectTimeline);
  activePrjCtrlBtn(projectCount + 1);

  document.getElementById("next-btn").addEventListener("click", (e) => {
    e.preventDefault();
    projectCount++;

    if (projectCount >= projects.length) {
      projectCount = 0;
      changeContent(projectCount, projects, gsap);
    } else {
      changeContent(projectCount, projects, gsap);
    }

    activePrjCtrlBtn(projectCount + 1);
  });

  document.querySelectorAll(".proj-control > button").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      projectCount = Number(e.target.value) - 1;

      changeContent(projectCount, projects, gsap);
      activePrjCtrlBtn(projectCount + 1);
    });
  });

  gsap
    .timeline({
      scrollTrigger: {
        trigger: "#project-section",
        start: "top center",
        end: "30% center",
        duration: 0.3,
        toggleActions: "play reverse play reverse",
        scrub: 1,
      },
    })
    .fromTo(".top-bar", { scaleX: 0 }, { scaleX: 1 });

  const certificates = [
    "images/cert-1-min.jpg",
    "images/cert-2-min.jpg",
    "images/cert-3-min.jpg",
    "images/cert-4-min.jpg",
  ];

  gsap
    .timeline({ duration: 3, repeat: -1 })
    .to(".cert-main", {
      opacity: 0,
      y: -100,
    })
    .set(".cert-main", {
      attr: {
        src: certificates[1],
      },
    })
    .to(".cert-main", {
      opacity: 1,
      y: 0,
    })
    .to(".cert-main", {
      delay: 2,
      opacity: 0,
      y: -100,
    })
    .set(".cert-main", {
      attr: {
        src: certificates[2],
      },
    })
    .to(".cert-main", {
      opacity: 1,
      y: 0,
    })
    .to(".cert-main", {
      delay: 2,
      opacity: 0,
      y: -100,
    })
    .set(".cert-main", {
      attr: {
        src: certificates[3],
      },
    })
    .to(".cert-main", {
      opacity: 1,
      y: 0,
    })
    .to(".cert-main", {
      delay: 2,
      opacity: 0,
      y: -100,
    })
    .set(".cert-main", {
      attr: {
        src: certificates[0],
      },
    })
    .to(".cert-main", {
      opacity: 1,
      y: 0,
    });
});

function smoothScroll() {
  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  document.getElementById("read-more").addEventListener("click", (e) => {
    e.preventDefault();
    lenis.scrollTo("#section-2");
  });

  document.getElementById("view-work").addEventListener("click", (e) => {
    e.preventDefault();
    lenis.scrollTo("#project-section");
  });
}

function typingAnimation() {
  gsap.to("#php-typed", {
    repeat: -1,
    yoyo: true,
    repeatDelay: 0.5,
    duration: 1,
    text: "Welcome!",
  });
}

function changeContent(count, array, tl) {
  const projTitle = document.querySelector("#proj-title-link");
  const projLink = document.querySelector(".proj-link");
  const projType = document.querySelector(".proj-type");
  const projDesc = document.querySelector(".card-desc");
  const technologiesListElement = document.getElementById("technologies");
  const mock = document.querySelector(".mockup");
  const imageWide = document.getElementById("img-wide");

  document.querySelector("#proj-title-link > span").textContent =
    array[count].title;

  projTitle.setAttribute("href", array[count].link);
  projLink.setAttribute("href", array[count].link);
  projType.textContent = array[count].type;
  projDesc.textContent = array[count].description;

  technologiesListElement.innerHTML = "";

  array[count].stack.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;

    technologiesListElement.appendChild(li);
  });

  mock.setAttribute("src", array[count].mockImage);
  imageWide.setAttribute("src", array[count].wideImage);

  tl.fromTo(".proj-sec-content", { y: 50, opacity: 0 }, { y: 0, opacity: 1 });
}

function activePrjCtrlBtn(count) {
  document.querySelectorAll(".proj-control > button").forEach((btn) => {
    if (btn.value != count) {
      btn.style.backgroundColor = "transparent";
    } else {
      btn.style.backgroundColor = "#000";
    }
  });
}
