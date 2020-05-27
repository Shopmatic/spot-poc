import React from "react";

export default function Review() {
  const totalStars = 5;
  const stars = 4.6;
  var str = stars.toString();
  var numarray = str.split(".");
  const fullStar = parseInt(numarray[0]);
  const halfStar = parseInt(numarray[1]);
  const emptyStar = totalStars - fullStar - 1;

  const buildStar = (fullStar, halfStar, emptyStar) => {
    let star = [];
    const fullStarContent = <i className="star large material-icons">star</i>;
    const halfStarContent = (
      <i className="star large material-icons">star_half</i>
    );
    const emptyStarContent = (
      <i className="star large material-icons">star_border</i>
    );
    for (let i = 0; i < fullStar; i++) {
      star.push(fullStarContent);
    }
    if (fullStar < 5) {
      if (halfStar < 5) {
        star.push(emptyStarContent);
      } else {
        star.push(halfStarContent);
      }
    }
    for (let i = 0; i < emptyStar; i++) {
      star.push(emptyStarContent);
    }
    return star;
  };

  return (
    <div className="review">
      <div className="review_ratings">{stars}</div>
      <div className="review_stars">
        {buildStar(fullStar, halfStar, emptyStar)}
      </div>
      <p className="review_number">
        <span>26</span> Google reviews
      </p>
    </div>
  );
}
