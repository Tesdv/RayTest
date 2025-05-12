function back() {
  if (window.history.length > 1) {
    window.history.back();
  } else {
    window.location.href = '/index.html';
  }
}

function scrolltoid(id, offset = 0) {
    const element = document.getElementById(id);
    if (element) {
        const topPos = element.getBoundingClientRect().top + window.pageYOffset + offset;
        window.scrollTo({
        top: topPos,
        behavior: 'smooth'
        });
    } else {
        console.warn(`Element with ID "${id}" not found.`);
    }
}