import { useNavigate } from 'react-router-dom';
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage(){
    const navigate = useNavigate();

    function addMeetupHandler(meetupData){
        
        fetch("https://meetup-react-24814-default-rtdb.firebaseio.com/meetups.json", {
            "method": "POST",
            "body": JSON.stringify(meetupData),
            "headers": {
                "Content-Type": "application/json"
            }
        })
        .then(response => {
            navigate('/');
        })
        .catch(err => {
            console.error(err);
        });
    }

    return (
        <div>
            <h1>New meetup page</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </div>
    );
}

export default NewMeetupPage;