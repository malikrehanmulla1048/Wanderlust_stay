const deleteDialog = document.querySelector(".delete-dialog");
const openDeleteDialogButton = document.querySelector("[data-open-delete-dialog]");
const closeDeleteDialogButton = document.querySelector("[data-close-delete-dialog]");

if (deleteDialog && openDeleteDialogButton && closeDeleteDialogButton) {
    openDeleteDialogButton.addEventListener("click", () => {
        deleteDialog.showModal();
    });

    closeDeleteDialogButton.addEventListener("click", () => {
        deleteDialog.close();
    });
}
