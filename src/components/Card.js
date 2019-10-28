import React from "react";
import "./Card.css";

const Card = ({ name, email, id }) => {
    return (
        <div className="card bg-light-green dib br3 pa3 ma2 grow gw2 shadow-5">
            <img alt="robots" src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <hr />
                <p>{email}</p>
            </div>
        </div>
    );
};

export default Card;
