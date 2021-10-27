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


    /*const [imagen, setImagen] = useState([]);

    useEffect(() => {
		
        fetch("http://localhost:3001/productos")
		    .then(response => response.json())
			.then(data => {
                let producto = data.products
                
                let img = []
                
                for (let i = 0; i < producto.length; i++) {
                    let imagenes = producto[i].img.split(";") 
                    img += imagenes[0]+";"
                }
                let imgLogo = img.split(";")
                setImagen( imgLogo)
				
            })
			.catch(error => console.error(error));
	}, [])*/

    
    let productos = [];
        product.map((producto, i) =>{
            let img = producto.img.split(";")[0]
            productos.push( 
                <div key={i}>  
                    <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" src={"  http://localhost:3001/img/" + img}  alt="image dummy" key={i}/>
                    <h4>{producto.titulo}</h4>
                    <p>${producto.precio}</p>
                </div>)
        })
        //console.log("mapaproducto   " + product)


    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">All product</h6>
                </div>
                <div className="card-body" >
                <div className="text-center">
                        {productos}
                    </div>
                </div>
            </div>
        </div>
    ); 
}

export default AllProducts;