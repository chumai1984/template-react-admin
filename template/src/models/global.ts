import {GetUserInfoByToken } from '@/services/api';
import {history} from 'umi';
import Cookies from 'js-cookie';
import configData from '@/utils/config';
const {PROXY_URL} = configData;

const Model = {
  namespace: 'global',
  state: {
    userInfo: {
      Avatar: '',
      Name: 'admin'
    },
  },
  effects: {
    // 获取用户信息
    * getUser({payload}, {call, put}){
      const res = yield call(GetUserInfoByToken, payload);
      if (res && res.result == 0) {
        yield put({
          type: 'updateState',
          payload: {
            userInfo: res.data,
          }
        });
      }
      return res;
    },
    // 退出登录
    * logout({payload}, {call, put}) {
      // 1、通知接口退出
      // 2、本地退出
      setTimeout(_=> {
        Cookies.remove('token', { path: '/' })
        if (process.env.NODE_ENV == 'development') {
          history.push('/user/login')
        }
        else {
          // @ts-ignore
          window.location = `${PROXY_URL}/api/auth/login?returnUrl=${location.href}`
        }
      }, 100)      
    }
  },
  reducers: {
    updateState(state, {payload}) {
      return {
        ...state,
        ...payload,
      }
    }
  }
}

export default Model
