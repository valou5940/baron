
const Event = require('../../models/event');
const User  = require('../../models/user');
const {transformEvent} = require('./merge')



module.exports = {

    events: async () =>{
        try {
            const events = await Event.find();
            return events.map(event => {
                return transformEvent(event);
            });
        }catch (e) {
            throw e;
        }
    },

    createEvent: async (args, req) => {

        if (!req.isAuth){
            console.log(`req = ${req.isAuth}`);
            throw new Error('Unauthentificated');
        }
        const event = new Event({
            barName: args.eventInput.barName,
            eventName: args.eventInput.eventName,
            fbLink: args.eventInput.fbLink,
            date: new Date(args.eventInput.date),

        });
        let createdEvent;
        try {
            const result = await event.save();
            console.log(result);
            createdEvent = transformEvent(result);
            console.log(createdEvent);
            return createdEvent;
        }catch (e) {
            throw e;
        }

    },
    cancelEvent: async (args, req) => {
        if (!req.isAuth){
            throw new Error('Unauthentificated');
        }
        let createdEvent;
        try{
            const event = await Event.findById(args.eventId);
            console.log(event)
            createdEvent = transformEvent(event);
            await Event.deleteOne({_id: args.eventId});
            return event;
        }catch (e) {
            throw e;
        }
    }

};








