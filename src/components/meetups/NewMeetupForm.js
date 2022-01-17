import { useRef } from 'react';

import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

function NewMeetupForm(props){
    const titleRef = useRef();
    const imageRef = useRef();
    const descRef = useRef();
    const addrRef = useRef();

    function submitHandler(event){
        event.preventDefault();
        const title = titleRef.current.value;
        const image = imageRef.current.value;
        const desc = descRef.current.value;
        const addr = addrRef.current.value;

        const meetupData = {
            title: title,
            image: image,
            description: desc,
            address: addr
        }
        props.onAddMeetup(meetupData);
    }

    return (
        <Card>
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor='title'>Meetup Title</label>
                <input type="text" required id="title" ref={titleRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='image'>Meetup Image</label>
                <input type="url" required id="image" ref={imageRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='address'>Address</label>
                <input type="text" required id="address" ref={addrRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='description'>Description</label>
                <textarea required id="description" rows='5' ref={descRef}></textarea>
            </div>
            <div className={classes.actions}>
                <button>Add Meetup</button>
            </div>
        </form>
        </Card>);
}

export default NewMeetupForm;