# wingedcare-vuelib-admin
基于Vue.js的PC后台前端公共组件库，为各个PC管理后台项目提供一套公用的前端组件。

## 用gitsubtree的方式将组件库引入具体项目代码库
（以下命令均已src/lib目录为例，分支名为develop）
- 第一次进行配置时，将组件库映射到项目代码库中的指定目录
```
git subtree add --prefix src/lib --squash git@code.aliyun.com:yunduo/wingedcare-vuelib-admin.git develop
```

- 在项目代码库中拉取组件库的更新
```
git subtree pull --prefix src/lib --squash git@code.aliyun.com:yunduo/wingedcare-vuelib-admin.git develop
```

- 将项目代码库中的更新推送到组件库
```
git subtree push --prefix src/lib --squash git@code.aliyun.com:yunduo/wingedcare-vuelib-admin.git develop
```