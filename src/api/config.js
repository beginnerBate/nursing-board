export function param(data) {
  let url = ''
  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    url += '&' + k + '=' + encodeURIComponent(value)
  }
  return url ? url.substring(1) : ''
}
export const BASEURL01 = 'http://192.168.0.113/intelligent-nurse-front-webservice/'
export const BASEURL02= 'http://192.168.0.104/intelligent-nurse-front-webservice/'