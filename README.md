# これは
PlaywrightでWebブラウザの自動化テストをやってみたい。

試行錯誤のログをとりたくて作ったメモ程度リポジトリです。

## 構築
このgitからcloneしないで環境を作るには…
```
npm init playwright@latest
```
にてテスト環境構築

いろいろと質問あったが、今回は全部デフォルトで。

生成されたpackage.jsonのdescriptionはREADMEから取ってきてるのに関心した…

## スタート
```
npx playwright test
```
でテストが走ります。

今回のコミットでpackage.jsonにも追加した。
```
npm test
```