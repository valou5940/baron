


import React from 'react'
import {helpers} from '../../../../helpers/date';
import AuthContext from "../../../../context/auth-context";


const EncartEvent = (props) => (


<div className={props.index == 0 ? "col-12 col-md-6 col-lg-12" : "col-12 col-md-6 {col-lg-6"}>
    <div className="single-event-area  mb-1">

        <div className="event-text">
            <div className="dateLeft">
                <span className="dateLeft-dateJour">{new Date(props.date).getDate()}</span><br/>
                {console.log(props.date)}
                <span className="dateLeft-dateJour2">{helpers.monthToString(new Date(props.date))} {new Date(props.date).getFullYear()}</span><br/>

                <span className="dateLeft-dateJour2">{props.nomBar}</span>
            </div>
            <h4>{props.nomEvenement}</h4>
            {console.log(props.lienFb)}
            <a target="_blank"
               rel= "noopener noreferrer"
               href={props.lienFb}
               className={props.lienFb == '' ? "btn see-more-btn Eventdisabled" : "btn see-more-btn " }
            >{props.lienFb == '' ? 'COMING SOON' : 'SEE EVENT' }</a>
            {console.log(`props.eventId ${props.eventId}`)}
            <button onClick={props.deleteThisEvent.bind(this, props.eventId)}>X</button>


        </div>
    </div>
</div>
)


export default EncartEvent




