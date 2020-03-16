/* import AppRating from './AppRating';
import AppOverlay from './AppOverlay';
import AnimationSatellite from './AnimationSatellite';

export {
  AppRating,
  AppOverlay,
  AnimationSatellite,
}; */
import Vue from 'vue';
import AppRating from './AppRating';
import AppOverlay from './AppOverlay';
import AnimationSatellite from './AnimationSatellite';

const Components = {
  AppRating,
  AppOverlay,
  AnimationSatellite,
};

Object.keys(Components).forEach((name) => {
  Vue.component(name, Components[name]);
});

export default Components;
