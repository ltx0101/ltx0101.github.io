document.addEventListener("DOMContentLoaded", function () {
    const projects = [
        {
            title: "SlimBrave",
            description: "Debloat Brave for faster performance and smoother browsing.",
            repoUrl: "https://github.com/ltx0101/SlimBrave",
            imageUrl: "images/slimbrave.webp"
        },
        {
            title: "StealthChrome",
            description: "Chrome browser modification for enhanced privacy and stealth browsing.",
            repoUrl: "https://github.com/ltx0101/StealthChrome",
            imageUrl: "images/stealthchrome.webp"
        },
        {
            title: "SlimFox",
            description: "Modify Firefox to optimize privacy, performance and other unwanted features.",
            repoUrl: "https://github.com/ltx0101/SlimFox",
            imageUrl: "images/slimfox.webp"
        },
        {
            title: "NanoCord",
            description: "NanoCord is a minimalist and optimized way to use Discord.",
            repoUrl: "https://github.com/ltx0101/NanoCord",
            imageUrl: "images/nanocord.webp"
        },
        {
            title: "GOS",
            description: "Tune your PC for smoother, faster and better gaming.",
            repoUrl: "https://github.com/ltx0101/GOS",
            imageUrl: "images/gos.webp"
        },
        {
            title: "MV2Switch",
            description: "Manage the Manifest V2 extension setting in Chromium browsers.",
            repoUrl: "https://github.com/ltx0101/MV2Switch",
            imageUrl: "images/github.webp"
        },
        {
            title: "DelayScope",
            description: "Script that measures the system responsiveness in Windows.",
            repoUrl: "https://github.com/ltx0101/DelayScope",
            imageUrl: "images/github.webp"
        },
        {
            title: "NVCacheCleaner",
            description: "Clean up NVIDIA and shader cache files in Windows.",
            repoUrl: "https://github.com/ltx0101/NVCacheCleaner",
            imageUrl: "images/github.webp"
        }
    ];
    const projectsGrid = document.querySelector(".projects-grid");
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = themeToggle.querySelector("i");
    function setTheme(theme) {
        const isDark = theme === "dark";
        if (isDark) {
            document.documentElement.setAttribute("data-theme", "dark");
        } else {
            document.documentElement.removeAttribute("data-theme");
        }
        themeIcon.className = `fas fa-${isDark ? "sun" : "moon"}`;
        localStorage.setItem("theme", theme);
    }
    function loadTheme() {
        const savedTheme = localStorage.getItem("theme");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        if (savedTheme) setTheme(savedTheme);
        else if (prefersDark) setTheme("dark");
    }
    themeToggle.addEventListener("click", () => {
        const currentTheme = document.documentElement.hasAttribute("data-theme") ? "light" : "dark";
        setTheme(currentTheme);
    });
    loadTheme();
    projects.forEach(() => {
        const skeleton = document.createElement("div");
        skeleton.className = "project-card skeleton";
        skeleton.innerHTML = `
            <div class="project-image skeleton-box"></div>
            <div class="project-content">
                <div class="skeleton-text title"></div>
                <div class="skeleton-text body"></div>
                <div class="skeleton-text body short"></div>
                <div class="skeleton-btn"></div>
            </div>
        `;
        projectsGrid.appendChild(skeleton);
    });
    setTimeout(() => {
        projectsGrid.innerHTML = "";
        projects.forEach(project => {
            const card = document.createElement("div");
            card.className = "project-card";
            card.innerHTML = `
                <div class="project-image">
                    <img src="${project.imageUrl}" alt="${project.title}" loading="lazy" width="300" height="200">
                </div>
                <div class="project-content">
                    <h2>${project.title}</h2>
                    <p>${project.description}</p>
                    <div class="project-links">
                        <a href="${project.repoUrl}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-github"></i> View on GitHub
                        </a>
                    </div>
                </div>
            `;
            projectsGrid.appendChild(card);
        });
    }, 0);
});