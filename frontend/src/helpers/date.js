

export const helpers = {

    monthToString: function( date){
        const date2 = new Date (date);
        const mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
        return mlist[date2.getMonth()];
    },

    sortDate :function (array) {
       return array.sort(function(a,b){
            // Turn your strings into dates, and then subtract them
            // to get a value that is either negative, positive, or zero.
            return new Date(a.date) - new Date(b.date);
        });
    },



}

export default helpers;

