import React from "react";

const SkyCard = props => {
    return (
        <div className="space-list" key={props.id}>
            <h2>Title: {props.title} </h2>
            <h3>Date: {props.date} </h3>
            <p>Image Fact: {props.explanation}</p>
            <div className="space-image">
                <img className="space-photo" src={props.hdurl} />
            </div>
        </div >
    );
};




export default SkyCard;