export function toggleContent() {
    // Select all toggle buttons
    const buttons = document.querySelectorAll('.toggle-button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Find the closest section or #about and its .hidden-content
            const section = button.closest('section, #about');
            const content = section ? section.querySelector('.hidden-content') : null;

            if (!content) {
                console.error('error: No hidden content found');
                return;
            }

            if (content.style.display === 'none' || content.style.display === '') {
                content.style.display = 'block';
                button.innerHTML = 'View Less <span class="arrow">▲</span>';
            } else {
                content.style.display = 'none';
                button.innerHTML = 'View More <span class="arrow">▼</span>';
            }
        });
    });
}

// Helper to hash the bio text for cache key
function hashString(str) {
    let hash = 0, i, chr;
    if (str.length === 0) return hash;
    for (i = 0; i < str.length; i++) {
        chr   = str.charCodeAt(i);
        hash  = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}

function showStatus(message) {
    // No longer needed as a separate div
}

function clearStatus() {
    // No longer needed as a separate div
}

export function summarizeWithAI() {
    console.log('AI summarize function called!'); // Debug log
    const button = document.querySelector('.ai-summarize-button');
    const originalText = button.textContent;

    // Open the hidden content if it's not already visible
    const hiddenContent = document.querySelector('#about .hidden-content');
    if (hiddenContent && (hiddenContent.style.display === 'none' || hiddenContent.style.display === '')) {
        hiddenContent.style.display = 'block';
        // Also update the toggle button text
        const toggleBtn = document.querySelector('#about .toggle-button');
        if (toggleBtn) {
            toggleBtn.innerHTML = 'View Less <span class="arrow">▲</span>';
        }
    }
    
    // Get the journey text
    const journeyText = `From an early age, I always thought coding was the coolest thing. I remember spending time on various websites, using the "Inspect Element" tool to peek behind the scenes, wondering how everything worked. I would play around with editing or deleting code, amazed at how simple changes could affect the way a website looked or functioned. As a kid, I watched countless YouTube videos, trying to learn more about what went on behind the scenes in coding and technology. This hands-on tinkering and curiosity fueled my passion for tech. In high school, I took coding classes, and it became clear to me that coding was more than just a hobby, it was the profession I wanted to pursue. My brother, who is also a Computer Science graduate with a master's degree, has been a big inspiration and a mentor to me. He has guided me not only in the field but also in learning new tools and technologies, motivating me to continue my path in tech. This passion brought me to Auburn University, where I am working on my degree in Computer Science and a minor in Statistics with a focus on data science. My academic journey has allowed me to explore fields like software development and machine learning. My love for coding and technology has only grown stronger as I've built projects and tackled challenges that combine problem-solving with data-driven insights. Throughout my journey, I've gained experience with multiple programming languages, tools, and technologies, applying them to both personal projects and academic work. I'm always eager to learn more and advance my skills, and in the future, I hope to pursue a master's degree to deepen my knowledge and expertise. With each new project, my desire to contribute to real-world technological advancements grows, and my goal is to use my skills to make meaningful contributions in the tech industry.`;

    // Use a hash of the bio as the cache key
    const cacheKey = `ai_summary_${hashString(journeyText)}`;
    const cachedSummary = localStorage.getItem(cacheKey);
    if (cachedSummary) {
        showSummary(cachedSummary, 'Loaded from cache');
        return;
    }

    // Show loading state
    button.textContent = 'Summarizing...';
    button.disabled = true;
    showSummary('', 'Generating summary...');

    fetch('/.netlify/functions/summarize', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            text: journeyText
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data && data.summary) {
            localStorage.setItem(cacheKey, data.summary);
            showSummary(data.summary, '');
        } else {
            showSummary("AI summarization is currently unavailable. Please read the full journey above!", '');
        }
    })
    .catch((error) => {
        console.error('AI summarization error:', error);
        showSummary("AI summarization is currently unavailable. Please read the full journey above!", '');
    })
    .finally(() => {
        button.textContent = originalText;
        button.disabled = false;
    });
}

