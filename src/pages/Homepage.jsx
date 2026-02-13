import React, { useEffect, useState } from "react";
import FlagCard from "../components/FlagCard";
import Search from "../components/Search";
const HomePage = () => {
    const [data, setData] = useState([])
    const [filterData, setFilterData] = useState([]);
    const getFlagData = async () => {
        try {
            const res = await fetch("https://xcountries-backend.labs.crio.do/all");

            if (!res.ok) {
                throw new Error("Network response was not ok");
            }

            const resdata = await res.json();
            setData(resdata);
            setFilterData(resdata);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    const getSearchData = async (searchText) => {
        try {
            const filteredData = data.filter(item => (item.name.toLowerCase().includes(searchText)))
            setFilterData(filteredData)
        }
        catch (error) {
            console.error("Error fetching data:", error);
        }
    }
    useEffect(() => {
        getFlagData();
    }, [])
    return (
        <div>
            <Search getSearchData={(value) => getSearchData(value)} />
            <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
                {filterData.length > 0 &&
                    filterData.map(item => (
                        <FlagCard countryName={item.name} img={item.flag} alt={item.abbr} />
                    ))}

            </div>
        </div>)
}
export default HomePage;