import React from 'react';
import './Card.css';

const Card = ({ id, title, tag, status }) => {
  const renderTags = () => {
    if (tag) {
      return tag.map((elem, index) => (
        <div key={index} className="tags color-grey">
          <span className="dot">•</span> {elem}
        </div>
      ));
    }
    return null;
  };

  return (
    <div className="cardContainer flex-gap-10" style={{ gap: '5px' }}>
      <div className="cardHeading flex-sb">
        <span style={{ textTransform: "uppercase" }} className="color-grey">{id}</span>
        <div className="imageContainer relative" style={{ width: "30px", height: "30px" }}>
          <img style={{ width: "100%", height: "100%", borderRadius: "50%" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS785biEGWYfQ3kCbvts_QRuNPn7IJpvovN4A" alt="UserImage" />
          <div className="showStatus"></div>
        </div>
      </div>
      <div className="cardTitle" style={{ fontWeight: 200 }}>
        <p>{title}</p>
      </div>
      <div className="cardTags">
        <div className="tags color-grey">
          <div className="grey-box">
            <span>!</span>
          </div>
        </div>
        {renderTags()}
      </div>
    </div>
  );
};

export default Card;
