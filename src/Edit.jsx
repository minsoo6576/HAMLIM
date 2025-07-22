import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Card } from "antd";

const posts = [
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
    content: "10 번째 게시글 내용입니다!",
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

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find((post) => post.key === id);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <Card style={{ maxWidth: 800, margin: "24px auto" }}>
      <h2>제목: {post.title}</h2>
      <p>
        <strong>글쓴이:</strong> {post.author}
      </p>
      <p>
        <strong>만든 날짜:</strong> {post.date}
      </p>
      <p>{post.content}</p>
      <Button
        type="primary"
        style={{ display: "block", margin: "20px auto" }}
        onClick={() => navigate("/main")}
      >
        게시판 돌아가기
      </Button>
    </Card>
  );
};
export default Edit;
