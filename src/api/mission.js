import {Axios,BASEURL01,param} from './config'

// 1.获取宣教分类及各分类数量
export function nurseFiles () {
  let url = BASEURL01 + 'nurseFiles'
  return Axios.get(url).then((res)=>{
    return Promise.resolve(res.data)
  })
}

// 2.获取分类下的所有文件地址/id/名称
export function nurseFilesType (data) {
  let url = BASEURL01 + 'nurseFilesType'
  return Axios.post(url,data).then((res)=>{
    return Promise.resolve(res.data)
  })
}