import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: "A First Meetup",
        image: 'https://picsum.photos/200/300',
        address: 'Uttara, Dhaka',
        description: 'This is first meetup'
    },
    {
        id: 'm2',
        title: "A Second Meetup",
        image: 'https://picsum.photos/200/300',
        address: 'Uttara, Dhaka',
        description: 'This is Second meetup'
    },
    {
        id: 'm3',
        title: "A Third Meetup",
        image: 'https://picsum.photos/200/300',
        address: 'Uttara, Dhaka',
        description: 'This is Third meetup'
    },
]


function HomePage() {
    return <MeetupList meetups={DUMMY_MEETUPS} />

}

export default HomePage;