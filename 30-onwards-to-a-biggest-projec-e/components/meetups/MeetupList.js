import classes from './MeetupList.module.css';
import MeetupItem from './MeetupItem';

function MeetupList({props}){
  return (
    <ul className={classes.list}>
        {props.meetups.map((meetup)=>(
            <MeetupItem 
            key={meetup.id} 
            id={meetup.id}
            image={meetup.image}
            adress={meetup.adress}
            title={meetup.title}
            />
        ))}
    </ul>
  )

}

export default MeetupList;
