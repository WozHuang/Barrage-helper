# barrage-helper

> 一个使用electron-vue制作的弹幕助手

> **2023年3月更新**
>
> 由于年久失修，折腾了好久才把项目跑起来，必须使用 node v14，而且 node-sass 也相当坑爹
>
> 服务器也没有续费所以接口暂时也不能用了😂
>
> 依赖的[虎牙开放弹幕api](https://open.huya.com/index.php?m=Open&wiki=barrage)也不维护了
>
> electron-vue 也弃坑挺久了，可能后面会花点时间重新用 react 实现一遍吧
>
> 虎牙的周星星永远是我的最爱，我永远 ❤️ 周 ⭐⭐

目前只有连接虎牙弹幕的功能，目前能够

- 获取房间信息
- 播报弹幕
- 窗口置顶

### 预览
![](assets/preview1.png)![](assets/preview2.png)![](assets/preview3.png)

### 开始

``` bash

# 启动
npm run dev

```

---

解决node 14.4下打包报错的问题，[参考](https://www.jianshu.com/p/bdf0a23e7257)

Generated with [electron-vue](https://github.com/SimulatedGREG/electron-vue)
