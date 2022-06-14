var input = document.getElementById('input');
var enter_button = document.getElementById('press')
var ul = document.querySelector('ul')

function input_return() {
    return input.value.length
}


function createlist_element() {
    var li = document.createElement('li')

    var checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    // checkbox.classList.add('check')
    li.appendChild(checkbox)


    var label = document.createElement('label')
    label.appendChild(document.createTextNode(input.value))
    li.appendChild(label)
    label.classList.add('text')
    ul.appendChild(li)
    input.value = null

   
    var item_button = document.createElement('button')
    item_button.appendChild(document.createTextNode('Delete'))
    item_button.classList.add('btn')
    li.appendChild(item_button)
}

function add_after_click() {
    if(input_return() > 0){
        createlist_element()
    }

}
function add_event_after_key(event) {
    if(input_return() > 0 && event.keyCode === 13){
        createlist_element()
    }
}

function perform_task(el){
    if(el.target.tagName === "LABEL"){
        el.target.classList.toggle('done')
    }
    //visit the parent element before accessing the child at index one
    if(el.target.tagName === "INPUT"){
        el.target.parentElement.children[1].classList.toggle('done')
    }
    // console.log(el.target.parentElement.children[1])
}

function delete_task(el){
    if(el.target.tagName === "BUTTON"){
        el.target.parentNode.remove()
    }
}

function u_click(element) {
    perform_task(element)
    delete_task(element)
}

enter_button.addEventListener('click', add_after_click)
input.addEventListener('keypress', add_event_after_key)
ul.addEventListener('click', u_click)