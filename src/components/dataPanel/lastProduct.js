import React, {useState ,useEffect} from "react";
import "../../imagenes.css"


function LastProduct() {
    
    const [product, setProduct] = useState([]);

    useEffect(() => {
		
        fetch("http://localhost:3001/productos")
		    .then(response => response.json())
			.then(data => {
                setProduct(data.products[data.products.length-1])
				
            })
			.catch(error => console.error(error));
	}, [])
    
    const [imagen, setImagen] = useState([]);

    useEffect(() => {
		
        fetch("http://localhost:3001/productos")
		    .then(response => response.json())
			.then(data => {
                let producto = data.products[data.products.length-1]
                let imagenes = producto.img
                let imagenesSeparadas = imagenes.split(";")
                //console.log("buenass    " + imagenesSeparadas[0])
                
                setImagen(imagenesSeparadas[0])
				
            })
			.catch(error => console.error(error));
	}, [])


    return(
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Last product in Data Base</h6>
                    </div>
                    <div className="card-body">
                        <div className="text-center">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" id="imagen-last-product" src={"  http://localhost:3001/img/" + imagen} alt="image dummy"/>
                        </div>
                        <h4>{product.titulo}</h4>
                        <p>{product.descripcion}</p> 
                    </div>
                </div>
            </div>
    ); 
    
}

export default LastProduct;