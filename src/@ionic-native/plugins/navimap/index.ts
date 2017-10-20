import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';

/**
 * @name NaviMap
 * @description
 * Cordova NaviMap Plugin call app,use Baidu Map APP and Amap App.
 *
 * @usage
 * ```typescript
 * import { NaviMap } from 'cyg-ionic-native-navimap';
 *
 * constructor(private naviMap: NaviMap) { }
 *
 * ...
 *
 * this.naviMap.amapRoute('uri')
 *   .then(res => {console.log(res)})
 *   .catch(err => {console.log(err)});
 *
 * ```
 */
@Plugin({
  pluginName: 'NaviMap',
  plugin: 'cordova-plugin-navimap',
  pluginRef: 'cordovaNaviMap',
  repo: 'https://github.com/mylhyl/cordova-plugin-naviMap',
  platforms: ['Android', 'iOS']
})
@Injectable()
export class NaviMap extends IonicNativePlugin {

 /**
   * amap app navi
   * @param uri {string}
   * @returns {Promise<any>}
   */
  @Cordova()
  amapRoute(uri: string): Promise<any> { return; }

 /**
   * baidumap app navi
   * @param uri {string}
   * @returns {Promise<any>}
   */
  @Cordova()
  bdmapRoute(uri: string): Promise<any> { return; }
}
