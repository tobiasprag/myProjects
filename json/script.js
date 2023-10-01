const menuButton = document.querySelector(".menu__icon");
const menu = document.querySelector(".links");
const menuLinks = document.querySelectorAll(".link");
const overflow = document.querySelector("body");
const navBar = document.querySelector('.nav')
const mainArea = document.querySelector('.main')


window.addEventListener('scroll', () => { 
if (mainArea.getBoundingClientRect().top < 0) {
    navBar.classList.add('navOnScroll')
  } else {
    navBar.classList.remove('navOnScroll')
  }
  
})





menuButton.addEventListener("click", () => {
  menu.classList.toggle("show-menu");
  menu.classList.toggle("menu-open");
  overflow.style.overflow = "hidden";

  for (i = 0; i < menuLinks.length; i++) {
    menuLinks[i].classList.toggle("links-open");
  }
});

fetch("students.json")
  .then((response) => response.json())
  .then((data) => {
    const classesList = document.getElementById("classes");

    data.classes.forEach((classData) => {
      const classWrapper = document.createElement("div");
      classWrapper.classList.add("class");

      const className = document.createElement("h2");
      className.textContent = classData.className;

      classWrapper.appendChild(className);

      const studentsList = document.createElement("ul");
      classData.students.forEach((student) => {
        const studentWrapper = document.createElement("li");
        studentWrapper.classList.add("student");

        const name = document.createElement("a");

        name.href =
          "https://" +
          student.studentName.replace(/\s/g, "") +
          "." +
          student.studentURL;
        name.textContent = student.studentName + " " + student.studentURL;
        studentWrapper.appendChild(name);

        studentsList.appendChild(studentWrapper);
      });

      classWrapper.appendChild(studentsList);
      classesList.appendChild(classWrapper);
    });
  })
  .catch((error) => console.error(error));



