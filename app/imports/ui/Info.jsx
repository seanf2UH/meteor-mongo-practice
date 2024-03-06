import React from 'react';
import { useFind, useSubscribe, useTracker } from 'meteor/react-meteor-data';
import { LinksCollection } from '../api/links';
import { PeopleCollection} from '../api/PeopleCollection';
export const Info = () => {
  const isLoading = useSubscribe('links');
  const links = useFind(() => LinksCollection.find());
  const people = useTracker(() => {
    return PeopleCollection.find().fetch();
  });
  if(isLoading()) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Learn Meteor!</h2>
      <ul>{links.map(
        link => <li key={link._id}>
          <a href={link.url} target="_blank">{link.title}</a>
        </li>
      )}</ul>
    </div>
  );
};
