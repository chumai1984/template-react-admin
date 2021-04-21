import {proxyURL} from '../../config/config.ts'

export const PAGE_NUM = 1;
export const PAGE_SIZE = 20;
export const NODE_ENV = process.env.NODE_ENV;
export const PROXY_URL = proxyURL;
export const PUBLIC_PATH = process.env.NODE_ENV === 'production' ? '/inbiz' : ''

const config = {
  PAGE_NUM,
  PAGE_SIZE,
  NODE_ENV,
  PROXY_URL,
  PUBLIC_PATH,
};
export default config