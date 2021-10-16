---
title: "初心者向けにNode.jsとは何か説明してみる"
date: "2021-10-16"
---

Node.js（読み：ノード・ジェイエス）とは、簡単に言うと、PCのOS上でJavaScriptを動作させるためのプログラム（実行環境）です。Node.jsは近年のフロントエンド開発において、ほぼ必須の開発環境であるため、この機会に導入して少し試してみるとよいと思います。

## Node.jsとは

そもそもJavaScriptはブラウザ上で動作するプログラミング言語です。ブラウザとはChrome、Firefox、Edgeなどのアプリケーションのことですね。

ブラウザ内にはJavaScriptエンジンというものが搭載されており、JavaScriptエンジンがあるからJavaScript言語を動作させることができます。JavaScriptエンジンは、私たちが書いたJavaScriptのソースコード（文字列）を解析して、コンピュータが理解できる形に変換してくれます。

代表的なJavaScriptエンジンとして、ChromeではV8（読み：ブイエイト）、FirefoxではSpiderMonkey（読み：スパイダーモンキー）が搭載されています。

Node.jsもV8を搭載しているため、Node.jsをPCにインストールすれば、OS上でJavaScriptを実行することができるのです。これにより、OS上のさまざまな機能にJavaScriptからアクセスすることができるようになります。また、サーバとしての機能もJavaScriptで記述することが可能になります。こちらはバックエンド領域の話になります。

## Node.jsでできること

メインの用途は開発環境としての使用です。Node.js上でさまざまな便利ツールが使えるため、快適な開発が可能になります。詳細は以下の記事も参考にしてみてください。

[Node.jsとはなにか？なぜみんな使っているのか？ - Qiita](https://qiita.com/non_cal/items/a8fee0b7ad96e67713eb)

また、CLI（Windowsならコマンドプロンプトなど）で、手軽にJavaScriptを書いて試すことが可能になります。少し長いプログラムであれば、JavaScriptファイル（拡張子`.js`）にして実行することも可能です。ちょっとした文法の確認や、プログラムの動作確認に使うと便利です。

## Node.jsのインストール

丁寧に解説されている記事を選んでみましたので、こちらも参考にしながら、是非インストールしてみてください。

Windows10用

[Windows 10へNode.jsをインストールする - Qiita](https://qiita.com/echolimitless/items/83f8658cf855de04b9ce)

Mac用

[MacにNode.jsをインストール - Qiita](https://qiita.com/kyosuke5_20/items/c5f68fc9d89b84c0df09)

## まとめ

Node.jsの登場で、OS上でJavaScriptを動作させることが可能になりました。それにより、OSの機能を活用した便利なツールが使えるようになり、近年のフロントエンド開発において、ほぼ必須の開発環境となりました。

まずはインストールしてみて、文法チェックなどを試してみるとよいと思います。
以上、Node.jsについて簡単にまとめました。ご参考になれば幸いです。
