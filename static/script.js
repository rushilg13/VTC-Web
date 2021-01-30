// Load settings from localStorage
let theme = localStorage.getItem("theme");
changeTheme(theme);

// Change Theme
function changeTheme(theme) {
  let body = document.querySelector("body");
  let element = document.querySelector("#switchTheme");
  switch (theme) {
    case "dark":
      element.classList.remove("fa-moon");
      element.classList.add("fa-lightbulb");
      localStorage.setItem("theme", "dark");
      body.classList.add("dark");
      break;
    case "light":
      element.classList.remove("fa-lightbulb");
      element.classList.add("fa-moon");
      localStorage.setItem("theme", "light");
      body.classList.remove("dark");
      break;
  }
}
document.querySelector("#switchTheme").addEventListener("click", (event) => {
  let body = document.querySelector("body");
  if (body.classList.contains("dark")) {
    changeTheme("light");
  } else {
    changeTheme("dark");
  }
});

// Refresh
document.querySelector("#refresh").addEventListener("click", (event) => {
  location.reload();
});

// FullScreen Change
document.querySelector("#expand").addEventListener("click", (event) => {
  let element = event.target;
  let page = document.documentElement;

  if (element.dataset.state == "closed") {
    if (page.requestFullscreen) {
      page.requestFullscreen();
    } else if (page.webkitRequestFullscreen) {
      /* Safari */
      page.webkitRequestFullscreen();
    } else if (page.msRequestFullscreen) {
      /* IE11 */
      page.msRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      /* IE11 */
      document.msExitFullscreen();
    }
  }
});
document.addEventListener("fullscreenchange", (event) => {
  let element = document.querySelector("#expand");
  if (document.fullscreenElement) {
    element.dataset.state = "opened";
    element.classList.remove("fa-expand");
    element.classList.add("fa-compress");
  } else {
    element.dataset.state = "closed";
    element.classList.add("fa-expand");
    element.classList.remove("fa-compress");
  }
});
