/**
 * 用户表
 */
export const userTable = [
  { id: 0, username: 'admin', password: 'admin', role: 'admin' },
  { id: 1, username: 'sbaudinet0', password: '90hEHm', role: 'guest' },
  { id: 2, username: 'mgavagan1', password: 'lYg4k0KMrQ', role: 'guest' },
  { id: 3, username: 'sknight2', password: 'CvrpQzKucZ', role: 'guest' },
  { id: 4, username: 'mbrackenbury3', password: 'pmtRWBN6j', role: 'guest' },
  { id: 5, username: 'cvandenbroek4', password: '5bSl58udE', role: 'guest' },
]

/**
 * 角色表
 */
export const roleTable = [
  { id: 1, name: 'admin', desc: '管理员', menus: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
  { id: 2, name: 'guest', desc: '访客', menus: [1, 2, 7, 9, 10] },
]

/**
 * 菜单表
 */
export const menuTable = [
  { id: 1, pid: null, key: 'home', label: '首页', icon: 'Home' },
  { id: 2, pid: null, key: 'about', label: '关于', icon: 'Infomation' },
  { id: 3, pid: null, key: 'system', label: '系统管理', icon: 'Setting' },
  { id: 4, pid: 3, key: 'account', label: '账号管理', icon: 'Account' },
  { id: 5, pid: 3, key: 'role', label: '角色管理', icon: null },
  { id: 6, pid: 3, key: 'menu', label: '菜单管理', icon: 'Menu' },
  { id: 7, pid: null, key: 'setting', label: '设置', icon: null },
  { id: 8, pid: null, key: 'log', label: '日志', icon: null },
  { id: 9, pid: null, key: 'icons', label: '图标', icon: null },
  { id: 10, pid: null, key: 'chart', label: '图表', icon: null },
]
