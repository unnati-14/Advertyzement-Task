import axios from 'axios';
import React ,{useState} from 'react';
import Loader from "react-loader-spinner";

function Main(){
    const [info, setInfo] = useState([]);
    const [loading, setLoading] = useState(false);

    const getInfo = () => {
        setLoading(true)
        axios.get("https://reqres.in/api/users?page=1")
        .then((response) => {
            console.log(response.data.data);
            setInfo(response.data.data);
            setLoading(false)
        })
        .catch(err => {
            console.log(err)
            setLoading(false)
        })
    };
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style={{color:"black"}}>
                <a class="navbar-brand" href="#">Advertyzement</a> 
                <button class="btn btn-primary my-2 my-sm-0" type="submit" style={{right:25, position:"absolute"}} onClick={getInfo}>Get User</button>
            </nav>
            {loading ? 
            <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000}
            />
            :
            <div className="row">
                {info.length>0 && info.map(v =>
                <>
                    <div class="card col-md-3" style={{marginTop: "5%", marginLeft: "7%"}} >
                        <img class="card-img-top" src={v.avatar} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">{v.first_name} {v.last_name}</h5>
                            <p class="card-title">{v.email}</p>
                        </div>
                    </div>
                </>
                )}
            </div>
            }
        </>
    );
}

export default Main;