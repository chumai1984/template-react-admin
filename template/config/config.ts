import { IConfig } from 'umi-types';
import { resolve } from 'path';
export const proxyURL = 'http://172.16.0.118:31000';

const config: IConfig = {
  treeShaking: true,
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
  plugins: [
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        dynamicImport: false,
        title: 'template-react-web',
        dll: false,
        routes: {
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
            /components\//,
          ],
        },
      },
    ],
  ],
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
  publicPath: '',
  history: 'hash',
  ignoreMomentLocale: true, // 忽略 moment 的 locale 文件，用于减少尺寸
};
export default config;
