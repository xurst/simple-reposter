document.addEventListener("DOMContentLoaded", function () {
  // Inject sidebar HTML into the document
  const sidebarHTML = `
    <div class="settings-container">
      <button class="settings-toggle">
        <i class="fas fa-user"></i>
      </button>
      <div class="settings-panel">
        <div class="settings-content">
          <div class="settings-category">Main</div>
          <button class="home-button">
            <i class="fab fa-instagram"></i> link instagram
          </button>
          <button class="debug-button">
            <i class="fab fa-youtube"></i> link youtube
          </button>
                    <button class="debug-button">
            <i class="fab fa-tiktok"></i> link tiktok
        </div>
      </div>
    </div>
    `;
  document.body.insertAdjacentHTML("afterbegin", sidebarHTML);

  // Sidebar functionality
  const settingsToggle = document.querySelector(".settings-toggle");
  const settingsPanel = document.querySelector(".settings-panel");
  const SIDEBAR_STATE_KEY = "sidebarState";

  function saveSidebarState(isOpen) {
    localStorage.setItem(
      SIDEBAR_STATE_KEY,
      JSON.stringify({
        isOpen: isOpen,
        timestamp: new Date().getTime(),
      })
    );
  }

  function loadSidebarState() {
    const savedState = localStorage.getItem(SIDEBAR_STATE_KEY);
    if (savedState) {
      const state = JSON.parse(savedState);
      if (state.isOpen) {
        settingsToggle.classList.add("active");
        settingsPanel.classList.add("active");
      }
    }
  }

  function toggleSettings() {
    settingsToggle.classList.toggle("active");
    settingsPanel.classList.toggle("active");
    saveSidebarState(settingsPanel.classList.contains("active"));
  }

  settingsToggle.addEventListener("click", toggleSettings);
  loadSidebarState();
});
