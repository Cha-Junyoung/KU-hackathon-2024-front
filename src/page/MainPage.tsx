import React, {useState} from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import {Button, Layout, Menu, theme} from "antd";
import {Route, Routes, useNavigate} from "react-router-dom";
import DiaryPage from "./DiaryPage";
import MyProfilePage from "./MyProfilePage";
import GalleryPage from "./GalleryPage";

const {Header, Sider, Content} = Layout;


const MainPage = () =>  {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: {colorBgContainer, borderRadiusLG},
  } = theme.useToken();

  const navigate= useNavigate();

  const menuList = [
    {
      key: '1',
      icon: <UserOutlined/>,
      label: '일기 작성',
      onClick: () => {
        navigate("/main/diary")
      }
    },
    {
      key: '2',
      icon: <VideoCameraOutlined/>,
      label: '감정 갤러리',
      onClick: () => {
        navigate("/main/gallery")
      }
    },
    {
      key: '3',
      icon: <UploadOutlined/>,
      label: '마이페이지',
      onClick: () => {
        navigate("/main/my-profile")
      }
    },
  ]

  return (

      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical"/>
          <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={['1']}
              items={menuList}
          />
        </Sider>
        <Layout style={{
          height: "100vh"
        }}>
          <Header style={{padding: 0, background: colorBgContainer}}>
            <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: '16px',
                  width: 64,
                  height: 64,
                }}
            />
          </Header>
          <Content
              style={{
                margin: '24px 16px',
                padding: 24,
                // minHeight: 280,
                height: "100%",
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
          >
            <Routes>
              <Route path="/diary" element={<DiaryPage />}></Route>
              <Route path="/my-profile" element={<MyProfilePage />}></Route>
              <Route path="/gallery" element={<GalleryPage />}></Route>
            </Routes>
          </Content>
        </Layout>
      </Layout>
  );

}

export default MainPage;
