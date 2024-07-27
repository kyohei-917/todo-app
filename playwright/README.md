<!-- 後で書く -->

# Playwright テスト実行手順

### Playwright 用の env ファイルの設定をする

⑴ todo-app/playwright ディレクトリに移動する
`cd playwright/`

⑵ テスト内で定義されている環境変数のサンプルファイルを local にコピーする
`cp .env.example .env`

⑶ .env 内の値は 開発者に聞いてね

⑷ e2e 用のパッケージをインストールする
`npm install`

### テストを実行する

⑴ todo-app/playwright ディレクトリに移動する
`cd playwright/`

⑵ テストを実行する

- 全てのテストをブラウザ非表示で実行する場合: `npm test`

- 全てのテストをブラウザを表示して実行する場合: `npm browser-test`

- Playwright の IDE を立ち上げて手動でテストを実行する: `npm open`
