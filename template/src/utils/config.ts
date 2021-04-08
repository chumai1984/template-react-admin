import {proxyURL} from '../../config/config.ts'

const config = {
  PAGE_NUM: 1,
  PAGE_SIZE: 20,
  NODE_ENV: process.env.NODE_ENV,
  PROXY_URL: proxyURL,
  PUBLIC_PATH: process.env.NODE_ENV === 'production' ? '/inwriter' : ''
};
export default config
