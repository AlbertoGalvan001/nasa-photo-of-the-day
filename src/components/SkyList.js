import React, { useState, useEffect } from "react";
import axios from "axios";
import Skycard from "./SkyCard";

export default function SkyList() {
    const [pics, setPics] = useState([]);


    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=ql7uilOuIBhkayep81wzZk1DhOnVb3sIta40zdN7`)
            .then(response => {
                console.log(response.data);
                setPics(response.data);
            })
            .catch(error => {
                console.log("data not returned", error);
            });
    }, []);

    return (
        <div className="spaceStuff">
            {pics.map(spaceStuff => {
                return (
                    <Skycard
                        key={spaceStuff.id}
                        title={spaceStuff.title}
                        description={spaceStuff.explanation}
                        hdurl={spaceStuff.hdurl} />
                )
            })}
        </div>
    )
}