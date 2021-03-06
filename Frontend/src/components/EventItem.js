import React from 'react'
import { Item, Button } from 'semantic-ui-react'

const PLACEHOLDER_IMG="http://s3shopback.s3-ap-southeast-1.amazonaws.com/my/wp-content/uploads/2015/03/happy-party.jpg"

function millisToMinutesAndSeconds(millis) {
  
  var minutes = Math.floor(millis / 60000);
  var hours = Math.floor(minutes/60);
  return hours + ":" + (minutes%60 > 10 ? minutes%60 : "0" + minutes%60 );
}

//-----Note this event is from the DB not from Meetups
const EventItem = ({eventItem, removeEventFromUser}) =>

<Item>
    <Item.Image size='small' src={eventItem.photo_url ? eventItem.photo_url : PLACEHOLDER_IMG} />
      <Item.Content verticalAlign="middle">
        <Item.Header>{!eventItem.name ? null:eventItem.name}</Item.Header>
        <Item.Meta>Description</Item.Meta>
        <Item.Description>
          <p>{!eventItem.description ? null : eventItem.description}</p>
        </Item.Description>
        <Item.Extra>Time: {!eventItem.time ? null : eventItem.time} </Item.Extra>
        <Item.Extra>Duration: {!eventItem.duration ? null : millisToMinutesAndSeconds(eventItem.duration)} </Item.Extra>
        <Item.Extra>Location: {!eventItem.address ? null : eventItem.address}, {!eventItem.city ? null : eventItem.city} </Item.Extra>
        <a href={eventItem.event_url} target="_blank">View Meetup Page</a>
        <Button secondary floated="right" onClick={() => removeEventFromUser(eventItem)}>Remove from list</Button>
      </Item.Content>
</Item>


export default EventItem


 