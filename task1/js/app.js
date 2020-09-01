window.addEventListener('DOMContentLoaded',function() {
    toggleClass();

    function toggleClass() {

        let elem = document.querySelector('#name_input');
        let elemValue = elem.value;
        let title = document.querySelector('.title');
        let inputStatus = document.querySelector('.input__status');

        addEventListener('input', function () {

            let elemValueSecond = elem.value || '';

            if (elemValueSecond !== elemValue) {
                elem.classList.add('red');
                title.classList.add('red');
                inputStatus.innerHTML = 'ERROR!!!';
            } else {
                elem.classList.remove('red');
                title.classList.remove('red');
                inputStatus.innerHTML = '';
            }
        });
    }

})