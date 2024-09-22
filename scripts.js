document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        const link = button.previousElementSibling.value;
        if (button.textContent.includes('复制')) {
            navigator.clipboard.writeText(link).then(() => {
                alert('链接已复制!');
            });
        } else {
            window.open(link, '_blank');
        }
    });
});
