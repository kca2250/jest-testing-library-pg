import { Cards } from "../components/Cards";
import { userInfos } from "../constants/users";

export default function Home() {
  return (
    <>
      <p>Hello, world</p>
      <Cards userInfos={userInfos} />;
    </>
  );
}
