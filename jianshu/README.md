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