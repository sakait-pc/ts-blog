---
title: "Windows10にWSLやWSL2をインストールする方法"
date: "2021-08-24"
---

今回は、Windows10 に WSL や WSL2 をインストールする方法を紹介します。意外と簡単に Linux 環境が用意できるので、是非試してみてください。

## WSL とは

Windows Subsystem for Linux(WSL)とは、簡単に言うと、Windows10 上で Linux を実行させることが可能なシステムです。

Linux は、Linux カーネルというコア部分と、ディストリビューションという、カーネルを利用してさまざまなツールを提供する部分の組み合わせでできています。Debian や Ubuntu、CentOS などがディストリビューションとしてよく知られています。

WSL は Linux カーネル部分を Microsoft が独自に開発したもので、これにより Linux との互換性を提供します。ただし、オリジナルの Linux カーネルではないため、完全な互換性はなく、一部動作しないコマンドなどもあるようです。

## WSL2 とは

WSL2 はオリジナルの Linux カーネルを採用し、これにより Linux との高い互換性を提供しています。また、ファイルシステムのパフォーマンスも向上しています。したがって、WSL2 は WSL の上位互換と考えられます。

## 環境

エディション:

Windows 10 Pro

バージョン:

21H1

OS ビルド:

19043.1165

## WSL のインストール方法

コントロールパネル > プログラム > Windows の機能の有効化または無効化

「Windows の機能」というウィンドウが開くので、「Linux 用 Windows サブシステム」にチェックを入れる。

PC を再起動する。

WSL のままでよい場合は「Microsoft Store から Ubuntu をインストールする」にお進みください。

WSL2 に更新したい場合(推奨)は、次項の「WSL2 のインストール方法」にお進みください。

## WSL2 のインストール方法

### Windows の機能を有効化する

コントロールパネル > プログラム > Windows の機能の有効化または無効化

「Windows の機能」というウィンドウが開くので、「仮想マシンプラットフォーム」にチェックを入れる。

PC を再起動する。

### Linux カーネル更新プログラムをインストールする

再起動後、公式記事の「[手順 4. Linux カーネル更新プログラム パッケージをダウンロードする](https://docs.microsoft.com/ja-jp/windows/wsl/install-win10#step-4---download-the-linux-kernel-update-package)」を実施します。

「x64 マシン用 WSL2 Linux カーネル更新プログラム パッケージ」というリンクから更新プログラムをダウンロード、インストールすれば OK です。

### デフォルトのバージョンを WSL2 に設定する

PowerShell を管理者権限で起動し、以下のコマンドを実行します。

`wsl --set-default-version 2`

以上で WSL2 のインストールは完了です！

つづいて、ディストリビューションのインストールへと進みましょう。

## Microsoft Store から Ubuntu をインストールする

### Microsoft Store を起動する

Microsoft Store の探し方をいくつか挙げておきます。

- スタートボタンを押すと右側のパネルに Microsoft Store があります

- 同様にアルファベット順の一覧の M の段にもあります

- Windows の検索ボックスで「microsoft store」と検索しても OK です

### Ubuntu をインストールする

Microsoft Store を起動し、右上の検索ボックスで「WSL」と検索します。検索結果が表示されたら、「すべて表示」をクリックして一覧表示に切り替えます。

ディストリビューションはお好みで選択してください。今回は「Ubuntu」というタイトル名のディストリビューションをインストールします。記事作成時点で 50 件以上の評価があったため、ひとまずこちらをインストールしてみました。

※類似のタイトル名で「Ubuntu 20.04 LTS」や「Ubuntu 18.04 LTS」があります。両者はバージョンが異なるのですが、「Ubuntu」もバージョンは 20.04 LTS であり、「Ubuntu 20.04 LTS」との違いは詳細を把握できておりません。

ディストリビューションを選択したら、詳細画面が開きますので、「入手」をクリックします。

インストールが完了したら、Microsoft Store 右上の「・・・」ボタンをクリック > マイライブラリを開きます。

さきほどインストールした「Ubuntu」が確認できるはずです。右端の「・・・」ボタンからピン留めしておくと便利です。

「起動」をクリックし、ユーザアカウントとパスワードを設定すれば完了です！

## まとめ

WSL や WSL2 のインストールが意外と簡単で驚きました。Windows の機能を有効化、更新プログラムをインストール、WSL2 をデフォルトに設定、Ubuntu インストールで OK です。このあとは Docker Desktop for Windows でいろいろな環境をつくってみたいところです。

Linux の基礎的なコマンドを練習してみたい方はこちらの記事も参考にしてみてください。

[CLI の導入と Linux コマンドの練習](https://ts-blog-mu.vercel.app/posts/CLI/introduction-command-line-interface)

## 参考

[Linux 用 Windows サブシステムとは - Microsoft](https://docs.microsoft.com/ja-jp/windows/wsl/about)

[Windows Subsystem for Linux - Wikipedia](https://ja.wikipedia.org/wiki/Windows_Subsystem_for_Linux)

[Windows 10 用 Windows Subsystem for Linux のインストール ガイド - Microsoft](https://docs.microsoft.com/ja-jp/windows/wsl/install-win10)
