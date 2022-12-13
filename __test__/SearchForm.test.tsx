import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { SearchForm } from "../components/SearchForm";

/*
テスト内容
- 入力フォーム(input)が表示されているか
- ボタン(button)が表示されているか

`getByRole`：指定されたロールを持つ要素を検索する 

`role`についてはドキュメントを参照
- https://github.com/A11yance/aria-query#elements-to-roles
*/

describe("rendering", () => {
  it("should render SearchForm", () => {
    // `SearchForm`がレンダリングされる
    render(<SearchForm />);

    // 入力フォーム(input)が表示されているか
    expect(screen.getByRole("textbox")).toBeTruthy();
    // data-testid ver
    expect(screen.getByTestId("search-input")).toBeTruthy();

    // ボタン(button)が表示されているか
    expect(screen.getByRole("button")).toBeTruthy();
    // data-testid ver
    expect(screen.getByTestId("search-button")).toBeTruthy();
  });
});
