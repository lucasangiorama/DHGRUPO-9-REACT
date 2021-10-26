import React, {useState ,useEffect} from "react";
import CategoriesCounts from "./categoriesCounts"
import "../../categorias.css"

function CategoriesData(props){
    
    const [categories, setCategories] = useState([]);

    useEffect(() => {
		
        fetch("http://localhost:3001/categorias")
		    .then(response => response.json())
			.then(data => {
				setCategories(data.data)
                //console.log("pruebaaa   " + data.data[0])

            })
			.catch(error => console.error(error));
	}, [])

    return(
        <div className="col-lg-6 mb-4">						
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
                </div>
                <div className="card-body" id="categoria-box">
                    <div id="nombre-box">
                    {  categories.map((categoria, i) =>{
                        return(
                        <div  key={i}>
                            <div className="card bg-info text-white shadow">
                                <h5 className="card-body" ><strong>{categoria.nombre + " "}</strong></h5>
                            </div>
                        </div> 
                        )})	
                        }
                    </div>
                    <div >
                    <CategoriesCounts />
                    </div>
                </div>
            </div>
        </div>
    ); 
}

export default CategoriesData;