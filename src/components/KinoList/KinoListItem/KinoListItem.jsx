import React from "react";
import {Link} from "react-router-dom";

const KinoListItem = ({prefix, name, id}) => {
    return <Link to={`/shows/${id}`}
                 className="list-group-item list-group-item-action">{`${prefix}: ${name}`}</Link>
}

export default KinoListItem;
