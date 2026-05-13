// نجيب زر فتح القائمة
const menuOpenButton = document.querySelector("#menu-open-button");
// نجيب زر إغلاق القائمة
const menuCloseButton = document.querySelector("#menu-close-button");

// عند الضغط على زر الفتح، تظهر القائمة
menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
});

// عند الضغط على زر الإغلاق، تختفي القائمة
menuCloseButton.addEventListener("click", () => {
    document.body.classList.remove("show-mobile-menu");
});