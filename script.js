// ADD ACTIVE CLASS TO LINK ON CLICK
const navUL = document.getElementById("nav-ul");
const navLi = navUL.getElementsByClassName("nav-li");

for (let i = 0; i < navLi.length; i++) {
      navLi[i].addEventListener("click", function() {
      const current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }

  // SLIDE THE CONTENT SECTION ON LINK CLICK
  let links = document.querySelectorAll(".link");
  let allContent = document.querySelectorAll(".content");
  
  if (window.innerWidth > 850) {
      for (let i = 0; i < links.length; i++) {
          links[i].addEventListener("click", (e) => {
            e.preventDefault();

            const filter = e.target.dataset.filter;
            console.log(filter);

            allContent.forEach((content) => {
              if (filter === "content") {
                content.style.display = "block"
              } else if (content.classList.contains(filter)) {
                content.style.display = "block"
              } else {
                content.style.display = "none"
              }

            })
          });
      }
  }

  // SMOOTH SCROLL FOR MOBILE AND TABLET
  if (window.innerWidth < 850) {
    links = document.querySelectorAll(".nav-li a");

    for (const link of links) {
      link.addEventListener("click", smoothScroll);
    }

    function smoothScroll(e) {
      e.preventDefault();
      const href = this.getAttribute("href");

      document.querySelector(href).scrollIntoView({
        behavior: "smooth"
      });
    }



  }




  // TEXT EFFECT
  // TEXT ARRAY
  const dataText = ["Web Developer.", "Blogger", "Content Developer", "Developer Advocate"];
  document.addEventListener("DOMContentLoaded", typingEffect);

  function typingEffect() {

  function typeWriter(text, i, fnCallback) {
    if (i < (text.length)) {
      document.querySelector(".text-effect").innerHTML = text.substring(0, i+1) + "<span class='effect'></span>";

      // SET DELAY BEFORE NEXT CHARACTER
      setTimeout(function() {
        typeWriter(text, i+1, fnCallback)
      }, 100)
    } else if (typeof fnCallback == "function") {
      setTimeout(fnCallback, 700);
    } 
  }

  // START Typing
  function startTextAnimation(i) {
    if (typeof dataText[i] == "undefined") {
      setTimeout(function() {
        startTextAnimation(0);
      }, 2000)
    }
    if (i < dataText[i].length) {
      typeWriter(dataText[i], 0, function() {
        startTextAnimation(i + 1);
      });
    }
    
  }
  startTextAnimation(0);
}