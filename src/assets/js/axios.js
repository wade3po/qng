import axios from 'axios'
//请求拦截器
axios.interceptors.request.use(config => {
  //请求之前处理
  return config
}, error => error);

//响应拦截器即异常处理
axios.interceptors.response.use(response => {
  return response.data;
}, error => {
  return Promise.reject(error);
});

//设置默认地址
axios.defaults.baseURL = '';
//超时时间
axios.defaults.timeout = 5000;
//设置携带cookie
// axios.defaults.withCredentials = true;

// get方法
function get(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: data
    }).then(response => {
      if(response !== 'error'){
        resolve(response);
      };
      }).catch(err => {
        console.log(err)
        reject(err)
      })
  })
}

// post请求
function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data).then(response => {
        if(response !== 'error'){
          resolve(response);
        };
      }, err => {
        console.log(err)
        reject(err)
      })
  })
}

export default {get, post}