function showSummary(summary, statusMsg) {
    // Create or update summary display
    let summaryDiv = document.getElementById('ai-summary');
    if (!summaryDiv) {
        summaryDiv = document.createElement('div');
        summaryDiv.id = 'ai-summary';
        summaryDiv.className = 'ai-summary';
        // Insert after the journey section
        const journeySection = document.querySelector('#about');
        journeySection.appendChild(summaryDiv);
    }
    
    summaryDiv.innerHTML = `
        <h4 style="font-weight: bold; color: #bfcfff;">AI Summary:</h4>
        <p>${summary ? '"' + summary + '"' : ''}</p>
        <button onclick="this.parentElement.remove();" style="background: none; border: none; color: #bfcfff; text-decoration: underline; cursor: pointer; font-size: 1rem; padding: 0; margin-top: 10px;">Dismiss</button>
        ${statusMsg ? `<div style=\"font-size:0.95rem;color:#bfcfff;margin-top:8px;\">(${statusMsg})</div>` : ''}
    `;

    // Scroll to the summary card
    setTimeout(() => {
        summaryDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
}

async function loadGitHubProjects() {
    const response = await fetch('https://api.github.com/users/jwilliams2023/repos?per_page=100');
    const repos = await response.json();
    const projectsContainer = document.getElementById('github-projects');
    if (!projectsContainer) return;
    projectsContainer.innerHTML = '';
    repos
      .filter(repo => !repo.fork)
      .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at))
      .forEach(repo => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
        `;
        projectsContainer.appendChild(card);
      });
}

// === Dark/Light Mode Toggle ===
function setTheme(theme) {
  if (theme === 'light') {
    document.body.classList.add('light-theme');
    document.body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light');
    document.getElementById('theme-toggle').textContent = '☀️';
  } else {
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
    document.getElementById('theme-toggle').textContent = '🌑';
  }
}

// Get system preference
function getSystemTheme() {
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

// Get preferred theme (saved preference or system preference)
function getPreferredTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    return savedTheme; // User has explicitly chosen a theme
  }
  return getSystemTheme(); // Use system preference
}

document.addEventListener('DOMContentLoaded', () => {
    toggleContent();
    
    // Make the AI function globally available
    window.summarizeWithAI = summarizeWithAI;
    window.clearStatus = clearStatus;
    window.loadGitHubProjects = loadGitHubProjects;

    const versionEl = document.getElementById('site-version');
    if (versionEl && typeof __APP_VERSION__ !== 'undefined') {
        versionEl.textContent = 'v' + __APP_VERSION__;
    }

    // Theme toggle logic
    setTheme(getPreferredTheme());
    
    // Set initial button title
    const button = document.getElementById('theme-toggle');
    const isSystemTheme = !localStorage.getItem('theme');
    const currentTheme = document.body.classList.contains('light-theme') ? 'light' : 'dark';
    button.title = isSystemTheme ? 
        `Switch to ${currentTheme === 'light' ? 'dark' : 'light'} mode (currently following system)` : 
        `Switch to ${currentTheme === 'light' ? 'dark' : 'light'} mode`;
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => {
        // Only auto-switch if user hasn't explicitly set a preference
        if (!localStorage.getItem('theme')) {
            setTheme(e.matches ? 'light' : 'dark');
        }
    });
    
    document.getElementById('theme-toggle').addEventListener('click', () => {
        const isLight = document.body.classList.contains('light-theme');
        setTheme(isLight ? 'dark' : 'light');
        
        // Update button title to show current mode
        const button = document.getElementById('theme-toggle');
        const isSystemTheme = !localStorage.getItem('theme');
        const currentTheme = isLight ? 'dark' : 'light';
        button.title = isSystemTheme ? 
            `Switch to ${currentTheme} mode (currently following system)` : 
            `Switch to ${currentTheme} mode`;
    });

    // Hamburger menu logic for mobile nav
    const hamburger = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('mobile-nav-links');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('open');
        });
    }
});
