import React from 'react';
import styles from './IndexPage.css';
// import { connect } from 'dva';
import { Menu,  } from 'antd';

const { SubMenu } = Menu;



function IndexPage() {
  return (
    
    <div style={styles.main}>
      <article className="main_left">
        <menu>
          <Menu.Item>菜单项</Menu.Item>
          <SubMenu title="子菜单"></SubMenu>
          <Menu.Item>子菜单项</Menu.Item>
      
       </menu>
      </article>
  
    </div>
  )
}

IndexPage.propTypes = {
};

export default IndexPage;
