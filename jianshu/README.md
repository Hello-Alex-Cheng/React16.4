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