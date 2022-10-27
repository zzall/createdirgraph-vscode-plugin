# Generate Directory Graph

自动生成目录结构图并复制到系统剪切板

## 右键左侧栏的目录

![右键左侧栏目录](https://tva1.sinaimg.cn/large/e6c9d24ely1h3ie42tbgmj20g80kw755.jpg)

## 点击之后等待复制完成

右下角弹出复制成功，此时手动粘贴即可看到目录的路径图

![点击之后等待复制完成](https://tva1.sinaimg.cn/large/e6c9d24ely1h3ie5fr9ssj210g07at9d.jpg)

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
  - 默认忽略`node_modules`
  - 可以通过新增`string`来手动控制其他要忽略的文件

![ignorefiles配置示例图](https://tva1.sinaimg.cn/large/008vxvgGly1h7k0esftj0j30s70du0tc.jpg)

- generateDirGraph.recursionDepth
  - 递归深度，默认为递归到底
  - 可以输入`number`来指定递归深度

![recursionDepth配置示例图](https://tva1.sinaimg.cn/large/008vxvgGly1h7k2w3zrutj30l80ae3yu.jpg)

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
