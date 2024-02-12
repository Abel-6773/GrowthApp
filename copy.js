document.addEventListener("DOMContentLoaded", function () {
  const faqMain = document.querySelector(".faq-main");

  faqMain.addEventListener("click", function (e) {
    targetHeader = e.target.closest(".faq-header");

    if (!targetHeader) {
      return;
    }

    const targetGroup = targetHeader.parentElement;
    const targetIcon = targetHeader.querySelector("i");
    const targetBody = targetGroup.querySelector(".faq-body");

    targetBody.classList.toggle("displayed");
    targetIcon.classList.toggle("fa-plus");
    targetIcon.classList.toggle("fa-minus");

    const allFaqBodies = document.querySelectorAll(".faq-body");
    const allFaqIcons = faqMain.querySelectorAll("i");

    for (let faqBody of allFaqBodies) {
      if (faqBody !== targetBody) {
        faqBody.classList.remove("displayed");
      }
    }
    for (let faqIcon of allFaqIcons) {
      if (faqIcon !== targetIcon) {
        faqIcon.classList.remove("fa-minus");
        faqIcon.classList.add("fa-plus");
      }
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const hbIcon = document.querySelector(".hb-icon");
  const hbMenu = document.querySelector(".hb-menu");

  hbIcon.addEventListener("click", function () {
    hbMenu.classList.toggle("hb-menu-active");
    hbIcon.classList.toggle("hb-icon-active");
  });
});
