

// mobile section js

const sidebar = document.querySelector('#sidebar')
const hidebar = document.querySelector('#xmark')
const bar = document.querySelector('#bar')


function showSidebar(){
    sidebar.style.display = 'flex'
    xmark.style.display = 'flex'
    bar.style.display = 'none'
    
}

function hideSidebar(){
    sidebar.style.display = 'none'
    xmark.style.display = 'none'
    bar.style.display = 'flex'
}