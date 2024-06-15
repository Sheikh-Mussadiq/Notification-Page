const readAllBtn = document.getElementById("mark-all-as-read");
const notificationsCount = document.getElementById("notifications-count");
const notifications = document.querySelectorAll(".notification");

readAllBtn.addEventListener("click", () => {
    notifications.forEach((notification) => {
        notification.classList.remove("unread");
        notification.querySelector(".red-dot").style.display = "none";
        notificationsCount.innerHTML = "0";
    });
});
