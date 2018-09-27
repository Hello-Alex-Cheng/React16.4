import React, { Component } from 'react';

/** 使用 connect 将 store 和 组件 联系起来 */
import { connect } from 'react-redux';

import { 
  ListWrraper,
  ListInfo,
} from '../style';

class List extends Component {

  render(){
    const { articleList } = this.props;
    return (
      <div>
        {
          articleList.map((item) => {
            return (
              <ListWrraper key= { item.get("id") }>
                <img className= "list-img" src= { item.get("imgUrl") } alt=""/>
                <ListInfo>
                  <h3 className= "listTitle">{ item.get("title") }</h3>
                  <p className= "description">{ item.get("description") }</p>
                </ListInfo>
              </ListWrraper>
            );
          })
        }
      </div>
    );
  }
}

const mapState = (state) => ({
  articleList: state.getIn(["homeReducer","articleList"])
});

export default connect( mapState, null )(List);