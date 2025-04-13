import React from "react";

export const Image = ({ title, smallImage, largeImage, onError }) => {
  return (
    <div className="portfolio-item">
      <div className="hover-bg">
        <a href={largeImage} title={title}>
          <img 
            src={smallImage} 
            className="img-responsive" 
            alt={title} 
            onError={onError}
          />
        </a>
      </div>
    </div>
  );
};
