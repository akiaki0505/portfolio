import { Navbar } from '@/app/components/navber'
import React from 'react'

export default function page() {
    return (
        <>
            <Navbar />

            <div className="pt-44 pl-5">
                <p>01</p>
                <p>Chat-app</p>
                <p>
                    node.jsとSocket.IOを使ったリアルタイムチャットアプリを作りました。<br />
                    リアルタイムチャットアプリを目的にしているのでメンバーの追加や<br />
                    チャンネルの削除など足りない機能はたくさんあります。<br />
                    今後、時間がある時にアップデートを繰り返していく予定です。
                </p>
                <p>Next.js、React、TypeScript、node.js、Socket.IO</p>
            </div>
        </>
    )
}
