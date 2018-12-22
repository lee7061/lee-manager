export default [
    {
        title: '首页',
        key: '/main/content',
        icon: 'windows'
    },
    {
        title: 'UI',
        key: '/main/ui',
        icon: 'dropbox',
        children: [
            {
                title: '按钮',
                key: '/main/ui/buttons'
            },
            {
                title: '弹框',
                key: '/main/ui/modals'
            },
            {
                title: 'loading',
                key: '/main/ui/loading'
            },
            {
                title: '通知提醒',
                key: '/main/ui/notification'
            },
            {
                title: '全局Message',
                key: '/main/ui/message'
            },
            {
                title: 'Tab页签',
                key: '/main/ui/tabs'
            },
            {
                title: '图片画廊',
                key: '/main/ui/gallery'
            },
            {
                title: '轮播图',
                key: '/main/ui/carousel'
            }
        ]
    },
    {
        title: '表单',
        key: '/main/form',
        icon: 'codepen',
        children: [
            {
                title: '登录',
                key: '/main/form/login'
            },
            {
                title: '注册',
                key: '/main/form/reg'
            }
        ]
    },
    {
        title: '表格',
        key: '/main/table',
        icon: 'slack',
        children: [
            {
                title: '基础表格',
                key: '/main/table/basic'
            },
            {
                title: '高级表格',
                key: '/main/table/high'
            },
        ]
    },
    {
        title: '富文本',
        key: '/main/rich',
        icon: 'medium'
    },
    {
        title: '城市管理',
        key: '/main/city',
        icon: 'linkedin'
    },
    {
        title: '订单管理',
        key: '/main/order',
        icon: 'amazon',
        children: [
            {
                title: '订单详情',
                key: '/main/order/detail'
            },
            {
                title: '结束订单',
                key: '/main/order/finish'
            },
        ]
    },
    {
        title: '员工管理',
        key: '/main/user',
        icon: 'alibaba'
    },
    {
        title: '车辆地图',
        key: '/main/bikeMap',
        icon: 'youtube'
    },
    {
        title: '图标',
        key: '/main/charts',
        icon: 'instagram',
        children: [
            {
                title: '柱形图',
                key: '/main/charts/bar'
            },
            {
                title: '饼图',
                key: '/main/charts/pie'
            },
            {
                title: '折线图',
                key: '/main/charts/line'
            }
        ]
    },
    {
        title: '权限设置',
        key: '/main/permission',
        icon: 'ant-design'
    },
];