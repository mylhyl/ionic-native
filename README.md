# Ionic Native

## 安装

1. 安装`Cordova`和`ionic Native`插件:
```bash
ionic cordova plugin add cordova-plugin-navimap
npm install cyg-ionic-native-navimap --save
```

2. 引用插件到APP`module`或者`Component`  
全局app.module.ts文件

```typescript
@NgModule({  
  providers: [
    NaviMap
    ] 
})
```

需要用到插件的pages.ts
```typescript
@Component({
  providers: [
    NaviMap
  ]
})
```

### 使用说明

```typescript
import { NaviMap } from 'cyg-ionic-native-navimap';

@Component({ ... })
export class MyComponent {

  constructor(private naviMap: NaviMap) {

      // 高德
      naviMap.amapRoute(uri).then(res => {
        console.log(res);
      }).catch(err =>{
        alert(err);
      });

      // 百度
      naviMap.bdmapRoute(uri).then(res => {
        console.log(res);
      }).catch(err =>{
        alert(err);
      });
  }
  
}
```