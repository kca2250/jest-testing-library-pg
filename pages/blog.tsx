import axios from "axios";
import { NextPage } from "next/types";
import { useEffect, useState } from "react";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const Blog: NextPage = () => {
  // 取得したブログデータを格納するstate
  const [postDate, setPostDate] = useState<Post>();
  // 外部APIからブログデータを取得
  const getPost = async (): Promise<Post> => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    return response.data;
  };
  // レンダリング時にAPIコール関数を実行し取得したデータでstateを更新
  useEffect(() => {
    try {
      const getDate = async () => {
        const result = await getPost();
        setPostDate(result);
      };
      getDate();
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <div>
      {!postDate ? (
        <p>ローディング中</p>
      ) : (
        <p>
          記事ID{postDate.id}:{postDate.title}
        </p>
      )}
    </div>
  );
};

export default Blog;
