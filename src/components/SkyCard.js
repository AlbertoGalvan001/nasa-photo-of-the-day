import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';

const SkyCard = (props) => {

    return (
        <div className="space-list">
            <Card color="primary">
                <CardImg src={props.data.hdurl} alt={props.data.title} />
                <CardBody>
                    <CardTitle ><large>{props.data.title}</large></ CardTitle>
                    <CardSubtitle>Date: <small>{props.data.date}</small>
                    </CardSubtitle>
                    <CardText><small>{props.data.explanation}</small></CardText>
                </CardBody>


            </Card>
        </div >
    );
};




export default SkyCard;