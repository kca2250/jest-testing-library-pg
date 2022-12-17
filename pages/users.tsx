import axios from "axios";
import { NextPage } from "next";
import { useState } from "react";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

const User: NextPage = () => {
  // 取得したブログデータを格納するstate
  const [user, setUser] = useState<User>();
  const [error, setError] = useState<string>("");
  // 外部APIからブログデータを取得
  const getUser = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      // 必要な情報だけ抽出する
      const userInfo = {
        id: response.data.id,
        name: response.data.name,
        username: response.data.username,
        email: response.data.email,
      };
      setUser(userInfo);
    } catch (e) {
      setError("Request failed");
    }
  };

  return (
    <div>
      {!user && !error && (
        <>
          <p>データはありません</p>
          <button onClick={getUser}>ユーザー情報を取得</button>
        </>
      )}
      {user && <h3>名前: {user.name}</h3>}
      {error && <p data-testid="error">{error}</p>}
    </div>
  );
};

export default User;
