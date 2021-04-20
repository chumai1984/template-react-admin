import { IConfig } from 'umi-types';
import { resolve } from 'path';
export const proxyURL = 'http://172.16.0.118:31000';

const config: IConfig = {
  routes: [
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
                  path: '/demo/a',
                  name: '一级页面',
                  icon: 'iconyinyongshu',
                  component: './demo/pageA/'
                },
                {
                  path: '/demo/b',
                  name: '二级页面',
                  icon: 'iconshoucangshu',
                  component: './demo/pageB/'
                }
              ]
            },
            {
              path: '/componentModel', // 全局组件Models，可加入路由提前渲染
              hideInMenu: true,
              routes: []
            }
          ]
        },
      ],
    },
  ],
  antd: {},
  dva: {
    immer: true, // 开启dva-immer，用于代理currentState和nextState之间的改变，即当前状态修改副本
    hmr: true, // 开启模块热加载(热更新)
  },
  dynamicImport: false,
  targets: {
    ie: 9,
  },
  sass: {},
  alias: {
    components: resolve(__dirname, './src/components'),
    utils: resolve(__dirname, './src/utils'),
    config: resolve(__dirname, './src/utils/config'),
  },
  proxy: {
    '/api': {
      target: proxyURL,
      changeOrigin: true,
    },
    '/WebCore': {
      target: proxyURL,
      changeOrigin: true,
    },
  },
  publicPath: '/',
  history: {
    type: 'hash'
  },
  ignoreMomentLocale: true, // 忽略 moment 的 locale 文件，用于减少尺寸
};
export default config;
