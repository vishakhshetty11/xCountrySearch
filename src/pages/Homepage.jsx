import React, {useEffect, useState} from "react";
import FlagCard from "../components/flagCard";
const HomePage = () => {
    const [data, setData] = useState([ 1, 2, 3, 4, 5,  6, 7, 8, 9, 10,  11, 12, 13, 14, 15])
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