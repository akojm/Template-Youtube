
window.onload = ()=>{

    const iconBar =document.querySelector("#icon-bar");
    const navLeft=document.querySelector("#nav-left");
    
    if (iconBar) {
        iconBar.addEventListener('click', ()=>{
          if(navLeft.style.display==="block"){
              navLeft.style.display="none";
          } else {
            navLeft.style.display="block";
          }
        })  
    }
    if (navLeft) {
        navLeft.addEventListener('mouseleave', ()=>{
                navLeft.style.display="none";         
        })   
    }

}
