import React, {useState ,useEffect} from "react";

function LastUser(props){
    
    const [user, setUser] = useState([]);

    useEffect(() => {
		
        fetch("http://localhost:3001/usuarios")
		    .then(response => response.json())
			.then(data => {
				setUser(data.data.pop())
				console.log(data.data.pop().img)
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
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" src={user.img} alt="image dummy"/>
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