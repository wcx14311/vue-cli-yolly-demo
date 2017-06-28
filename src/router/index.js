import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/view/Login'
import Agent from '@/view/Agent'

import Index from '@/view/Index'

import Recharge from '@/view/recharge/index'
import Phone from '@/view/recharge/Phone'
import Flow from '@/view/recharge/Flow'
import Qq from '@/view/recharge/Qq'

import Oto from '@/view/oto/Index'
import Account from '@/view/account/Index'

import Card from '@/view/card/Index'

import Order from '@/view/order/Index'
import orderTotal from '@/view/order/Total'
import orderTable from '@/view/order/Table'
import orderDetail from '@/view/order/Detail'

import Setting from '@/view/setting/Index'

import About from '@/view/About'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: '登录',
            component: Login
        },{
            path: '/agent',
            name: '商户平台',
            component: Agent,
            show:true,
            children: [
                {
                    path: '/agent/index', 
                    component: Index, 
                    name: '首页',
                },{ 
                	path: '/agent/recharge', 
                	component: Recharge, 
                    redirect: 'recharge/phone',
                	name: '充值中心',
                    children: [
                        {
                            path: 'phone', 
                            component: Phone, 
                            name: '手机充值' 
                        },{
                            path: 'flow', 
                            component: Flow, 
                            name: '流量充值' 
                        },{
                            path: 'qq', 
                            component: Qq, 
                            name: 'QQ充值' 
                        }
                    ]
                },{ 
                    path: '/agent/oto', 
                    component: Oto, 
                    name: 'o2o收银台' 
                },{ 
                	path: '/agent/card', 
                	component: Card, 
                	name: '号卡销售' 
                },{ 
                    path: '/agent/order', 
                    component: Order, 
                    name: '订单管理',
                    redirect: '/agent/order/index',
                    children:[
                        { path: 'index',name:'订单统计', component:orderTotal},
                        { path: 'table',name:'订单列表', component: orderTable},
                        { path: 'detial/:id',name:'订单详情', component:orderDetail}
                    ]
                },{ 
                    path: '/agent/account', 
                    component: Account, 
                    name: '财务管理' 
                },{ 
                	path: '/agent/setting', 
                	component: Setting, 
                	name: '安全设置' 
                }
            ]
        },{
            path:'/about',
            component:About,
            name:'个人简介'
        }
    ]
})
