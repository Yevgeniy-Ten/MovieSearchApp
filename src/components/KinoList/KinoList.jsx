import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import KinoListItem from "./KinoListItem/KinoListItem";
import "./KinoList.css"

const KinoList = ({shows, prefix, offDropDown}) => (
    <>
        <div onClick={offDropDown} className="KinolistBackdrop">
        </div>
        <ListGroup onClick={offDropDown} className="Kinolist">
            {shows.map(show => <KinoListItem key={show.id} id={show.id} name={show.name} prefix={prefix}/>)}
        </ListGroup>
    </>
)

export default KinoList;
