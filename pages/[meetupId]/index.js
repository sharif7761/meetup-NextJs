import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails(){
    return (
        <MeetupDetail 
            image = "https://picsum.photos/200/300"
            title = "A First Meetup"
            address = "Uttara, Dhaka"
            description = "The meetup description"
        />
    )
}

export default MeetupDetails;