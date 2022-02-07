import React from 'react';
import FeedbackItem from './FeedbackItem';

const FeedbackList = ({feedback}) => {
    if(!feedback || feedback.length === 0){
        return <p>NO Feedback</p>
    }
    return(
        <div className='feedback-list'>
            {feedback.map((item) => (
                <FeedbackItem key={item.id} item={item} />
            ))}
        </div>
    )
};

export default FeedbackList;
