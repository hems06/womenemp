document.addEventListener("DOMContentLoaded", function () {
    const applications = [
        { id: 1, name: "John Doe", job: "Software Developer", status: "pending" },
        { id: 2, name: "Alice Smith", job: "UI/UX Designer", status: "pending" },
        { id: 3, name: "David Johnson", job: "Backend Developer", status: "accepted" },
        { id: 4, name: "Emma Brown", job: "Data Analyst", status: "rejected" }
    ];

    const applicationsList = document.getElementById("applications-list");

    function renderApplications(filter) {
        applicationsList.innerHTML = ""; // Clear list

        applications.forEach(applicant => {
            if (filter !== "all" && applicant.status !== filter) return;

            const appCard = document.createElement("div");
            appCard.classList.add("application-card");
            appCard.innerHTML = `
                <div class="details">
                    <h3>${applicant.name}</h3>
                    <p>Applied for: ${applicant.job}</p>
                    <p>Status: <span class="${applicant.status}">${applicant.status.toUpperCase()}</span></p>
                </div>
                ${applicant.status === "pending" ? `
                    <button class="accept-btn" onclick="updateStatus(${applicant.id}, 'accepted')">Accept</button>
                    <button class="reject-btn" onclick="updateStatus(${applicant.id}, 'rejected')">Reject</button>
                ` : ""}
            `;
            applicationsList.appendChild(appCard);
        });
    }

    window.updateStatus = function (id, newStatus) {
        const index = applications.findIndex(app => app.id === id);
        if (index !== -1) {
            applications[index].status = newStatus;
            renderApplications("all");
        }
    };

    window.filterApplications = function (filter) {
        renderApplications(filter);
    };

    renderApplications("all"); // Initial render
});
