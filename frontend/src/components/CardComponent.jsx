import React from "react";
import './index.scss';

const Card = (props) => {
    return(
      <div className="card-css-col">
        <div className="card m-0">
          <div className="card-body">
            <h5  className="card-title">{props.contactbook.fname}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{props.contactbook.phone}</h6>
            <p className="card-text">{props.contactbook.email}</p>
          </div>
        </div>
      </div>
    )
}

export default Card;
