
window.onload = ()=>{

    const iconBar =document.querySelector("#icon-bar");
    const menu=document.querySelector("#menu");
    const paginateLeft=document.querySelector("#paginate-left");
    const paginateRigth=document.querySelector("#paginate-right");
    const numberOne=document.querySelector("#one-paginate");
    const numberTwo=document.querySelector("#two-paginate");
    const librairieFirst=document.querySelector("#librairie-1")
    const librairieSecond=document.querySelector("#librairie-2")
    
    // menu //

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

    // librairie //
    if (paginateRigth) {
      paginateRigth.addEventListener('click', ()=>{
        if (librairieSecond.style.display==="block") {
          librairieSecond.style.display="none";
        } else {
          librairieFirst.style.display="none";
          librairieSecond.style.display="flex";
          numberTwo.style.background="gray";
          numberOne.style.background="red";
        }
      })
      
    } 
    if (paginateLeft) {
      paginateLeft.addEventListener('click', ()=>{
        if (librairieFirst.style.display==="none") {
          librairieFirst.style.display="block";
        } else {
          librairieFirst.style.display="block";
          librairieFirst.style.display="flex";
          librairieSecond.style.display="none";
          numberOne.style.background="gray";
          numberTwo.style.background="red";
        }
      })     
    } 
    

}
