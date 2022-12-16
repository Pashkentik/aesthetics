function dropdownSortBy() {
  document.getElementById("dropdown_sort").classList.toggle("visible");
}
function dropdownSortByFilter() {
  document.getElementById("dropdown_sort").classList.toggle("visible_filter");
  document.getElementById("dropdown_filter").classList.toggle("filter_on");
}
function showMenuMobile() {
  document.getElementById("mobileHeaderButton").classList.toggle("changeMobileButton");
  document.getElementById("mobileMenu").classList.toggle("mobileMenu_open");
}

function moreItemsShow() {
  document.getElementById("item_list").classList.toggle("more_items");
}
function moreItemsShowMain() {
  document
    .getElementById("bottom_view_content")
    .classList.toggle("more_items_main");
}

function moreReviewsShow() {
  document.getElementById("more_reviews").classList.toggle("more_reviews");
}
//Get the button
let mybutton = document.getElementById("scrollToTop");

// When the user scrolls down 200px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    mybutton.style.visibility = "visible";
    mybutton.style.opacity = "1";
  } else {
    mybutton.style.visibility = "hidden";
    mybutton.style.opacity = "0";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.onclick = function (event) {
  if (!event.target.matches(".sort_by")) {
    var dropdowns = document.getElementsByClassName("sort_group");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("visible")) {
        openDropdown.classList.remove("visible");
      }
    }
  }
};

class ItcAccordion {
  constructor(target, config) {
    this._el =
      typeof target === "string" ? document.querySelector(target) : target;
    const defaultConfig = {
      alwaysOpen: true,
    };
    this._config = Object.assign(defaultConfig, config);
    this.addEventListener();
  }

  addEventListener() {
    this._el.addEventListener("click", (e) => {
      const elHeader = e.target.closest(".filter_title");
      if (!elHeader) {
        return;
      }
      if (!this._config.alwaysOpen) {
        const elOpenItem = this._el.querySelector(".filter_show");
        if (elOpenItem) {
          elOpenItem !== elHeader.parentElement
            ? elOpenItem.classList.toggle("filter_show")
            : null;
        }
      }
      elHeader.parentElement.classList.toggle("filter_show");
    });
  }
}

new ItcAccordion("#accordion_1");
