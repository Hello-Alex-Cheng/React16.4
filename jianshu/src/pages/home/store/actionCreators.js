

import Axios from 'axios';
import { CHANGE_HOME_DATA } from './actionTypes'

const getHomeAction = (result) => ({
  type: CHANGE_HOME_DATA,
  articleList: result.articleList,
  list: result.list,
  recomendList: result.recomendList,
  writerList: result.writerList 
})

export const getHomeData = () => {
  return (dispatch) => {
    Axios.get("api/home.json").then( res => {
        const action = getHomeAction(res.data.data);
        dispatch(action);
      }).catch( err => {
        console.log("网络请求错误!",err);
      })
  }
};