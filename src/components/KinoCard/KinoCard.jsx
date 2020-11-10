import React from "react";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion"
import Button from "react-bootstrap/Button";

const KinoCard = ({movie}) => {
    return (
        <Accordion>
            <Card bg="light" border="light" text="dark" style={{width: "19rem"}}>
                <Card.Img variant="top" src={movie.image.original || movie.image.medium}/>
                <Card.Body>
                    <Card.Title>{movie.name}<small className="ml-3 font-weight-bolder">rating {movie.rating.average} out
                        of
                        10</small></Card.Title>
                    <Card.Text className="font-weight-bold">
                        Genres: {movie.genres.join(",")}
                    </Card.Text>
                    <Accordion.Toggle as={Button} className="btn-dark mb-2" variant="button" eventKey="info">
                        Show Info
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="info">
                        <Card.Text dangerouslySetInnerHTML={{__html: movie.summary}}/>
                    </Accordion.Collapse>
                </Card.Body>
            </Card>
        </Accordion>
    );
};

export default KinoCard;
