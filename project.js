const projectTabBtns = document.querySelectorAll(".project-tab-item");
const projectGridItems = document.querySelectorAll(".project-grid-item");



projectTabBtns.forEach((btn) => {

    btn.addEventListener("click", function () {
      projectTabBtns.forEach((btn) =>
        btn.classList.remove("project-tab-item-active")
      );
      this.classList.add("project-tab-item-active");
  
      projectGridItems.forEach((item) => {
        if (item.classList.contains(btn.id)) {
          item.classList.remove("hide");
        } else {
          item.classList.add("hide");
        }
      });
    });
  });
  
  console.log('hello');