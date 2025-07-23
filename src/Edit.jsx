import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Card, Form, Input, message } from "antd";

export default function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [form] = Form.useForm();

  useEffect(() => {
    const stored = sessionStorage.getItem("posts");
    const list = stored ? JSON.parse(stored) : [];
    setPosts(list);

    const post = list.find((post) => post.key === id);
    if (!post) {
      return <div>Post not found</div>;
    }
    form.setFieldsValue({
      title: post.title,
      author: post.author,
      content: post.content,
    });
  }, [id, form, navigate]);

  const onFinish = (values) => {
    const updatedPosts = {
      key: id,
      title: values.title,
      author: values.author,
      content: values.content,
      date: values.date || posts.find((p) => p.key === id).date,
    };

    const newList = posts.map((post) =>
      post.key === id ? updatedPosts : post
    );
    setPosts(newList);
    sessionStorage.setItem("posts", JSON.stringify(newList));

    message.success("게시글이 수정되었습니다!");
    navigate(`/posts/${id}`);
  };

  return (
    <Card style={{ maxWidth: 600, margin: "24px auto" }}>
      <h2 style={{ textAlign: "center" }}>게시글 수정</h2>
      <Form
        form={form}
        layout="vertical"
        initialValues={{
          title: posts.title,
          author: posts.author,
          content: posts.content,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="title"
          label="제목"
          rules={[{ required: true, message: "제목을 입력해주세요!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="author"
          label="글쓴이"
          rules={[{ required: true, message: "글쓴이를 입력해주세요!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="content"
          label="내용"
          rules={[{ required: true, message: "내용을 입력해주세요!" }]}
        >
          <Input.TextArea rows={6} />
        </Form.Item>

        <Form.Item style={{ textAlign: "center" }}>
          <Button onClick={() => navigate(`/main`)} style={{ marginRight: 8 }}>
            취소
          </Button>
          <Button type="primary" htmlType="submit">
            수정
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}
