import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout:5000
  })


  //请求拦截
  instance.interceptors.request.use(config=>{
    return config
  }),err=>{

  }

  //相应拦截
  instance.interceptors.response.use(res=>{
    return res.data
  },err =>{

  })

  //发送真正的网络求情
  return instance(config)
}
