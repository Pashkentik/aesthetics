function openTab(evt, tabName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active_tab", "");
  }
  document.getElementById(tabName).style.display = "flex";
  evt.currentTarget.className += " active_tab";
}
document.getElementById("defaultOpen").click();


function dropdownSortBy() {
  document.getElementById("dropdown_sort").classList.toggle("visible");
}

function moreItemsShow() {
  document.getElementById("item_list").classList.toggle("more_items");
}
function moreItemsShowMain() {
  document
    .getElementById("bottom_view_content")
    .classList.toggle("more_items_main");
}

function showMenuMobile() {
  document.getElementById("mobileHeaderButton").classList.toggle("changeMobileButton");
  document.getElementById("mobileMenu").classList.toggle("mobileMenu_open");
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

function moreHistoryItems() {
  document.getElementById("dropdown_history").classList.toggle("more_history");
}
