import React, {useState ,useEffect} from "react";

function AllProducts(props){
    
    const [product, setProduct] = useState([]);

    useEffect(() => {
		
        fetch("http://localhost:3001/productos")
		    .then(response => response.json())
			.then(data => {
				
                setProduct(data.products)
            })
			.catch(error => console.error(error));
	}, [])


    const [imagen, setImagen] = useState([]);

    useEffect(() => {
		
        fetch("http://localhost:3001/productos")
		    .then(response => response.json())
			.then(data => {
                let producto = data.products
                
                
                for (let i = 0; i < producto.length; i++) {
                    let imagenes = producto[i].img.split(";")
                    let img = imagenes[0]
                    console.log("imagenes    " +  img) // devuelve el logo de cada producto
                }
                //me falta saber como pasar esa info a imagen de fetch
                setImagen( imagen)
				
            })
			.catch(error => console.error(error));
	}, [])




    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">All product</h6>
                </div>
                
                { product.map((producto, i) =>{
                    return(
                    <div className="card-body" key={i}>
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4"  alt="image dummy"/>
                    </div>
                    <h4>{producto.titulo}</h4>
                    <p>${producto.precio}</p>
                    </div>
                )})  
                }
            </div>
        </div>
    ); 
}

export default AllProducts;