import React, { useEffect, useState } from "react";
import FlagCard from "../components/FlagCard";
const HomePage = () => {
    const [data, setData] = useState([])
    const getFlagData = async () => {
        try {
            const res = await fetch("https://xcountries-backend.labs.crio.do/all");

            if (!res.ok) {
                throw new Error("Network response was not ok");
            }

            const resdata = await res.json();
            setData(resdata);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    useEffect(() => {
        getFlagData();
    }, [])
    return (
        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
            {data.length > 0 &&
                data.map(item => (
                    <FlagCard countryName={item.name} img={item.flag} alt={item.abbr} />
                ))}

        </div>)
}
export default HomePage;