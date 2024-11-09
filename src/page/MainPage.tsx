import React, {useState} from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ReadOutlined,
  UserOutlined,
  AppstoreOutlined,
} from '@ant-design/icons';
import {Button, Layout, Menu, theme} from "antd";
import {Route, Routes, useNavigate} from "react-router-dom";
import DiaryPage from "./DiaryPage";
import MyProfilePage from "./MyProfilePage";
import GalleryPage from "./GalleryPage";
import {useRecoilState} from "recoil";
import menuAtom from "../recoil/menu";
import AnonymousGalleryPage from "./AnonymousGalleryPage";

const {Header, Sider, Content} = Layout;


const MainPage = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: {colorBgContainer, borderRadiusLG},
  } = theme.useToken();

  const [menu, setMenu] = useRecoilState(menuAtom);

  const navigate = useNavigate();

  const menuList = [
    {
      key: '1',
      icon: <ReadOutlined/>,
      label: '오늘의 질문',
      onClick: () => {
        navigate("/main/diary")
        setMenu({id: "1"})

      }
    },
    {
      key: '2',
      icon: <AppstoreOutlined />,
      label: '감정 갤러리',
      onClick: () => {
        navigate("/main/gallery")
        setMenu({id: "2"})
      }
    },
    {
      key: '3',
      icon: <UserOutlined/>,
      label: '마이페이지',
      onClick: () => {
        navigate("/main/my-profile")
        setMenu({id: "3"})
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
              // defaultSelectedKeys={['1']}
              selectedKeys={[menu.id]}
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
            <span style={{fontSize: "20px", fontWeight: "bold"}}>아:경</span>
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
              <Route path="/diary" element={<DiaryPage/>}></Route>
              <Route path="/my-profile" element={<MyProfilePage/>}></Route>
              <Route path="/gallery" element={<GalleryPage/>}></Route>
                <Route path="/gallery/:diaryId" element={<AnonymousGalleryPage/>}></Route>
            </Routes>
          </Content>
        </Layout>
      </Layout>
  );

}

export default MainPage;
