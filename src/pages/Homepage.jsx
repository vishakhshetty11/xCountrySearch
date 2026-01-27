import React, {useEffect, useState} from "react";
import FlagCard from "../components/FlagCard";
const HomePage = () => {
    const [data, setData] = useState([])
    function getFlagData(){
        fetch('https://xcountries-backend.labs.crio.do/all')
            .then(res => res.json())
            .then(resdata => setData(resdata))
            .catch(err => console.error(err));
    }
    useEffect(() =>{
        getFlagData();
    },[])
    return (
        <div style={{display: "flex", flexDirection:"row", flexWrap:"wrap", gap:"10px", justifyContent:"center"}}>
            {data.length >0 &&
            data.map(item =>(
                <FlagCard countryName={item.name} img={item.flag} alt={item.abbr} />
            ))}
            
        </div>)
}
export default HomePage;