import { Image } from "./image";
import React from "react";

export const Gallery = (props) => {
  const data = props.data || [
    {
      title: "Gold Necklace",
    },
    {
      title: "Diamond Ring",
    },
    {
      title: "Gold Bracelet",
    }
  ];

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
          <p>
            Discover our exquisite collection of fine jewelry, where timeless elegance meets modern design.
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {data.map((d, i) => (
              <div key={i} className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <h3>{d.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
