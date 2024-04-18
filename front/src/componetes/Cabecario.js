import React from "react"

const Cabecario = () =>{
  
  function abrirMenu(){
    const menu = document.getElementById('menu')
    if(menu.style.display === 'none'){
        menu.style.display = 'block'
    }else{
      menu.style.display = 'none'
    }
  }
    
    return(
        <div>
             <div className="cabeçario">
               <h1>Gestor Financeiro</h1>
             </div>
             <div className="btn-menu"  onClick={abrirMenu}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                    </svg>
              </div>
              <div id="menu" className="menu">
                 <p>Investimentos</p>
                 <p>Educação Financeira</p>
                 <p>Notícias</p>
              </div>
            
        </div> 
    )
}
export default Cabecario;