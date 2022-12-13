import { Cards } from "../components/Cards";
import { userInfos } from "../constants/users";

export default function Home() {
  return <Cards userInfos={userInfos} />;
}
