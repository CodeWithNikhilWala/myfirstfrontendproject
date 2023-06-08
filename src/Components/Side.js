import {
  CloudFilled,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  StarOutlined,
  SettingOutlined,
  CameraOutlined
} from '@ant-design/icons';
import Add from './Add'
import Avater from './Avater';
import Card from './Card';

import { Button, Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import Search from 'antd/es/transfer/search';
import { icons } from 'antd/es/image/PreviewGroup';

const { Header, Sider, Content } = Layout;
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (

    <Layout>

      <Sider trigger={null} collapsible collapsed={collapsed} className='sider' >

        <div className="demo-logo-vertical" />
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: '16px',
            width: 48,
            height: 48,
          }}
        />
        <Avater />
        {/* <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
        <a href="https://ant.design">
          <Avatar
            style={{
              backgroundColor: '#f56a00',
            }}
          >
            
          </Avatar> */}
        <Menu
          theme="dark"
          mode="inline"

          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <CloudFilled />,
              label: 'My Cloud',
            },
            {
              key: '2',
              icon: <StarOutlined />,
              label: 'Shared Filed',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'Favorited Failed',
            },
            {
              key: '4',
              icon: <UploadOutlined />,
              label: 'Upload Files',
            },

            {
              key: '5',
              className: 'mt-5',
              icon: <SettingOutlined />,
              label: 'Settings',

            },
            {
              key: '5',
              icon: <SettingOutlined />,
              label: 'LogOut',

            }

          ]}
        />
      </Sider>
      <Layout>
        {/* <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header> */}
        <Content className='contentlayout'
          style={{

            padding: 12,
            minHeight: 480,

            background: colorBgContainer,

          }}
        >

          <Search placeholder='Search'>Search</Search>
          <h5 className='my-3'>Catagories</h5>

          <Card />
           

        </Content>
      </Layout>
    </Layout>

  );
};
export default App;