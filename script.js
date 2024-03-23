const icon = document.getElementById('icon');
const nav = document.getElementById('nav');
const navText = document.querySelectorAll('.custom-nav-text');
const activeNavText = document.querySelectorAll('.custom-active-nav-text');
const body = document.getElementById('body_id');
const footer = document.getElementById('footer');
const borderColor = document.querySelectorAll('.border');
const sosmedIcon = document.querySelectorAll('.sosmed-icon')

document.addEventListener('DOMContentLoaded', () => {
  const theme = localStorage.getItem('mode');
  if (theme === 'dark') {
    enableDarkMode();
  } else if (theme === 'light') {
    enableLightMode();
  }
});

const enableDarkMode = ()=> {
  if (icon.classList.contains("bi-brightness-high-fill")) {
    icon.classList.replace("bi-brightness-high-fill", "bi-moon-fill")
  }

  if (borderColor[0]) {
    console.log("border available")
    if (borderColor[0].classList.contains("border")) {
      borderColor.forEach((el) => 
        el.classList.replace("border-dark", "border-secondary")
      )
    }
  }

  nav.style.backgroundColor = "#112240";
  nav.style.color = "#8892B0";

  body.style.backgroundColor = "#0A192F";
  body.style.color = "#E0E0E0";

  navText.forEach((el) =>
    el.style.color = "#8892B0"
  );

  activeNavText.forEach((el) => 
    el.style.color = "#FFFFFF"
  );

  footer.style.backgroundColor = "#233554";

  sosmedIcon.forEach((el) => 
    el.style.color = "#FFFFFF"
  );

  localStorage.setItem('mode', 'dark')
}

const enableLightMode = ()=> {
  if (icon.classList.contains('bi-moon-fill')) {
    icon.classList.replace('bi-moon-fill', 'bi-brightness-high-fill')
  }

  nav.style.backgroundColor = "#F5F5F5";
  nav.style.color = "";

  body.style.backgroundColor = "";
  body.style.color = "";

  navText.forEach((el) =>
    el.style.color = ""
  );

  activeNavText.forEach((el) => {
    el.style.color = "black"
    el.style.fontWeight = "500"
  });

  footer.style.backgroundColor = "#F5F5F5";

  sosmedIcon.forEach((el) => 
    el.style.color = "black"
  );

  console.log('light mode..')
  localStorage.setItem('mode', 'light');
}

function switchMode() {
  const mode = localStorage.getItem('mode');

  mode == 'dark' ? enableLightMode() : enableDarkMode();
}