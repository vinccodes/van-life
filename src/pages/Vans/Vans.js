import { useEffect, useState } from 'react';
import './Vans.css'

const Vans = ()=>{

    const [vans, setVans] = useState([]);

    useEffect(()=>{
        fetch("/api/vans")
            .then(res => res.json())
            .then(data=> setVans(data.vans))
    }, [])
    
    return (
        <div className="vans">
            <div className="container">
                <h1 className="home__lead">Explore our van options</h1>
                <div className="container">
                {
                    vans.map(van=>{
                        return (
                            <div key={van.id}>
                                <img src={van.imageUrl} alt="van-image"></img>
                                <h3>{van.name}</h3>
                                <p>{van.price}</p>
                                <p>{van.description}</p>
                                <p>{van.type}</p>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </div>
    )
}

export default Vans;