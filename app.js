// toggle showmenu class when hamburger icon is clicked
document.querySelector("#menu").addEventListener("click", () => {
  document.querySelector("nav ul").classList.toggle("showmenu");
});

// active class
function beActive(id) {
  switch (id) {
    case 1:
      document.getElementById("home_link").style.color = "#4caf50";
      document.getElementById("about_link").style.color = "whitesmoke";
      document.getElementById("process_link").style.color = "whitesmoke";
      document.getElementById("testimonial_link").style.color = "whitesmoke";
      document.getElementById("contact_link").style.color = "whitesmoke";
      break;
    case 2:
      document.getElementById("home_link").style.color = "whitesmoke";
      document.getElementById("about_link").style.color = "#4caf50";
      document.getElementById("process_link").style.color = "whitesmoke";
      document.getElementById("testimonial_link").style.color = "whitesmoke";
      document.getElementById("contact_link").style.color = "whitesmoke";
      break;
    case 3:
      document.getElementById("home_link").style.color = "whitesmoke";
      document.getElementById("about_link").style.color = "whitesmoke";
      document.getElementById("process_link").style.color = "#4caf50";
      document.getElementById("testimonial_link").style.color = "whitesmoke";
      document.getElementById("contact_link").style.color = "whitesmoke";
      break;
    case 4:
      document.getElementById("home_link").style.color = "whitesmoke";
      document.getElementById("about_link").style.color = "whitesmoke";
      document.getElementById("process_link").style.color = "whitesmoke";
      document.getElementById("testimonial_link").style.color = "#4caf50";
      document.getElementById("contact_link").style.color = "whitesmoke";
      break;
    case 5:
      document.getElementById("home_link").style.color = "whitesmoke";
      document.getElementById("about_link").style.color = "whitesmoke";
      document.getElementById("process_link").style.color = "whitesmoke";
      document.getElementById("testimonial_link").style.color = "whitesmoke";
      document.getElementById("contact_link").style.color = "#4caf50";
      break;

    default: break;
  }
}
