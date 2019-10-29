import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Col
} from 'reactstrap';

const SkyCard = (props) => {

    return (
        <Col>
            <Card color="primary">
                <CardImg src={props.data.hdurl} alt={props.data.title} />
                <CardBody>
                    <CardTitle heading><large>{props.data.title}</large></ CardTitle>
                    <CardSubtitle>Date: <small>{props.data.date}</small>
                    </CardSubtitle>
                    <CardText><small>{props.data.explanation}</small></CardText>
                </CardBody>


            </Card>
        </Col >
    );
};




export default SkyCard;