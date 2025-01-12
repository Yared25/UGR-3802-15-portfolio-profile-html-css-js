
document.addEventListener('DOMContentLoaded', function () {
    // Typing Effect for Title Elements (only if the element with id 'typed-text' exists)
    const typedText = document.getElementById('typed-text');
    if (typedText) {
        let text = typedText.textContent;
        typedText.textContent = ''; // Clear text to start typing effect
        let i = 0;

        function typeText() {
            if (i < text.length) {
                typedText.textContent += text.charAt(i);
                i++;
                setTimeout(typeText, 100);
            }
        }
        typeText();
    }

    // Fade-in Effect for All Elements with the 'fade-in' Class
    const fadeInElements = document.querySelectorAll('.fade-in');
    window.addEventListener('scroll', function () {
        fadeInElements.forEach(element => {
            if (element.getBoundingClientRect().top < window.innerHeight) {
                element.classList.add('fade-in-visible');
            }
        });
    });

    // Initially trigger the fade-in check
    window.dispatchEvent(new Event('scroll'));

    // Scroll to Top Button Behavior (appears after scrolling 300px)
    const scrollButton = document.createElement('button');
    scrollButton.textContent = "Scroll to Top";
    scrollButton.style.position = 'fixed';
    scrollButton.style.bottom = '20px';
    scrollButton.style.right = '20px';
    scrollButton.style.padding = '10px';
    scrollButton.style.backgroundColor = '#457b9d';
    scrollButton.style.color = '#fff';
    scrollButton.style.border = 'none';
    scrollButton.style.borderRadius = '5px';
    scrollButton.style.cursor = 'pointer';
    scrollButton.style.display = 'none'; // Initially hidden
    document.body.appendChild(scrollButton);

    scrollButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollButton.style.display = 'block';
        } else {
            scrollButton.style.display = 'none';
        }
    });
});
