
import { fromJS } from 'immutable';
import { CHANGE_HOME_DATA } from './actionTypes'

const defaultState = fromJS({
  list: [],
  articleList : [],
  recomendList: [],
  writerList: []
});

export default ( state = defaultState , action ) => {
  switch(action.type){
    case CHANGE_HOME_DATA:
      return state.merge({
        list: fromJS(action.list),
        articleList: fromJS(action.articleList),
        recomendList: fromJS(action.recomendList),
        writerList: fromJS(action.writerList)
      });
    default :
      return state;
  }
};
