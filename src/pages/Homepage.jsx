import React, { useEffect, useState } from "react";
import FlagCard from "../components/FlagCard";
import Search from "../components/Search";
const HomePage = () => {
    const [data, setData] = useState([])
    const [filterData, setFilterData] = useState([]);
    const getFlagData = async () => {
        try {
            const res = await fetch("https://countries-search-data-prod-812920491762.asia-south1.run.app/countries");

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
            const filteredData = data.filter(item => (item.common.toLowerCase().includes(searchText)))
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
                        <FlagCard countryName={item.common} img={item.png} alt={item.common} />
                    ))}

            </div>
        </div>)
}
export default HomePage;