document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        {
            title: "SlimBrave",
            description: "A lightweight version of Brave browser with essential features.",
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
            description: "Lightweight Firefox variant optimized for performance.",
            repoUrl: "https://github.com/ltx0101/SlimFox",
            imageUrl: "images/slimfox.png"
        },
		{
            title: "NanoCord",
            description: "Minimalist Discord client with reduced resource usage.",
            repoUrl: "https://github.com/ltx0101/NanoCord",
            imageUrl: "images/nanocord.png"
        },
        {
            title: "GOS",
            description: "General Operating System utilities and tools.",
            repoUrl: "https://github.com/ltx0101/GOS",
            imageUrl: "images/gos.png"
        },
        {
            title: "MV2Switch",
            description: "Tool for managing Manifest V2/V3 extensions.",
            repoUrl: "https://github.com/ltx0101/MV2Switch",
            imageUrl: "images/github.png"
        },
		{
            title: "DelayScope",
            description: "Tool for measuring and analyzing network delays and latency.",
            repoUrl: "https://github.com/ltx0101/DelayScope",
            imageUrl: "images/github.png"
        },
        {
            title: "NVCacheCleaner",
            description: "Utility for cleaning NVIDIA GPU cache files.",
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