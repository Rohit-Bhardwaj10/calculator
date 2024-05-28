const normal=document.querySelectorAll('.normal')
const special=document.querySelectorAll('.special')
const equal=document.querySelector('.special2')
const display=document.querySelector('.display')
const del=document.querySelector('.special4')
const reset=document.querySelector('.special3')
for (const norm of normal) {
    norm.addEventListener('click',function(e){
        display.textContent+=e.target.textContent
    })
}
for (const spec of special) {
    spec.addEventListener('click',function(e){
        display.textContent+=e.target.textContent
    })
}
del.addEventListener('click',function(e){
    display.textContent=display.textContent.slice(0,-1)
})
reset.addEventListener('click',function(e){
    display.textContent=''
})
equal.addEventListener('click',function(e){
    display.textContent=eval(display.textContent)
})