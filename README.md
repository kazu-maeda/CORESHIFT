# CORE SHIFT — 30代男性専門パーソナルジム LP

ポートフォリオ用に制作した、パーソナルジムの架空LP(ランディングページ)です。
支給されたPC版デザインカンプ(JPG)を元に、HTML / CSS / JavaScriptのみ(外部フレームワーク不使用)で実装しています。

- **公開URL**: https://coreshift-blue.vercel.app/
- **GitHub**: https://github.com/kazu-maeda/CORESHIFT

## 技術構成

- HTML5 / CSS3 / Vanilla JavaScript(フレームワーク・ビルドツール不使用)
- Webフォント: [Noto Sans JP](https://fonts.google.com/noto/specimen/Noto+Sans+JP)(Google Fonts経由)
- デプロイ: GitHub + Vercel(静的サイトとしてそのまま配信、ビルドコマンド不要)

## フォルダ構成

```
CORESHIFT/
├── index.html        … ページ本体(全セクション)
├── css/
│   └── style.css      … スタイル一式(PC + レスポンシブ)
├── js/
│   └── main.js         … FAQアコーディオン / スクロールアニメーション / ハンバーガーメニュー等
├── images/             … 写真・イラスト・アイコン素材、favicon
└── README.md
```

## 実装している機能

- デザインカンプ(PC 1440px)をベースにした全12セクションの実装
  header / hero / features-bar / concerns / reasons / results / trainer / pricing / flow / voice / faq / final-cta
- FAQのアコーディオン開閉(JS、`grid-template-rows`アニメーション)
- スクロール連動フェードイン、カードのホバー演出、数値のカウントアップアニメーション
- スマートフォン対応(ブレークポイント: `max-width: 768px`)、独自実装のハンバーガーメニュー
- `prefers-reduced-motion` 対応(アニメーション無効設定のユーザーには即表示)

## ローカルでの確認方法

ビルド不要の静的サイトなので、フォルダ内で簡易サーバーを立てて開くだけで確認できます。

```bash
cd CORESHIFT
python3 -m http.server 8000
# ブラウザで http://localhost:8000 を開く
```

(`index.html` をブラウザで直接開いても表示は可能ですが、`file://` だと一部のブラウザ挙動が異なる場合があるため、ローカルサーバー経由を推奨)

## デプロイ

GitHubリポジトリ(`kazu-maeda/CORESHIFT`)にpushすると、Vercel側で自動的に本番反映されます。
静的サイトのため `vercel.json` やビルド設定は不要です(Framework Preset: `Other`)。

## 注意事項

- このLPはポートフォリオ用のデモであり、実在の店舗・サービスではありません。
- 「無料体験を予約する」等のCTAボタンは、デモのためページ内アンカーへのリンクになっています(実際の予約フォーム等には接続していません)。
- デザインカンプの元ファイル(`CORESHIFT１.jpg` / `CORESHIFT.ai`)はリポジトリには含めていません(`.gitignore`で除外)。
