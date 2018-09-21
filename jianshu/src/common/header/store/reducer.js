
const defaultState = {
  facused : false
};

/**
 * 导出一个纯函数
 * 纯函数 : 给定固定的输出，就给定固定的输出，同时不能有副作用，参数不能变化
 */

export default ( state = defaultState , action ) => {

  if( action.type === 'facused_to_true' ){
    // const newState = JSON.parse( JSON.stringify(state) );
    // newState.facused = action.facusedValue;
    // return newState;
    return {
      facused : action.facusedValue
    }
  }

  if( action.type === 'facused_to_false' ){
    // const newState = JSON.parse( JSON.stringify(state) );
    // newState.facused = action.facusedValue;
    // return newState;
    return {
      facused : action.facusedValue
    }
  }

  return state;
};
