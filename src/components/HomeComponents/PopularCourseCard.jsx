import React from 'react';

const PopularCourseCard = ({course}) => {
    return (
        <div>
            <img src="" alt="" />
            <div className="rating">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <span>(rating)</span>
            </div>
            <h4>Title</h4>
            <div >
                <span>Lesson</span>
                <span>Students</span>
            </div>
            <div>
                <p>price</p>
                <button>Add To card</button>
            </div>
        </div>
    );
};

export default PopularCourseCard;