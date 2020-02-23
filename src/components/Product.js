import React from 'react';
import { withRouter, Link, routerRedux } from 'dva/router'//通过标签去跳转路由
import * as api from "../services/example"
import { productUpdateList, productUpdateListAsync, productUpdateListHttp } from "../actions/index"
class Product extends React.Component {
    componentDidMount() {
        // api.getProduct()
        //     .then(res => {
        //         console.log(res);
        //     })
        api.posts()
            .then(res => {
                console.log("res.data", res);
            })
    }
    clickProductList = (event) => {
        const currentProduct = {
            name: "玉米1"
        }
        // 再不使用redux-actions用改方法触发action
        // this.props.dispatch({
        //     type: "product/updateList",
        //     payload: currentProduct
        // })

        // 使用redux-actions用改方法触发action
        this.props.dispatch(productUpdateList(currentProduct))
    }
    // 处理异步的
    clickProductListAsync = (event) => {
        const currentProduct = {
            name: "玉米2"
        }
        this.props.dispatch({
            type: "product/updateListAsync",
            payload: currentProduct
        })
    }
    // 获取网络请求
    clickProductListHttp = (event) => {
        this.props.dispatch({
            type: "product/updateListHttp",
            payload: {
                id: 1001
            }
        })
    }
    // 路由跳转withRouter 或者通过父页面将history传过来
    clickGoToHandle = (event) => {
        console.log(this.props.history);
        // this.props.history.push("/")
    }
    // 路由跳转 routerRedux 方法
    clickGoToReduxHandle = (event) => {
        this.props.dispatch(routerRedux.push("/"))
    }
    render() {
        const { productList, dispatch } = this.props.productList;
        return (<div>
            Product组件:{this.props.title}
            <ul>
                {
                    productList.map((item, index) => {
                        return <li key={index}>{item.name}</li>
                    })
                }
            </ul>
            <button onClick={this.clickProductList}>获取商品列表</button>
            <button onClick={this.clickProductListAsync}>获取商品列表Async</button>
            <button onClick={this.clickProductListHttp}>获取商品列表Http</button>
            <Link to="/"> 去首页</Link>
            <button onClick={this.clickGoToHandle}>去首页</button>
            <button onClick={this.clickGoToReduxHandle}>去首页</button>
        </div>)
    }
}
export default withRouter(Product)