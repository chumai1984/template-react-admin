const routes = [
    {
      path: '/user',
      component: '../layouts/UserLayout',
      routes: [
        {
          path: '/user/login',
          component: './user/login/index',
        },
      ],
    },
    {
      path: '/',
      component: '../layouts/SecurityLayout',
      routes: [
        {
          path: '/',
          component: '../layouts/BasicLayout',
          routes: [
            {
              path: '/',
              redirect: '/default',
            },
            {
              path: '/default',
              name: '首页',
              icon: 'iconmulu',
              component: './default/'
            },
            {
              path: '/demo',
              name: '管理页',
              icon: 'iconcitiaoshu',
              routes: [
                {
                  path: '/demo/my-app',
                  name: '我的站点',
                  icon: 'iconshoucangshu',
                  component: './demo/my-app/'
                },
                {
                  path: '/demo/basic-info',
                  name: '基本信息',
                  icon: 'iconyinyongshu',
                  component: './demo/basic-info/'
                }
              ]
            },
            {
              path: '/componentModel', // 全局组件Models，可加入路由提前渲染
              hideInMenu: true,
              routes: []
            },
            {
              component: './404',
            }
          ]
        },
      ],
    }
]

export default routes;