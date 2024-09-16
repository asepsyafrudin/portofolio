import React from "react";
import "./card.css";
import PropTypes from "prop-types";

function CardCertificate(props) {
  const { image, title, date } = props;
  return (
    <div>
      <div className="center">
        <div className="article-card">
          <div className="content">
            <p className="date">{date}</p>
            <p className="title">{title}</p>
          </div>
          <img src={image} alt="article-cover" />
        </div>
      </div>
    </div>
  );
}

export default CardCertificate;

CardCertificate.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
};
