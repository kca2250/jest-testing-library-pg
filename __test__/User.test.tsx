import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { rest } from "msw";
import { setupServer } from "msw/node";
import User from "../pages/users";

const baseURL = "https://jsonplaceholder.typicode.com/users/1";

// APIサーバーを作成する
const server = setupServer(
  rest.get(baseURL, (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: 1,
        name: "Leanne Graham dummy",
        username: "Bret dummy",
        email: "Sincere@april.biz.dummy",
      })
    );
  })
);

// ファイルが読み込まれた際にサーバーを起動
beforeAll(() => server.listen());
// 各テストケースが終わるたびにリセットする
afterEach(() => server.restoreHandlers());
// 処理終了後にサーバーを停止する
afterAll(() => server.close());

describe("mocking API", () => {
  test("fetchが成功したら正しくデータが表示されている", async () => {
    const event = userEvent.setup();

    render(<User />);

    const buttonEl = screen.getByRole("button");
    await event.click(buttonEl);

    const headingEl = await screen.findByRole("heading");
    expect(headingEl.textContent).toEqual("名前: Leanne Graham dummy");
  });

  test("fetchが失敗したらエラーメッセージが表示されている", async () => {
    const event = userEvent.setup();

    server.use(
      rest.get(baseURL, (_, res, ctx) => {
        return res(ctx.status(404));
      })
    );

    render(<User />);

    const buttonEl = screen.getByRole("button");
    await event.click(buttonEl);

    const paragraphEl = await screen.findByTestId("error");
    expect(paragraphEl.textContent).toEqual("Request failed");

    expect(screen.queryByRole("heading")).toBeNull();
  });
});
