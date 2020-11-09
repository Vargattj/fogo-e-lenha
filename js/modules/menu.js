export default function iniciarMenu() {
  let show = true;

  const sideMenu = document.querySelector(".side-menu");
  const menuToggle = document.querySelector(".menu");

  menuToggle.addEventListener("click", (e) => {
    e.preventDefault();
    sideMenu.classList.toggle("on", show);
    show = !show;
  });
}
