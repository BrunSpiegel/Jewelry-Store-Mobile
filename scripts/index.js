function constructTopInformatives(json) {
  const $wrapper = document.querySelector(".header__top-informatives--wrapper");

  for (const completeText of json) {
    $wrapper.innerHTML += `
     <span class="header__top-informatives--text${
       completeText.firstBold ? "-strong" : ""
     }">
       ${completeText.text} 
       <span class="header__top-informatives--text${
         completeText.firstBold === false ? "-strong" : "-margin"
       }">
         ${completeText.bold}
      </span>
     </span>
     `;
  }
}

function topInformatives() {
  fetch("../mocks/TOP_INFORMATIVES.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      constructTopInformatives(json);
    });
}

function constructMenuDesktop(json) {
  let structureMenu = "";

  const $containerMenu = document.querySelector(".header__menu");

  for (const menu of json) {
    structureMenu += `<div class="header__menu-wrapper">
    <a href="${menu.url}" class="header__menu-department">${menu.name}</a>
  </div>`;
  }

  $containerMenu.innerHTML = structureMenu;
}

function requestMenuDesktop() {
  fetch("../mocks/MENU.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      constructMenuDesktop(json.menu);
    });
}

// topInformatives();
// requestMenuDesktop();

function handleToggleMenuMobile() {
  const $menuMobile = document.querySelector(".header__menu-hamburger");
  const $estructureMenuMob = document.querySelector(".header__menu-mobile");
  const $closeMenuIconX = document.querySelector(".close-menu");
  const $shadowMenuMobile = document.querySelector(".shadow");
  $menuMobile.addEventListener("click", function () {
    $estructureMenuMob.classList.toggle("active");
  });

  $closeMenuIconX.addEventListener("click", function () {
    $estructureMenuMob.classList.remove("active");
  });

  $shadowMenuMobile.addEventListener("click", function() {
    $estructureMenuMob.classList.remove("active")
  })
}

handleToggleMenuMobile();
