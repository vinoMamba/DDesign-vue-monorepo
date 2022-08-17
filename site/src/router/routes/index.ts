import { RouteRecordRaw } from 'vue-router'
import { Doc } from '../../views/Doc'
import { Home } from '../../views/Home'
import { ButtonDemo } from '../../page/ButtonDemo'
import { InputDemo } from '../../page/InputDemo'
import { MessageDemo } from '../../page/MessageDemo'
import { ModalDemo } from '../../page/ModalDemo'
import { TooltipDemo } from '../../page/TooltipDemo'
const RootRouter: RouteRecordRaw = {
  path: '/',
  name: 'Root',
  redirect: '/home',
}
const HomeRouter: RouteRecordRaw = {
  path: '/home',
  name: 'Home',
  component: Home,
}

const DocRouter: RouteRecordRaw = {
  path: '/doc',
  name: 'Doc',
  component: Doc,
  children: [
    {
      path: '/doc/button',
      component: ButtonDemo,
    },
    {
      path: '/doc/input',
      component: InputDemo,
    },
    {
      path: '/doc/message',
      component: MessageDemo,
    },
    {
      path: '/doc/modal',
      component: ModalDemo,
    },
    {
      path: '/doc/tooltip',
      component: TooltipDemo,
    },
  ],
}
const basicRoutes = [RootRouter, HomeRouter]

const RouterMap: RouteRecordRaw[] = [...basicRoutes, DocRouter]

export default RouterMap
