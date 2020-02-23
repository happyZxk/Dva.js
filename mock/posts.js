const Mock = require('mockjs')
module.exports = {
    "GET /api/posts": (req, res) => {
        res.status(200).json({
            users: Mock.mock({
                'data|80-100': [{
                    id: '@id',
                    name: '@name',
                    nickName: '@last',
                    phone: /^1[34578]\d{9}/,
                    address: '@county(true)',
                    isMale: '@boolean',
                    email: '@email',
                    createTime: '@datetime',
                    avatar(){
                        return Mock.Random.image('200x100', '#894FC4', '#FFF', 'png', this.name)
                    }
                }]
            })
        })
    }
}