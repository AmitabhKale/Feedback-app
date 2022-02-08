import React from 'react';
import Card from './shared/Card';
import {FaTimes} from 'react-icons/fa'

function FeedbackItem({item, handleDelete}) {
    

  return (
      <Card>
        <div className="num-display">{item.rating}</div>
        <div className="card-display">{item.text}</div>
        <button onClick={() => handleDelete(item.id)}
         className='close'>
            <FaTimes color="purple" />
        </button>
      </Card>
  );
}

export default FeedbackItem;
