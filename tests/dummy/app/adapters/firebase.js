import DS from 'ember-data';
import config from '../config/environment';
import Firebase from 'firebase';


export default DS.FirebaseAdapter.extend({
  firebase: new Firebase(config.firebase)
});
