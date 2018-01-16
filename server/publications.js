import {Items} from '../lib/items';
import {Cars} from '../lib/cars';

Meteor.publish('items', function(){
	return Items.find();
});

Meteor.publish('cars', function(){
 return Cars.find();
});