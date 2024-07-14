import React from 'react';

function FollowerList({ follower,setFollowers }) {
    console.log("follower", follower);
    // Function to convert Unix timestamp to a human-readable date format
    const formatDate = (unixTimestamp) => {
        const date = new Date(unixTimestamp * 1000);
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const day = date.getDate();
        const month = monthNames[date.getMonth()];
        const year = date.getFullYear();
        return `${month} ${day}, ${year}`;
    };
const handleRemove=(uid)=>{
const newList=follower.filter((element)=>{
    return element?.uid !== uid
})
setFollowers(newList)
}

    return (
        <div className="table-container">
            {follower?.map((element, index) => (
                <table key={index} className="custom-table">
                    <tbody>
                        <tr>
                            <td colSpan="3">
                                <div className="header-content">
                                    <h6>{element?.fullname}</h6>
                                    <h6>{element?.twubric?.total}</h6>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>{element?.twubric?.friends} <br />friends</td>
                            <td>{element?.twubric?.influence} <br />influence</td>
                            <td>{element?.twubric?.chirpiness} <br />chirpiness</td>
                        </tr>
                        <tr>
                            <td style={{fontWeight:"800"}}>{formatDate(element?.join_date)}</td>
                            <td colSpan="2"  onClick={()=>handleRemove(element?.uid)}>
                            <div className="btn-link">Remove </div></td>
                        </tr>
                    </tbody>
                </table>
            ))}
        </div>
    );
}

export default FollowerList;
