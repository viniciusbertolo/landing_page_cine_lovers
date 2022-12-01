function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ''
    textoArray.forEach((letra, i)=>{

        setTimeout(()=>{
            setTimeout(()=>elemento.innerHTML += letra, 75 * i)
        }, 4000)
        
        
    })
}
const frase = document.querySelector(".fraseLetra")

typeWrite(frase)




const seta = document.querySelector(".seta");
seta.addEventListener('click', ()=>{
    window.scrollBy(0, window.innerHeight);
})










