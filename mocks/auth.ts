import { MockMethod } from 'vite-plugin-mock'
import jwt from "jsonwebtoken"
import { menuTable, roleTable, userTable } from './mockdb'

export default [
  {
    url: "/api/auth/login",
    method: "post",
    response: (payload) => {
      const { username, password } = payload.body;

      if (isAuthenticated({ username, password }) === false) {
        return {
          status: 401,
          message: "用户名或密码错误",
        };
      } else {
        const access_token = createToken({ username, password });

        return {
          status: 200,
          data: {
            access_token,
          },
        };
      }
    },
  },
  {
    url: '/api/auth/menu_info',
    method: 'get',
    response:({query}) => {
      const verify = jwt.verify(query.access_token,'secret')
      const user = userTable.find(user => user.username === verify['username'])
      const menus = roleTable.find(role => role.name === user.role).menus
      const menuList = []

      menuTable.forEach(record => {
        if(menus.indexOf(record.id) > 0) {
          menuList.push(record)
        }
      })

      return {
        status: 200,
        data: menuList
      }
    }
  }
] as MockMethod[]

function isAuthenticated({ username, password }) {
  return (userTable.findIndex(user => user.username === username && user.password === password) !== -1)
}

function createToken(payload) {
  return jwt.sign(payload, "secret");
}