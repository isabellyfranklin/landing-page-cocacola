const btnTopo = document.getElementById("btnTopo");

  btnTopo.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

 function clickmenu() {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("ativo");
}