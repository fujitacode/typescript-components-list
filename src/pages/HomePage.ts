import { DummyComponent } from "../components";

export const HomePage = () => `
  <h1>ホーム画面</h1>
  ${DummyComponent()}
  <button data-link="/catalog">カタログを見る</button>
`;
