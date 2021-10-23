const dropdowns = document.querySelectorAll('.dropdown');
console.log(dropdowns);

dropdowns.forEach((dropdown) => {
    const onClick = (event) => {
        const target = event.target;

        if (target.classList.contains('dropdown__control')) {
            dropdown.classList.add('is-active');
        }

        if (target.classList.contains('dropdown__menu-option')) {
            const options = dropdown.querySelectorAll('.dropdown__menu-option');
            options.forEach((option) => {
                option.classList.remove('is-selected');
            });
            target.classList.add('is-selected');

            const valueElement = document.querySelector('.dropdown-value');
            valueElement.textContent = target.textContent;

            dropdown.classList.remove('is-active');
        }
    };

    dropdown.addEventListener('click', onClick);
});
