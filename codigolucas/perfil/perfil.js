document.querySelectorAll('.info-item').forEach(input => {
    input.addEventListener('focus', function() {
        this.setAttribute('placeholder', '');
    });
    input.addEventListener('blur', function() {
        this.setAttribute('placeholder', this.dataset.placeholder);
    });
    input.dataset.placeholder = input.getAttribute('placeholder');
});
