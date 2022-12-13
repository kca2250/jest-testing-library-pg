import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Home from "../pages/index";

/*
`describe`は関連するテストをブロック単位でまとめるメソッド
    - 第1引数にテストブロックの説明
    - 第2引数はテストケースを記述するコールバック関数

`it`は実際のテストを記述する
    - 第1引数はテストの説明
    - 第2引数はテスト内容を記述するコールバック関数

`render()`は引数に指定したJSXをレンダリングする

`expect`はテスト結果を評価するメソッド
docs: https://jestjs.io/ja/docs/expect#%E3%83%AA%E3%83%95%E3%82%A1%E3%83%AC%E3%83%B3%E3%82%B9
*/

describe("rendering test", () => {
  it("Hello, worldと表示されている", () => {
    render(<Home />);
    expect(screen.getByText("Hello, world")).toBeInTheDocument();
  });
});
