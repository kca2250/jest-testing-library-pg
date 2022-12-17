import { getByText, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Cards } from "../components/Cards";
import { userInfos } from "../constants/users";

describe("Cards component", () => {
  test("propsに渡ってきた配列が空だった時", () => {
    render(<Cards userInfos={[]} />);
    expect(screen.getByText("ユーザー情報はありません。")).toBeInTheDocument();
  });

  test("propsに渡ってきた配列の中身が存在する", () => {
    render(<Cards userInfos={userInfos} />);

    const userInfoList = screen
      .getAllByRole("listitem")
      .map((item) => item.textContent);

    const arrData = userInfos.map(
      (item) => `id:${item.id} / name:${item.name}`
    );

    expect(userInfoList).toEqual(arrData);
  });
});
