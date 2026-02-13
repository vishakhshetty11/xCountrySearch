import React from 'react'

const FlagCard = ({countryName, img, alt}) => {
    return (
        <div className='countryCard' style={{width:"150px", height:"150px", border: "1px solid gray", padding:"10px"}}>
            <img src={img} alt={alt} 
            style={{width:"100px"}} />
            <h4>{countryName}</h4>
        </div>
    )
}

export default FlagCard