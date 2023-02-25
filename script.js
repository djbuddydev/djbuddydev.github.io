
const container = document.getElementById('container');
console.log('loaded')

let rowItem = 0
let currentRow = 1;

function handleClick(item) {
    const i = `  <i class="untitled-ui untitled-ui-${item}-line"></i>`
    navigator.clipboard.writeText(i);

    // Alert the copied text
    alert("Copied the text: " + i);
    
}

function createEl(name) {
    return `
    <div  class="row-item" >
        <div id="item-${name}" class="icon-container" >
            <i class="untitled-ui untitled-ui-${name}-line"></i>
            <div>${name}</div>
        </div>
    </div>`
}

icons.selection.forEach(icon => {

    if (rowItem === 4) {
        rowItem = 0
        currentRow++;
    }

    if (rowItem === 0) {
        let newDiv = document.createElement('div');
       
        newDiv.id = `row-${currentRow}`;
        newDiv.classList.add('row');
        newDiv.insertAdjacentHTML('beforeend', createEl(icon.name));
        container.appendChild(newDiv);
    } else {
        let currentEl = document.getElementById(`row-${currentRow}`);
        currentEl.insertAdjacentHTML('beforeend', createEl(icon.name));
    }
    let el = document.getElementById('item-' + icon.name)
    el.addEventListener('click', () => handleClick(icon.name));
    
    rowItem++
})
