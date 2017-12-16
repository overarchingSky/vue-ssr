import Vue from 'vue'
import VueAuth from 'vue-auth'
Vue.use(VueAuth, {
    auth: require('~/auth/driver'),
    http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
    router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
    // 定义登录接口，并且在登录的时候自动获取用户信息
    loginData: { url: 'login', method: 'POST', fetchUser: true },
    // 定义登出接口，目前没有对服务器发起请求
    logoutData: { method: 'PUT', makeRequest: false, redirect: '/login'},
    // 定义获取用户信息的接口
    fetchData: { url: 'information', method: 'GET', enabled: true },
    refreshData: { enabled: false },
    // 自定义用户数据解析
    parseUserData: function(data) {
        // 我们服务器返回的是字符串，按照vue-auth要求的格式，转成数组
        let roles = []
        roles.push(data.userType)
        data.info.roles = roles
        return data.info
    },
    // 定义从用户信息中的哪个字段获取用户角色
    rolesVar: 'roles'
  })