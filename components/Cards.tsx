type User = {
  id: number;
  name: string;
};

type CardProps = {
  userInfos: User[];
};

export const Cards: React.FC<CardProps> = ({ userInfos }) => {
  return (
    <>
      {userInfos.length === 0 ? (
        <p>ユーザー情報はありません。</p>
      ) : (
        <ul>
          {userInfos.map((userInfo) => (
            <li key={userInfo.id}>
              id:{userInfo.id} / name:{userInfo.name}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
