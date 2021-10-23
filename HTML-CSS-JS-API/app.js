const dropdowns = document.querySelectorAll('.dropdown');

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

const tbody = document.querySelector('#tbody');

fetch('http://localhost:3001/users')
    .then(async (response) => {
        return await response.json();
    })
    .then((users) => {
        users.forEach((user) => {
            tbody.innerHTML += `
<tr>
    <td>${user.name}</td>
    <td>
        <div class="dropdown">
            <div class="dropdown__control">
                <span class="dropdown-value"
                    >Administrador</span
                >
                <img
                    width="10"
                    height="10"
                    src="./assets/chevron.svg"
                />
            </div>
            <ul class="dropdown__menu">
                <li
                    class="
                        dropdown__menu-option
                        is-selected
                    "
                >
                    Administrador
                </li>
                <li class="dropdown__menu-option">
                    Usuario
                </li>
            </ul>
        </div>
    </td>
</tr>
`;
        });
    });
/*  */
