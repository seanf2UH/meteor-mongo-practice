import { Mongo } from 'meteor/mongo';
import 'meteor/aldeed:collection2/static';
import SimpleSchema from 'simpl-schema';

const peopleSchema = new SimpleSchema(
  {
    first: String,
    last: String,
    age: SimpleSchema.Integer,
    city: String
  }
);

export const PeopleCollection = new Mongo.Collection('People');

PeopleCollection.attachSchema(peopleSchema);