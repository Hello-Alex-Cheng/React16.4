import React from 'react';

/** 使用 connect 使得 当前组件 连接 store */
import { connect } from 'react-redux';

/** 导入局部样式 */
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper
} from './style'


/** 将只有一个 render() 方法的组件改装成一个 无状态组件，以提高性能 */
const Header = ( props ) => {
  return (
    <HeaderWrapper>
      <Logo />
      <Nav>
        <NavItem className ='left active'>首页</NavItem>
        <NavItem className ='left'>下载App</NavItem>
        <NavItem className ='right'>
          <i className ='iconfont'>&#xe636;</i>
        </NavItem>
        <NavItem className ='right'>登录</NavItem>
        <SearchWrapper>
          <NavSearch
            className = {props.focused ? 'focused' : ''}
            onBlur = {props.handleInputBlur}
            onFocus = {props.handleInputFocus}
          >
          </NavSearch>
          <i className = {props.focused ? 'focused iconfont' : 'iconfont'}>&#xe60c;</i>
        </SearchWrapper>
      </Nav>
      <Addition>
        <Button className ='writing'> <i className ='iconfont'>&#xe6a4;</i> 写文章</Button>
        <Button className ='reg'>注册</Button>
      </Addition>
    </HeaderWrapper>
  );
}

/** 这个方式是指 ， store 里面的数据如何映射到 props 上 , 这个state参数就是 store 里面的所有数据 */
const mapStateToProps = ( state ) => {
  return {
    focused : state.headerReducer.facused
  };
};

/** 组件和 store 连接上之后，可以通过此方法来改变 store 里面的数据 ,这个 dispatch 参数就是  store.dispatch() 方法 */
const mapDispatchToProps = ( dispatch ) => {
  return {
    handleInputBlur(){
      const action = {
        type : 'facused_to_false',
        facusedValue : false
      };
      dispatch( action );
    },
    handleInputFocus(){
      const action = {
        type : 'facused_to_true',
        facusedValue : true
      };
      dispatch( action );
    }
  };
}

export default connect( mapStateToProps, mapDispatchToProps )(Header);