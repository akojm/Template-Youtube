
window.onload = ()=>{

    const iconBar =document.querySelector("#icon-bar");
    const menu=document.querySelector("#menu");
    
    if (iconBar) {
        iconBar.addEventListener('click', ()=>{
          if(menu.style.display==="block"){
              menu.style.display="none";
          } else {
            menu.style.display="block";
          }
        })  
    }
    if (menu) {
        menu.addEventListener('mouseleave', ()=>{
                menu.style.display="none";         
        })   
    }

}
