export default function iniciarMenu() {
  let show = true;

  const sideMenu = document.querySelector(".side-menu");
  const menuToggle = document.querySelector(".menu");

  menuToggle.addEventListener("click", (e) => {
    // document.body.style.overflow = show ? "hidden" : "initial";
    e.preventDefault();
    console.log('a');
    sideMenu.classList.toggle("on", show);
    show = !show;
  });

  // categorias.addEventListener("click", (e) => {
  //   if (e.target === categorias) {
  //     sideMenu.classList.toggle("on", show);
  //   }
  //   document.body.style.overflow = show ? "hidden" : "initial";

  //   show = !show;
  // });
}
