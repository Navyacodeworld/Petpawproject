// =====================================================
//   PET PAW — SHARED SCRIPT
// =====================================================

// ---- DARK MODE ----
function initDarkMode() {
  const saved = localStorage.getItem('darkMode');
  if (saved === 'true') document.body.classList.add('dark');
  const btn = document.getElementById('darkToggle');
  if (btn) {
    btn.innerHTML = document.body.classList.contains('dark')
      ? '<i class="fas fa-sun"></i>'
      : '<i class="fas fa-moon"></i>';
    btn.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      const isDark = document.body.classList.contains('dark');
      localStorage.setItem('darkMode', isDark);
      btn.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    });
  }
}
document.addEventListener('DOMContentLoaded', initDarkMode);

// ---- DAILY TIPS ----
const petTips = [
  "Always keep fresh, clean water available for your pet. 💧",
  "Regular exercise keeps your pet healthy and happy. 🏃",
  "Never feed pets chocolate, grapes, or onions — they're toxic! 🚫",
  "Brush your pet's coat regularly to prevent matting. 🖌️",
  "Schedule annual vet check-ups even if your pet seems healthy. 🏥",
  "Spaying/neutering can extend your pet's lifespan. ❤️",
  "Pets thrive on routine — keep feeding and walk times consistent. ⏰",
  "Keep your pet's vaccinations up-to-date for disease prevention. 💉",
  "Mental stimulation through play reduces anxiety in pets. 🎾",
  "Watch for sudden changes in behavior — they may signal health issues. 👀",
  "Indoor cats also need regular vet visits! 🐱",
  "Paw pads can burn on hot pavement — walk during cooler hours. 🌡️",
  "Dental disease affects 80% of dogs by age 3. Brush regularly! 🦷",
  "Provide safe, cozy sleeping spots for your pet. 😴",
  "Socializing young pets leads to better behavior as adults. 🤝",
];

function showTip() {
  const el = document.getElementById('tipText');
  if (el) {
    const idx = Math.floor(Math.random() * petTips.length);
    el.textContent = petTips[idx];
  }
}

function newTip() {
  const el = document.getElementById('tipText');
  if (!el) return;
  el.style.opacity = '0';
  setTimeout(() => {
    const idx = Math.floor(Math.random() * petTips.length);
    el.textContent = petTips[idx];
    el.style.opacity = '1';
  }, 250);
}

// ---- LEARN MORE TOGGLE ----
function toggleLearn(btn) {
  const box = btn.nextElementSibling;
  const isOpen = box.style.display === 'block';
  box.style.display = isOpen ? 'none' : 'block';
  btn.textContent = isOpen ? 'Learn More ▼' : 'Close ▲';
}
