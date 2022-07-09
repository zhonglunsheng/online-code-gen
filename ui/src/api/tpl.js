import axios from '@/utils/request'

export function tplList () {
  return axios.post('/tpl/list')
}

export function updateTpl (data) {
  return axios.post('/tpl/update', data)
}

