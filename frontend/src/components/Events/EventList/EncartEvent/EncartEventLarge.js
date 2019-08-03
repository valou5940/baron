


import React from 'react'
import '../../../../App.css';


const EncartEventLarge = ({date,nomBar,nomEvenement,lienFb}) => (



<div className="col  col-lg-12">
    <div className="single-event-area mb-1">

        <div className="event-text">
            <div className="dateLeft">
                <span className="dateLeft-dateJour">{new Date(date).getDay()}</span><br/>
                <span className="dateLeft-dateJour2">{new Date(date).getMonth()} {new Date(date).getFullYear()}</span><br/>
                <span className="dateLeft-dateJour2">{nomBar}</span>
            </div>
            <h4>{nomEvenement}</h4>

            <a  target="_blank"
                rel="noopener noreferrer"
                href={lienFb}
                className={lienFb == '' ? "btn see-more-btn Eventdisabled" : "btn see-more-btn " }
            >{lienFb == '' ? 'COMING SOON' : 'SEE EVENT' }</a>
        </div>
    </div>
</div>

)

export default EncartEventLarge
