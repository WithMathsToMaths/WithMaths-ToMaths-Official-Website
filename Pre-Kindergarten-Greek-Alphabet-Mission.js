// Extract the current letter from URL parameters
const urlParams = new URLSearchParams(window.location.search);
let letterName = urlParams.get('letter') || "Alpha";

// Populate content text dynamically
document.getElementById('post-main-title').innerText = `🌟 ${letterName} Super Mission! 🌟`;
document.getElementById('post-sub-title').innerText = `Complete the 4 magic steps to master the letter ${letterName}`;
document.getElementById('desc-listening').innerText = `Hear the secret magic sound of ${letterName}!`;
document.getElementById('desc-speaking').innerText = `Say ${letterName} out loud like a Math Superhero!`;
document.getElementById('desc-reading').innerText = `Find ${letterName} hidden among the shapes!`;
document.getElementById('desc-writing').innerText = `Trace the lines to draw your first ${letterName}!`;

// Handles clean redirection to newpage.html while retaining context
function startMission(type) {
    window.location.href = `newpage.html?letter=${encodeURIComponent(letterName)}&task=${type}`;
}
