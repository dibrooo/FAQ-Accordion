var accordionElement = document.getElementsByClassName("accordion");
var accordionTitleElement = document.getElementsByClassName("accordion-title");
var panelElement = document.getElementsByClassName("panel");
var plusIconSrc = "./assets/images/icon-plus.svg";
var minusIconSrc = "./assets/images/icon-minus.svg";

for (let i = 0; i < accordionTitleElement.length; i++) {
  accordionTitleElement[i].addEventListener("click", () => {
    var panel = panelElement[i];
    var icon = accordionTitleElement[i].firstElementChild;
    var accordion = accordionElement[i];

    /* Toggle between hiding and showing the active panel */
    if (panel.style.display === "block") {
      panel.style.display = "none";
      icon.setAttribute("src", plusIconSrc);
      accordion.setAttribute("aria-expanded", "false");
    } else {
      panel.style.display = "block";
      icon.setAttribute("src", minusIconSrc);
      accordion.setAttribute("aria-expanded", "true");
    }
  });
}
