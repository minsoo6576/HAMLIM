import { UserOutlined } from "@ant-design/icons";
import { Layout, Menu, Table, Button, Modal } from "antd";
import React, { useState, useEffect } from "react";
import "./MainPage.css";
import { useNavigate } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;

//임의의 게시물 15개 생성
const defaultPosts = [
  {
    key: "1",
    title: "Post 1",
    author: "박민수",
    date: "2025-07-22",
    content: "1번째 게시글 내용입니다!",
  },
  {
    key: "2",
    title: "Post 2",
    author: "김영희",
    date: "2025-07-23",
    content: "2번째 게시글 내용입니다!",
  },
  {
    key: "3",
    title: "Post 3",
    author: "이철수",
    date: "2025-07-24",
    content: "3번째 게시글 내용입니다!",
  },
  {
    key: "4",
    title: "Post 4",
    author: "최지우",
    date: "2025-07-25",
    content: "4번째 게시글 내용입니다!",
  },
  {
    key: "5",
    title: "Post 5",
    author: "홍길동",
    date: "2025-07-26",
    content: "5번째 게시글 내용입니다!",
  },
  {
    key: "6",
    title: "Post 6",
    author: "박지민",
    date: "2025-07-27",
    content: "6번째 게시글 내용입니다!",
  },
  {
    key: "7",
    title: "Post 7",
    author: "이수정",
    date: "2025-07-28",
    content: "7번째 게시글 내용입니다!",
  },
  {
    key: "8",
    title: "Post 8",
    author: "김철수",
    date: "2025-07-29",
    content: "8번째 게시글 내용입니다!",
  },
  {
    key: "9",
    title: "Post 9",
    author: "최영희",
    date: "2025-07-30",
    content: "9번째 게시글 내용입니다!",
  },
  {
    key: "10",
    title: "Post 10",
    author: "박준형",
    date: "2025-07-31",
    content: "10번째 게시글 내용입니다!",
  },
  {
    key: "11",
    title: "Post 11",
    author: "이민호",
    date: "2025-08-01",
    content: "11번째 게시글 내용입니다!",
  },
  {
    key: "12",
    title: "Post 12",
    author: "김소연",
    date: "2025-08-02",
    content: "12번째 게시글 내용입니다!",
  },
  {
    key: "13",
    title: "Post 13",
    author: "최준호",
    date: "2025-08-03",
    content: "13번째 게시글 내용입니다!",
  },
  {
    key: "14",
    title: "Post 14",
    author: "박지영",
    date: "2025-08-04",
    content: "14번째 게시글 내용입니다!",
  },
  {
    key: "15",
    title: "Post 15",
    author: "이현우",
    date: "2025-08-05",
    content: "15번째 게시글 내용입니다!",
  },
];
export default function MainPage() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedKey, setSelectedKey] = useState(null);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const stored = sessionStorage.getItem("posts");
    if (stored) {
      setPosts(JSON.parse(stored));
    } else {
      setPosts(defaultPosts);
      sessionStorage.setItem("posts", JSON.stringify(defaultPosts));
    }
    const u = sessionStorage.getItem("username");
    const p = sessionStorage.getItem("password");
    if (u) setUsername(u);
    if (p) setPassword(p);
  }, []);
  const showModal = (key) => {
    setSelectedKey(key);
    setIsModalOpen(true);
  };
  
  const handleOk = () => {
    const updated = posts.filter((post) => post.key !== selectedKey);
    setPosts(updated);
    sessionStorage.setItem("posts", JSON.stringify(updated));
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  //게시판 행 종류 설정, 목록 표시
  const columns = [
    {
      title: "No",
      key: "no",
      render: (_, __, index) => index + 1, // 행 순번 표시
    },

    { title: "제목", dataIndex: "title", key: "title" },
    { title: "작성자", dataIndex: "author", key: "author" },
    { title: "작성일", dataIndex: "date", key: "date" },
    {
      title: "수정 및 삭제",
      key: "actions",
      render: (_, record) => (
        <>
          <Button
            type="link"
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/posts/${record.key}/edit`); //수정 페이지로 이동
            }}
          >
            수정
          </Button>

          <Button
            type="link"
            onClick={(e) => {
              e.stopPropagation();
              showModal(record.key);
            }}
          >
            삭제
          </Button>
        </>
      ),
    },
  ];

  return (
    <Layout>
      <Sider>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "게시판",
            },
          ]}
        />
        <div>
          <p
            style={{
              color: "white",
              textAlign: "center",
              marginTop: "600px",
            }}
          >
            {username ? `환영합니다, ${username}님!` : "로그인해주세요."}{" "}
          </p>
          <p style={{ color: "white", textAlign: "center" }}>
            {password ? `비밀번호: ${password}` : ""}
          </p>
        </div>
      </Sider>
      <Layout>
        <Header
          className="site-layout-sub-header-background"
          style={{
            padding: 0,
            marginBottom: "-70px",
          }}
        />
        <Content
          style={{
            margin: "0",
            height: "100vh",
            overflow: "initial",
            backgroundColor: "#f0f2f5",
          }}
        >
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 1000,
            }}
          >
            <Table
              columns={columns}
              dataSource={posts}
              pagination={{
                pageSize: 10,
                size: "small",
                position: ["bottomCenter"],
              }}
              rowKey="key"
              onRow={(record) => ({
                onClick: () => navigate(`/posts/${record.key}`),
              })}
              style={{ margin: 0 }}
            />
            <Modal
              title="게시글 삭제"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <p>정말로 이 게시글을 삭제하시겠습니까?</p>
            </Modal>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}
