import {Meteor} from 'meteor/meteor';
import {Items} from '../lib/items';
import {Cars} from '../lib/cars';

Meteor.startup(function(){
	if (Items.find().count() === 0) {
    let i = 0;
    let timestamp = (new Date()).getTime();
    while (i < 10) {
      Items.insert({
        name: `Item #${i}`,
        createdAt: new Date(timestamp),
        status: 'iddlee'
      });
      timestamp += 1; // ensure unique timestamp
      i += 1;
    }
  }
  if (Cars.find().count() === 0) {
    let timestamp = (new Date()).getTime();
      Cars.insert({
        name: 'Land Rover Discovery Sport',
        price: '22970000',
        year: '2015',
        km: '50000',
        brand: 'Land Rover',
        model: 'Discovery Sport HSE 2.0 Si4',
        equipment: 'Ultra Full - Automático',
        color: 'Negro Santorini',
        interior: 'Cuero Beige - Aluminio',
        roof: 'Sunroof Panorámico',
        security: '12 Airbags - Frenos ABS',
        createdAt: new Date(timestamp)
      });
      
  }
});