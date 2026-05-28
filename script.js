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
  "Always keep fresh, clean water available for your pet. <i class='fas fa-tint'></i>",
  "Regular exercise keeps your pet healthy and happy. <i class='fas fa-running'></i>",
  "Never feed pets chocolate, grapes, or onions — they're toxic! <i class='fas fa-ban'></i>",
  "Brush your pet's coat regularly to prevent matting. <i class='fas fa-paint-brush'></i>",
  "Schedule annual vet check-ups even if your pet seems healthy. <i class='fas fa-hospital'></i>",
  "Spaying/neutering can extend your pet's lifespan. <i class='fas fa-heart'></i>",
  "Pets thrive on routine — keep feeding and walk times consistent. <i class='fas fa-clock'></i>",
  "Keep your pet's vaccinations up-to-date for disease prevention. <i class='fas fa-syringe'></i>",
  "Mental stimulation through play reduces anxiety in pets. <i class='fas fa-brain'></i>",
  "Watch for sudden changes in behavior — they may signal health issues. <i class='fas fa-eye'></i>",
  "Indoor cats also need regular vet visits! <i class='fas fa-cat'></i>",
  "Paw pads can burn on hot pavement — walk during cooler hours. <i class='fas fa-thermometer-half'></i>",
  "Dental disease affects 80% of dogs by age 3. Brush regularly! <i class='fas fa-tooth'></i>",
  "Provide safe, cozy sleeping spots for your pet. <i class='fas fa-bed'></i>",
  "Socializing young pets leads to better behavior as adults. <i class='fas fa-users'></i>",
];

function showTip() {
  const el = document.getElementById('tipText');
  if (el) {
    const idx = Math.floor(Math.random() * petTips.length);
    el.innerHTML = petTips[idx];
  }
}

function newTip() {
  const el = document.getElementById('tipText');
  if (!el) return;
  el.style.opacity = '0';
  setTimeout(() => {
    const idx = Math.floor(Math.random() * petTips.length);
    el.innerHTML = petTips[idx];
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
