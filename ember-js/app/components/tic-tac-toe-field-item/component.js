import Ember from 'ember';
import GameTypes from 'ember-js/mixins/game-types';
import EventList from 'ember-js/mixins/event-list';
import EventManaging from 'ember-js/mixins/event-managing';

export default Ember.Component.extend(GameTypes, EventList, EventManaging, {

  selectedType: '',

  selectedGameTypeObserver: function() {
    this.set('selectedType', '');
  }.observes('selectedUserGameType'),

  selectedPartnerFieldObserver: function() {
    let selectedPartnerField =  this.get('selectedPartnerField');
    console.log(selectedPartnerField)
    let index = this.get('index');

    if (selectedPartnerField === index) {
      this.set('selectedType', this.get('selectedPartnerGameType'));
    }
  }.observes('selectedPartnerField'),


  actions: {

    select() {
      this.set('selectedType', this.get('selectedUserGameType'));
      this.dispatchEvent({
        eventName: this.eventList.USER_HAS_SELECTED_ITEM,
        eventObject: {
          selectedIndex: this.get('index')
        }
      });
    }
  }

})
