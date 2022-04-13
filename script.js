document.querySelectorAll('button').forEach((btn) => {
    btn.addEventListener('click', function () {
        if (btn.className === 'det-btn') {
            document.querySelector('.card-details').classList.add('open');
        } else if (btn.className === 'btn-att'){
            document.querySelector('.card-details').classList.remove('open')
    }
})
})