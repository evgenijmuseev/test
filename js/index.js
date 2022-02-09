const selectHeader = document.querySelector(".select__header"),
        selectBody = document.querySelector(".select__body"),
        selectIcon = document.querySelector(".select__icon");

selectHeader.addEventListener("click", () => {
    selectBody.classList.toggle("select-body__active");
    selectIcon.classList.toggle("select-icon__rotate");

    document.addEventListener('mousedown', (e) => {
        if (e.target.closest('.select__body') === null) {
            selectBody.classList.remove("select-body__active");
            selectIcon.classList.remove("select-icon__rotate");
        }
    });
});

