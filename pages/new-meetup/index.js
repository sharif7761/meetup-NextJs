import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function NewMeetupPage(){
    function addMeetupHandler(entereMeetupData){
        console.log(entereMeetupData);   
    }

    return <NewMeetupForm onAddMeetup={addMeetupHandler} />
       
}

export default NewMeetupPage;