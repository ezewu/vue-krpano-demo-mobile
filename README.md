# vue-krpano-demo-mobile

> vue与krpano结合 手机端案例,鸣谢vue-krpano 请用谷歌浏览器 打开发者模式 并且调出手机端测试界面。



[在线体验](http://www.deyou360.com/ydkrpano/index.html#/shangjie)




## 本地运行

``` bash
# 安装运行依懒
npm i

# 启动运行，监听在8080端口
npm run serve

# 打包部署
npm run build

```

3D Max行走全景制解决方案
食用方法
1，三维软件使用毫米做为单位，所有房门打开，上个点位跟下个点位都能看到。
2，像机全部朝向正北（Top视图里面就是朝向屏幕上方），渲染出2:1全景图。
3，全景图保存的名字，跟像机名称一致（例如像机名称001，保存的全景图也叫001.jpg,001.tif等）。
4，全部全景图渲染完成保存后，在三维软件删除全部物体只留像机，然后导出fbx模型，留意导出时的Z轴正负。
5，把所有全景图拖到krpano软件里面切图，生成全景图项目。
6，打开https://deyou360.com/maxpano/index.html网址，复制某一个场景的切图信息粘贴到输入栏，把fbx模型拖到上传框内，会生成一个zip文件下载，解压zip文件，复制里面全部文件，粘贴到krpano切图生成的项目文件夹内。
7，三维软件删除所有灯光，材质，贴图，像机，清理干净，只留下模型（模型太大需要做简面操作），模型应用所有修改器，把所有模型塌陷成一个，多边形编辑模式下焊接顶点（给适当的参数），把模型放大到100倍，然后导出为stl格式文件。
8，导出的stl文件上传到 http://krpano360.com/stltodepth/convert.html 网址生成dept文件，得到的dept文件拷贝到model文件夹内。
9，体验地址 https://deyou360.com/ycshuzikeji/index.html



## 如果有帮助到你请给我一个start 谢谢！

