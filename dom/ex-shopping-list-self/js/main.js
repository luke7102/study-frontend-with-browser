window.addEventListener('load', () => {
    const itemBox = document.querySelector('#item-box');
    const inputItemBox = document.querySelector('#input-name');
    const addBtn = document.querySelector('#add-btn');

    function addItem(itemName) {
        const divItem = document.createElement('div');
        divItem.classList.add('item');

        const pItemName = document.createElement('p');
        pItemName.classList.add('item-name');
        pItemName.textContent = itemName;

        const divDeleteBtn = document.createElement('div');
        divDeleteBtn.classList.add('item-delete-btn');
        divDeleteBtn.addEventListener('click', evt => {
            evt.target.parentElement.parentElement.remove();
        });

        const iTrash = document.createElement('i');
        iTrash.classList.add('fas', 'fa-trash-alt');

        divDeleteBtn.append(iTrash);
        divItem.append(pItemName, divDeleteBtn);
        itemBox.append(divItem);
    }

    addBtn.addEventListener('click', evt => {
        addItem(inputItemBox.value)
    })
})
