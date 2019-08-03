import React from 'react';
import './EventItem.css'

const eventItem = props =>(
     <li key={props.eventId} className="events__list-item">
          <div>
               <h1>{props.barName}</h1>
               <h2>{props.eventName} - {new Date(props.date).toLocaleDateString('Fr-fr')}</h2>
          </div>
          <div>
                   <button className="btn_" onClick={props.onDetail.bind(this, props.eventId)}>View details</button>
          </div>
     </li>
);

export default eventItem;

