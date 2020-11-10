import React from "react";
import Card from "react-bootstrap/Card";

const KinoCard = ({movie}) => {
    return (
        <Card bg="light" border="light" text="dark" style={{width: "18rem"}}>
            <Card.Img variant="top" src={movie.image.original || movie.image.medium}/>
            <Card.Body>
                <Card.Title>{movie.name}</Card.Title>
                <Card.Text className="font-weight-bold">
                    Genres: {movie.genres.join(",")}
                </Card.Text>
                <Card.Text dangerouslySetInnerHTML={{__html: movie.summary}}/>
            </Card.Body>
        </Card>
    );
};

export default KinoCard;
