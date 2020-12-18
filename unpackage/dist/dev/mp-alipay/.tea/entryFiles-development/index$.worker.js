if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


      if( navigator.userAgent && (navigator.userAgent.indexOf('LyraVM') > 0 || navigator.userAgent.indexOf('AlipayIDE') > 0) ) {
        var AFAppX = self.AFAppX.getAppContext ? self.AFAppX.getAppContext().AFAppX : self.AFAppX;
      } else {
        importScripts('https://appx/af-appx.worker.min.js');
        var AFAppX = self.AFAppX;
      }
      self.getCurrentPages = AFAppX.getCurrentPages;
      self.getApp = AFAppX.getApp;
      self.Page = AFAppX.Page;
      self.App = AFAppX.App;
      self.my = AFAppX.bridge || AFAppX.abridge;
      self.abridge = self.my;
      self.Component = AFAppX.WorkerComponent || function(){};
      self.$global = AFAppX.$global;
      self.requirePlugin = AFAppX.requirePlugin;
    

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}



function success() {
require('../../app');
require('../../components/search?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/preferent?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/suzhou?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-ui/uni-icons/uni-icons?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-ui/uni-transition/uni-transition?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-ui/uni-popup/uni-popup?hash=fb60a7b8055ddef71c4ed9b18246835b601b8200');
require('../../pages/index/index?hash=d9dfb6ec07db4a6680c135b0eb7247a0d0c77a5c');
require('../../pages/find/find?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/cart/cart?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/map/map?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/mine/mine?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/hotelDetails/hotelDetails?hash=bb1440eb76e87058c7b3775b1f100cd23646587b');
require('../../pages/trafficGuidance/trafficGuidance?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/viewAllphotos/viewAllphotos?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/toViewmore/toViewmore?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/viewDetails/viewDetails?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}