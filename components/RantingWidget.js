import React from 'react';
import '../styles/ranting-widget.css'

const RantingWidget = () => {

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="rating">
            <input type="radio" id="star5" name="rating" defaultValue={5} /><label htmlFor="star5" title="J'adore !!">5 stars</label>
            <input type="radio" id="star4" name="rating" defaultValue={4} /><label htmlFor="star4" title="J'aime bien !!">4 stars</label>
            <input type="radio" id="star3" name="rating" defaultValue={3} /><label htmlFor="star3" title="C'est pas mal !!">3 stars</label>
            <input type="radio" id="star2" name="rating" defaultValue={2} /><label htmlFor="star2" title="Mouai, pas dans mes goûts !!">2 stars</label>
            <input type="radio" id="star1" name="rating" defaultValue={1} /><label htmlFor="star1" title="Bof, ça ne me plaît pas !!">1 star</label>
          </div>
        </div>
      </div>

    </React.Fragment>
  )
}

export default RantingWidget;
