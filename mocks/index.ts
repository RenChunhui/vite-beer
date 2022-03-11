import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'

import authModule from './auth'

export function mountProdMockServer() {
  createProdMockServer([...authModule])
}
