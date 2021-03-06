import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';

function Comment ({img, title, text}) {
    return (
        <div className="Comments">
            <img src={img} />
            <h5>{title}</h5>
            <p>{text}</p>
        </div>
    )
}

Comment.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}


export default Comment;
