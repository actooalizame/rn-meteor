import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import {Items} from '../lib/items';

Meteor.methods({
  changeStatus(itemId, status) {
    check(itemId, String);
    check(status, String);
    Items.update(itemId, {
      $set: {
        status,
      }
    });
  }
});