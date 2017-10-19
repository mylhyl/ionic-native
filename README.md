# Ionic Native

## 安装

```bash
npm install @ionic-native/navimap --save
```

### 使用

```typescript
import { NaviMap } from '@ionic-native/navimap';

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