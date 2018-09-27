import React, { Component } from 'react';

/** 引入组件 */
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';

/** 引入样式 */
import { 
  HomeWrapper,
  HomeLeft,
  HomeRight

} from './style';

class Home extends Component {
  render(){
    return (
      <HomeWrapper>

        {/* 左侧内容 */}

        <HomeLeft>
          <img className= "banner-img" src="//upload.jianshu.io/admin_banners/web_images/4482/daee8160945497802b201ce1ae1fa5395b85a51b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
          <Topic></Topic>
          <List></List>
        </HomeLeft>

        {/* 右侧内容 */}

        <HomeRight>
          <Recommend></Recommend>
          <Writer></Writer>
        </HomeRight>
      </HomeWrapper>
    );
  }
}

export default Home;