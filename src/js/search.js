
const form = document.getElementById('search-form');
const input = document.getElementById('search-input');

form.addEventListener('submit', e => {
  e.preventDefault();
  const q = encodeURIComponent(input.value.trim());
  if (!q) return;
 
  window.location.href = `search.html?search=${q}`;
});
