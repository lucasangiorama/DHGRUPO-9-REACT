import React, {useState ,useEffect} from "react";
import "../../imagenes.css"


function LastUser(props){
    
    const [user, setUser] = useState([]);

    useEffect(() => {
		
        fetch("http://localhost:3001/usuarios")
		    .then(response => response.json())
			.then(data => {
				setUser(data.data[data.data.length-1])
		
                //console.log("prueba 1   " +  data.data[data.data.length-1])

            })
			.catch(error => console.error(error));
	}, [])
    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Last user in Data Base</h6>
                </div>
                <div className="card-body">
                    <div className="text-center">
                    <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" id="imagen-las-user" src={"  http://localhost:3001/img/" + user.img} ></img>
                    </div>
                    <h4>{user.nombre}</h4>
                    <h5>{user.usuario}</h5>
                    <h5>{user.mail}</h5>
                </div>
            </div>
        </div>
    ); 
}

export default LastUser;