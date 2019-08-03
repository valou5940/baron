import React, {Component} from 'react';

import Modal from '../components/Modal/Modal'
import Backdrop from '../components/Backdrop/Backdrop'
import './Events.css'
import AuthContext from '../context/auth-context'
import EventList from '../components/Events/EventList/EventList'
import Spinner from '../components/Spinner/Spinner'
import EncartEvent from "../components/Events/EventList/EncartEvent/EncartEvent";
import {helpers} from '../helpers/date';



class EventPage extends Component{
    state = {
        creating:false,
        events:[],
        isLoading: false,
        selectedEvent: null
    };

    static contextType = AuthContext;

    constructor(props) {
        super(props);
        this.barNameElRef = React.createRef();
        this.eventNameElRef = React.createRef();
        this.dateElRef = React.createRef();
        this.fbLinkElRef = React.createRef();
    }

    componentDidMount() {
        this.fetchEvents();
    }

    startCreateEventHandler = () =>{
        this.setState({creating:true});
    };

    modalConfirmHandler = () =>{
        this.setState({creating:false});
        const barName = this.barNameElRef.current.value;
        const date = this.dateElRef.current.value;
        const eventName = this.eventNameElRef.current.value;
        const fbLink = this.fbLinkElRef.current.value;

        if(barName.trim().length === 0 ||
            date.trim().length === 0 ||
            eventName.trim().length === 0 ||
            fbLink.trim().length === 0 ){
            return;
        }

        const event = {barName, eventName, date, fbLink};


        const requestBody = {
            query: `
                mutation {
                    createEvent(eventInput:{ barName: "${barName}",eventName: "${eventName}",fbLink: "${fbLink}",date: "${date}"})
                    {
                        _id
                        barName
                        eventName
                        fbLink
                        date
                    }
                }
            `
        };

        const token = this.context.token;


        fetch('http://localhost:8000/graphql',{
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
            .then(res =>{
                if(res.status !== 200 && res.status !== 201){
                    throw new Error('Failed!');
                }
                return res.json();
            })
            .then(resData =>{

               this.setState( prevState =>{
                  const updatedEvents =[...prevState.events];
                  updatedEvents.push({
                       _id : resData.data.createEvent._id,
                      barName : resData.data.createEvent.barName,
                      eventName: resData.data.createEvent.eventName,
                      date : resData.data.createEvent.date,
                      fbLink: resData.data.createEvent.fbLink,
                   });
                   return{events: updatedEvents};
               });
            })
            .catch(err =>{
                console.log(err)
            });
    };

    modalCancelHandler = () =>{
        this.setState({creating:false, selectedEvent: null});
    };

    fetchEvents = () => {
        this.setState({isLoading: true})
        const requestBody = {
            query: `
                query {
                    events
                    {
                        _id
                        barName
                        eventName                        
                        fbLink
                        date
                    }
                }
            `
        };

        const token = this.context.token;


        fetch('http://localhost:8000/graphql',{
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
                'Content-Type': 'application/json',

            }
        })
            .then(res =>{
                if(res.status !== 200 && res.status !== 201){
                    throw new Error('Failed!');
                }
                return res.json();
            })
            .then(resData =>{
                const events = resData.data.events;
                console.table(events);
                helpers.sortDate(events);
                console.table(events);
                this.setState({events: events, isLoading:false})
            })
            .catch(err =>{
                console.log(err)
                this.setState({isLoading:false})
            });
    };

    onDeleteEvent =(eventId) => {

       const requestBody = {
            query: `
                mutation {
                    cancelEvent(eventId: "${eventId}")
                    {
                        _id

                    }
                }
            `
        };

        const token = this.context.token;


        fetch('http://localhost:8000/graphql',{
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
            .then(res =>{

                if(res.status !== 200 && res.status !== 201){
                    throw new Error('Failed!');
                }
                return res.json();
            })
            .then(resData =>{
                console.log(resData);
                this.setState( prevState =>{
                    const updatedEvents = prevState.events.filter(event => {
                        return event._id !== eventId;
                    });
                    console.table(updatedEvents);

                    return{events: updatedEvents};
                });


            })
            .catch(err =>{
                console.log(err)
            });
    };


    render(){

        return(


            <React.Fragment>
                {(this.state.creating || this.state.selectedEvent) &&
                    <Backdrop/>
                }
                {this.state.creating &&  (
                    <Modal
                        title="Add Event"
                        canConfirm
                        canCancel
                        onCancel={this.modalCancelHandler}
                        onConfirm={this.modalConfirmHandler}
                        confirmText="Confirm">
                        <form>
                            <div className="form-control_">
                                <label htmlFor="barName">nom du bar</label>
                                <input type="text" id="barName" ref={this.barNameElRef}/>
                            </div>
                            <div className="form-control_">
                                <label htmlFor="eventName">nom de l'évenement</label>
                                <input type="text" id="eventName" ref={this.eventNameElRef} />
                            </div>
                            <div className="form-control_">
                                <label htmlFor="date">Date</label>
                                <input type="date" id="date" ref={this.dateElRef}/>
                            </div>
                            <div className="form-control_">
                                <label htmlFor="fbLink">lien facebook</label>
                                <input type="text" id="fbLink" ref={this.fbLinkElRef} />
                            </div>
                        </form>
                    </Modal>
                )}
                {this.state.selectedEvent &&  (
                    <Modal
                        title={this.state.selectedEvent.title}
                        canConfirm
                        canCancel
                        onCancel={this.modalCancelHandler}
                        onConfirm={this.bookEventHandler}
                        confirmText="Book">
                    <h1>{this.state.selectedEvent.title}</h1>
                        <h2>{this.state.selectedEvent.price}$ - {new Date(this.state.selectedEvent.date).toLocaleDateString('Fr-fr')}</h2>
                        <p>{this.state.selectedEvent.description}</p>
                    </Modal>
                )}

                {this.context.token && (<div className="events-control_">
                <p> Share your own event </p>
                <button className="btn_" onClick={this.startCreateEventHandler} > Create Event</button>
            </div>)}
                {this.state.isLoading
                    ?    <Spinner/>
                    :   (

                        <EventList

                        events={this.state.events}
                        authUserId={this.context.userId}
                        onViewDetail={this.showDetailHandler}
                        onDeleteEvent = {this.onDeleteEvent}/>
                        )
                }

            </React.Fragment>
        );
    }
}

export default  EventPage;