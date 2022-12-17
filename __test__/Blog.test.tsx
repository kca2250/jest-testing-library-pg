import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Blog from "../pages/blog";

describe("useEffect rendering", () => {
  test("データを取得前はローディング中が表示されている", async () => {
    render(<Blog />);
    expect(screen.getByText("ローディング中")).toBeInTheDocument();
  });

  test("データ取得後は記事IDが表示されている", async () => {
    render(<Blog />);
    expect(await screen.findByText(/記事ID/)).toBeInTheDocument();
  });
});
