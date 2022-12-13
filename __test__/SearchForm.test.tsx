import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { SearchForm } from "../components/SearchForm";
import userEvent from "@testing-library/user-event";

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
    // propsで受け渡すモック関数をテスト用に作成
    const onSubmit = jest.fn();

    // `SearchForm`がレンダリングされる
    render(<SearchForm onSubmit={onSubmit} />);

    // 入力フォーム(input)が表示されているか
    expect(screen.getByRole("textbox")).toBeTruthy();
    // data-testid ver
    expect(screen.getByTestId("search-input")).toBeTruthy();

    // ボタン(button)が表示されているか
    expect(screen.getByRole("button")).toBeTruthy();
    // data-testid ver
    expect(screen.getByTestId("search-button")).toBeTruthy();
  });

  it("入力フォームにtestを入力", async () => {
    // propsで受け渡すモック関数をテスト用に作成
    const onSubmit = jest.fn();

    // モック関数をpropsに渡したSearchFormをレンダリング
    render(<SearchForm onSubmit={onSubmit} />);

    // userをセットアップする
    const user = userEvent.setup();

    // HTMLElementに型推論されているのでasで型アサーション
    const inputEl = screen.getByRole("textbox") as HTMLInputElement;

    // ユーザーが入力フォームに"test"と入力する動作をテスト
    await user.type(inputEl, "test");

    // 入力フォームの値が"test"になっているかをチェック
    expect(inputEl.value).toBe("test");
  });

  it("入力フォームにtestを入力した状態でボタンをクリック", async () => {
    const onSubmit = jest.fn();
    render(<SearchForm onSubmit={onSubmit} />);

    const user = userEvent.setup();
    const inputEl = screen.getByRole("textbox") as HTMLInputElement;
    const buttonEl = screen.getByRole("button") as HTMLButtonElement;

    await user.type(inputEl, "test");
    await user.click(buttonEl);

    expect(onSubmit).toBeCalled();
  });

  it("入力フォームが空の状態でボタンクリック", async () => {
    const onSubmit = jest.fn();
    render(<SearchForm onSubmit={onSubmit} />);

    const user = userEvent.setup();
    const buttonEl = screen.getByRole("button") as HTMLButtonElement;
    await user.click(buttonEl);
    expect(onSubmit).not.toHaveBeenCalled();
  });
});
