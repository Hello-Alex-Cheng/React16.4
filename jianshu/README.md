一.使用 styled-components 来管理react中的样式文件
    npm install styled-components --save-dev

    使用 styled-components 创建全局样式
        injectGlobal`
          @到网上搜索 reset.css, 将其copy至此!使得项目在所有浏览器上做到统一
        `
    注意 : 写样式的时候不需要加引号 ,如 : width : 100%;
        export const Logo = styled.a.attrs({
          href : '/'  /* 在这里写属性 */
        })`
          position : absolute;
        `

二.可以使用 react-transition-group 来实现动画效果
    使用教程，可以在 github 上面搜索

三.使用 redux 以及 react-redux 来管理 state
    /** 使用 connect 使得 当前组件 连接 store */
    import { connect } from 'react-redux';
    export default connect( mapStateToProps, mapDispatchToProps )(Header);

    /** 通过 combineReducer 来整合所有组件的私有 reducer */
    /** 每一个组件都要创建一个 reducer ,这个 reducer 包含了组件的所有数据和对数据的操作*/
    /** 优点 : 简化代码，提升查询速度，性能优化 */
    import { combineReducers } from 'redux';

四.使用 immutable.js 和 redux-immutable 来保证 state 不会被改变

    import { fromJS } from 'immutable';
    const defaultState = fromJS({
        facused : false
    });

    /* combineReducers 也可以从 redux-immutable 中引入 */
    import { combineReducers } from 'redux-immutable';

五. 使用redux-thunk 及 axios 来处理异步请求

    使用 redux-thunk 来处理异步请求，派发 action 时，dispatch 会自动识别 action 参数，如果action是函数就会自动执行此函数
    如果action 是函数的话，那么action的参数就是dispatch 

    注意 : 使用create-react-app来建立工程，底层也是建立在 node 服务的基础之上的
    当我们请求数据的时候，它会先到我们的src 目录下寻找是否有对应的路由，其次还会到 public 目录下寻找
    所以我们可以将我们需要请求的 .json 数据放到 public目录下，可以通过 localhost:3000 访问到！
