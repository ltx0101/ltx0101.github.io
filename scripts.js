document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        {
            title: "SlimBrave",
            description: "Debloat Brave for faster performance and smoother browsing.",
            repoUrl: "https://github.com/ltx0101/SlimBrave",
            imageUrl: "images/slimbrave.png"
        },
        {
            title: "StealthChrome",
            description: "Chrome browser modification for enhanced privacy and stealth browsing.",
            repoUrl: "https://github.com/ltx0101/StealthChrome",
            imageUrl: "images/stealthchrome.png"
        },
        {
            title: "SlimFox",
            description: "Modify Firefox to optimize privacy, performance and other unwanted features.",
            repoUrl: "https://github.com/ltx0101/SlimFox",
            imageUrl: "images/slimfox.png"
        },
		{
            title: "NanoCord",
            description: "NanoCord is a minimalist and optimized way to use Discord.",
            repoUrl: "https://github.com/ltx0101/NanoCord",
            imageUrl: "images/nanocord.png"
        },
        {
            title: "GOS",
            description: "Tune your PC for smoother, faster and better gaming.",
            repoUrl: "https://github.com/ltx0101/GOS",
            imageUrl: "images/gos.png"
        },
        {
            title: "MV2Switch",
            description: "Manage the Manifest V2 extension setting in Chromium browsers.",
            repoUrl: "https://github.com/ltx0101/MV2Switch",
            imageUrl: "images/github.png"
        },
		{
            title: "DelayScope",
            description: "Script that measures the system responsiveness in Windows.",
            repoUrl: "https://github.com/ltx0101/DelayScope",
            imageUrl: "images/github.png"
        },
        {
            title: "NVCacheCleaner",
            description: "Clean up NVIDIA and shader cache files in Windows.",
            repoUrl: "https://github.com/ltx0101/NVCacheCleaner",
            imageUrl: "images/github.png"
        }
    ];

    const projectsGrid = document.querySelector('.projects-grid');
    const themeToggle = document.getElementById('theme-toggle');
    const icon = themeToggle.querySelector('i');

    // Theme management
    function setTheme(theme) {
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            icon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
            icon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('theme', 'light');
        }
    }

    // Initialize theme
    function initializeTheme() {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedTheme) {
            setTheme(savedTheme);
        } else if (prefersDark) {
            setTheme('dark');
        }
    }

    // Toggle theme
    themeToggle.addEventListener('click', () => {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        setTheme(isDark ? 'light' : 'dark');
    });

    // Initialize theme on load
    initializeTheme();

    // Render projects
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.imageUrl}" alt="${project.title}" loading="lazy">
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
        
        projectsGrid.appendChild(projectCard);
    });
});