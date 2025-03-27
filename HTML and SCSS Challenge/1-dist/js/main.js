    // Left Sidebar
    const sidebar = document.querySelector('.nav-sidebar');
    const sidebarToggle = sidebar.querySelector('.arrow-icon');
    const overlay = document.querySelector('.overlay');

    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('expanded');
        overlay.classList.toggle('active');
    });

    // Right Sidebar
    const rightSidebar = document.getElementById("rightSidebar");
    const sidebarToggleBtn = document.querySelector(".sidebar-toggle-btn");
    const arrowIcon = sidebarToggleBtn.querySelector(".arrow-icon");
    const content = document.querySelector(".container");

    sidebarToggleBtn.addEventListener("click", () => {
        rightSidebar.classList.toggle("expanded");
        sidebarToggleBtn.classList.toggle("moved");
        arrowIcon.classList.toggle("rotated");
        content.classList.toggle("shifted");
    });

    // Advanced Filters Dropdown
    const advancedFiltersBtn = document.querySelector('.advanced-filters');
    const advancedFiltersDropdown = document.querySelector('.advanced-filters-dropdown');

    advancedFiltersBtn.addEventListener('click', () => {
        advancedFiltersDropdown.classList.toggle('active');
    });