import styled from 'styled-components';

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
`;
export const HomeLeft = styled.div`
  float: left;
  width: 625px;
  margin-left: 15px;
  padding-top: 20px;
  .banner-img {
    width: 625px;
    height: 270px;
  }
`;
export const HomeRight = styled.div`
  float: left;
  width: 240px;
  margin-left: 15px;
  padding-top: 20px;
`;



/** Topic 部分的样式 */
export const TopicWrraper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -18px;
`;
export const TopicItem = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  font-size: 14px;
  border: 1px solid #dcdcdc;
  background-color: #f7f7f7;
  border-radius: 4px;
  padding-right: 10px;
  margin-left: 18px;
  margin-bottom: 18px;

  .topic-img {
    display: block;
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`;


/** list 部分样式 */
export const ListWrraper = styled.div`
  overflow: hidden;
  border-bottom: 1px solid #dcdcdc;
  padding: 20px 0;
  .list-img {
    display: block;
    float: right;
    width: 125px;
    height: 100px;
    border-radius: 10px;
  }
`;
export const ListInfo = styled.div`
  border-top: 1px solid #f7f7f7;
  float: left;
  width: 500px;
  .listTitle {
    font-size: 18px;
    line-height: 27px;
    font-weight: bold;
  }
  .description {
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }
`;