import AppOverlay from './src/AppOverlay';

AppOverlay.install = function(Vue) {
  Vue.component(AppOverlay.name, AppOverlay);
};

export default AppOverlay;
