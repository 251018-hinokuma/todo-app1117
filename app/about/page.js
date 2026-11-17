export const metadata = {
  title: 'このアプリについて | TODOアプリ',
}
import { appVersion } from '@/lib/config'
export default function AboutPage() {
  return (
    <main className="container">
      <p>バージョン：{appVersion}</p>
      <p>{process.env.SECRET_WORD}</p>
      <h1>このアプリについて</h1>
      <p>「Webフロントエンド」の授業で作っている TODO アプリです。</p>
      <ul>
        <li>Next.js（App Router）</li>
        <li>データはブラウザの localStorage に保存</li>
      </ul>
    </main>
  )
}
