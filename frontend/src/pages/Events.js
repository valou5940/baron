
import React,{Component} from 'react';
import EncartBlanc from '../components/Encart/EncartBlanc';
import Footer from '../components/Footer/Footer';
import AuthContext from "../context/auth-context";
import Spinner from "../components/Spinner/Spinner";
import EventListLs from "../components/Events/EventList/EventListLs";


class Events extends Component {
    state = {
        creating:false,
        events:[],
        isLoading: false,
        selectedEvent: null
    };

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
    static contextType = AuthContext;

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
        console.log(`token = ${token}`)

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
                console.log(events)
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


    render() {
        return (

            <div className="slide-img bg-img">

                <section className="events-area ">
                    <EncartBlanc
                        text1="See what’s new"
                        text2="Latests SHOWS"
                    />
                    <div className="container">
                        <div className="row">

                            {this.state.isLoading
                                ?    <Spinner/>
                                :   (

                                    <EventListLs

                                        events={this.state.events}
                                        authUserId={this.context.userId}
                                        onViewDetail={this.showDetailHandler}
                                        />
                                )
                            }




                        </div>

                        <div className="row">
                            <div className="col-12">
                                <div className="load-more-btn text-center mt-70">
                                    <a href="#" className="btn oneMusic-btn">
                                        Load More
                                        <i className="fa fa-angle-double-right"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer/>
            </div>


        );
    }
}




export default Events;
