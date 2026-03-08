import { Layout, Menu } from 'antd';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';

const { Header, Content, Sider } = Layout;

// const contentStyle = { padding: 45 };

function MainLayout({ selectedKeys, children, padding = 45 }) {
  const contentStyle = useMemo(() => {
    return { padding };
  }, [padding]);

  // Warning: [antd: Menu] `children` will be removed in next major version. Please use `items` instead.
  // => Menu.Item 대신에 Menu 컴포넌트에 items 객체를 넘기는 것으로 변경
  const items = [
    {
      label: <Link to="/list">설문조사 관리</Link>,
      key: 'list',
    },
  ];
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider>
        <div
          className="logo"
          style={{ height: 32, margin: 16, background: 'rgba(255,255,255,.3)' }}
        />
        <Menu
          items={items}
          theme="dark"
          mode="inline"
          selectedKeys={selectedKeys}
        >
          {/* <Menu.Item key="list">
            <Link to="/list">설문조사 관리</Link>
          </Menu.Item> */}
        </Menu>
      </Sider>
      <Layout>
        <Header />
        <Content style={contentStyle}>{children}</Content>
      </Layout>
    </Layout>
  );
}

export default MainLayout;
