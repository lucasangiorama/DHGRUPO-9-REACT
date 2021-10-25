import React, {useState ,useEffect} from "react";
 
//var urlPDb = "http://localhost:3001/productos"


function ProductsInDB() {
	
    const [count, setCount] = useState([]);

    useEffect(() => {
		console.log("esta renderizando")
        fetch("http://localhost:3001/productos")
		    .then(response => response.json())
			.then(data => {
				setCount(data.count)
				
            })
			.catch(error => console.error(error));
	}, [])

		return(
			<div className="col-md-4 mb-4">
				<div className="card border-left-primary shadow h-100 py-2">
					<div className="card-body">
						<div className="row no-gutters align-items-center">
							<div className="col mr-2">
								<div className="text-xs font-weight-bold text-primary text-uppercase mb-1"> Products in Data Base</div>
								<div className="h5 mb-0 font-weight-bold text-gray-800">{count}</div>
							</div>
							<div className="col-auto">
								<i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
		
}

export default ProductsInDB;