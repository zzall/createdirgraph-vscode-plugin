# Generate Directory Graph

自动生成目录结构图并复制到系统剪切板

## 右键左侧栏的目录

![右键左侧栏目录](https://camo.githubusercontent.com/90d219e8b093221b6387981a46ff437304442ffaf51fbcf26dbb5286d6bdbf1e/68747470733a2f2f747661312e73696e61696d672e636e2f6c617267652f65366339643234656c79316833696534327462676d6a32306738306b773735352e6a7067)

## 点击之后等待复制完成

右下角弹出复制成功，此时手动粘贴即可看到目录的路径图

![点击之后等待复制完成](https://camo.githubusercontent.com/77ff0d01d5883cdf26b1179746fa98986558e4102baca9bc3f16cb4eaf2a1247/68747470733a2f2f747661312e73696e61696d672e636e2f6c617267652f65366339643234656c7931683369653566723973736a323130673037617439642e6a7067)

## 成品图样式

```
├── .DS_Store
├── images
│   ├── .DS_Store
│   ├── bg.png
│   ├── icon_arrow.png
│   ├── icon_cancel.png
│   ├── icon_close.png
│   ├── icon_safe.png
│   ├── icon_trans.png
│   ├── icon_vip_activited.png
│   └── main_bg_pink.webp
├── index.less
└── index.vue
```

## 配置

- generateDirGraph.ignorefiles
  - 默认忽略`node_modules`、`.git`
  - 可以通过新增`string`来手动控制其他要忽略的文件

![ignorefiles配置示例图](https://camo.githubusercontent.com/878c2acceabd6be32184c60666ea69089cc30fe5b08c3a0db73b7e64d8f0fe0a/68747470733a2f2f747661312e73696e61696d672e636e2f6c617267652f30303876787667476c793168376b30657366746a306a333073373064753074632e6a7067)

- generateDirGraph.recursionDepth
  - 递归深度，默认为递归到底
  - 可以输入`number`来指定递归深度

![recursionDepth配置示例图](https://camo.githubusercontent.com/c2889a54b2ed818a9b3334f3308716fe0e0a7036b5afd4c04026a8ac87379473/68747470733a2f2f747661312e73696e61696d672e636e2f6c617267652f30303876787667476c793168376b3277337a7275746a33306c383061653379752e6a7067)

## 安装

### 本地安装

1. 将目录的`.vsix`文件下载到本地
2. vscode 中打开插件侧边栏
3. 点击`...`
4. 点击`从VSIX安装...`
5. 选择下载好的`.vsix`文件即可

### vscode 插件市场安装

- 直接在 vscode 左侧边栏找到「插件拓展」搜索`Generate Directory Graph`安装即可
  ![vscode安装插件](https://tva1.sinaimg.cn/large/e6c9d24ely1h3javpumtvj20mq1aiq8k.jpg)
- 在 vscode 的[官网插件市场](https://marketplace.visualstudio.com/)搜索`Generate Directory Graph`下载
  ![插件市场安装](https://tva1.sinaimg.cn/large/e6c9d24ely1h3jax8p61yj218p0u0gqx.jpg)

## 感谢

插件继续大家的安装使用和打分支持！！！感谢！！！
