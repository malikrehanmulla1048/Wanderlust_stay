const today = new Date();
const todayString = new Date(today.getTime() - today.getTimezoneOffset() * 60000)
    .toISOString()
    .slice(0, 10);

document.querySelectorAll(".booking-form").forEach((form) => {
    const checkIn = form.elements.checkIn;
    const checkOut = form.elements.checkOut;
    const estimate = form.querySelector(".estimate");
    checkIn.min = todayString;
    checkOut.min = todayString;

    checkIn.addEventListener("change", () => {
        checkOut.min = checkIn.value || todayString;
        if (checkOut.value && checkOut.value <= checkIn.value) {
            checkOut.value = "";
        }
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const start = new Date(`${checkIn.value}T00:00:00Z`);
        const end = new Date(`${checkOut.value}T00:00:00Z`);
        const nights = (end - start) / 86400000;

        if (!checkIn.value || !checkOut.value || nights <= 0) {
            estimate.textContent = "Choose a check-out date after your check-in date.";
            return;
        }

        const total = nights * Number(form.dataset.price);
        estimate.textContent = `${nights} night${nights === 1 ? "" : "s"} · Estimated total: ₹${total.toLocaleString("en-IN")}`;
    });
});
