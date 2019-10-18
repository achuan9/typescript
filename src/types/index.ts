export type Method = 'get' | 'GET' | 'delete' | 'DELETE' | 'post' | 'POST'
export interface AxiosRequestConfig {
  url: string
  method?: Method
  data?: any
  params?: any
}
