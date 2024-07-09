const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
    entry.target.classList.add('slide');
    } else {
    entry.target.classList.remove('slide');
    }
    });
    });
        
    const hiddenElements = document.querySelectorAll('.choose1, .choose2, .choose3, .choose4');
    hiddenElements.forEach((el) => observer.observe(el));