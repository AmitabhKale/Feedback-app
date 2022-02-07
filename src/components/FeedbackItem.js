import React, { useState } from 'react';
import Card from './shared/Card';

function FeedbackItem({item}) {

  return (
      <Card>
        <div className="num-display">{item.rating}</div>
        <div className="card-display">{item.text}</div>
      </Card>
  );
}

export default FeedbackItem;
