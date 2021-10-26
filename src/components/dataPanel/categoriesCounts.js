import React, {useState ,useEffect} from "react";
import "../../categorias.css"

function CategoriesCounts(props){
    

     const [countCategorias, setCountCategoriass] = useState([]);

     useEffect(() => {
		
        fetch("http://localhost:3001/productos")
	 	    .then(response => response.json())
	 		.then(data => {
                setCountCategoriass(Object.values(data.countByCategory))
	 			
             })
	 		.catch(error => console.error(error));
	 }, [])
    //console.log("holis     " + (countCategorias))

    return(
        <div >
        { countCategorias.map((categoria, i) =>{
            return(
            <div id="count-box">
                <div className="card bg-info text-white shadow" key={i}>
                    <h5 className="card-body" >{categoria}</h5>
                </div>
            </div> 
            )})	
        }
        </div>        
    ); 

}

export default CategoriesCounts;