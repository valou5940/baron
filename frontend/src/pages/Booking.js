import React, {Component} from 'react';

class BookingPage extends Component{
    state={
        isLoading:false,
        bookings:[]
    };

    componentDidMount() {
        this.fetchBookings();
    }

    fetchBookings = () => {
        this.setState({isLoading: true})
        const requestBody = {
            query: `
                query {
                    bookings
                    {
                        _id
                       createdAt
                       event{
                       _id
                       title
                       date                       
                       }
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
                const bookings = resData.data.bookings;
                this.setState({bookings: bookings, isLoading:false})
            })
            .catch(err =>{
                console.log(err)
                this.setState({isLoading:false})
            });
    };



    render(){
        return(<ul>
            {this.state.bookings.map(booking => <li>{booking.event.title} - {booking.createdAt}</li>)}
        </ul>);
    }
}

export default  BookingPage;