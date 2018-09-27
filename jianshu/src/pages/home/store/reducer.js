
import { fromJS } from 'immutable';

const defaultState = fromJS({
  list: [
    {
      id: 1,
      title: '社会热点',
      imgUrl: '//upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    },
    {
      id: 2,
      title: '手绘',
      imgUrl: '//upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    },
    {
      id: 3,
      title: '简书电影',
      imgUrl: '//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    },
    {
      id: 4,
      title: '@IT.互联网',
      imgUrl: '//upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    },
  ],
  articleList : [
    {
      id: 1,
      imgUrl: "//upload-images.jianshu.io/upload_images/12591548-648c287d74fe98e0.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
      title: "做鱼汤只要多加这一个技巧，煮出的汤白如牛奶，好喝的不要不要",
      description: "鱼汤有很高的滋补功效，很适合给一个体质较虚的人补身体，味道鲜美可口，是一道人见人爱的美食，下面教你怎么制作出美味的鱼汤。鞋铺：LV6221716..."
    },
    {
      id: 2,
      imgUrl: "//upload-images.jianshu.io/upload_images/11077069-2978635aee6c8a25.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
      title: "我的碎片化时间管理——好用APP分享",
      description: "鱼汤有很高的滋补功效，很适合给一个体质较虚的人补身体，味道鲜美可口，是一道人见人爱的美食，下面教你怎么制作出美味的鱼汤。鞋铺：LV6221716..."
    },
    {
      id: 3,
      imgUrl: "//upload-images.jianshu.io/upload_images/10297697-f13f60e47bca22b9.jpg!web?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
      title: "月薪8k和月薪38K的程序员差距在哪里？",
      description: "鱼汤有很高的滋补功效，很适合给一个体质较虚的人补身体，味道鲜美可口，是一道人见人爱的美食，下面教你怎么制作出美味的鱼汤。鞋铺：LV6221716..."
    }
  ]
});

export default ( state = defaultState , action ) => {
  switch(action.type){
    default :
      return state;
  }
};
