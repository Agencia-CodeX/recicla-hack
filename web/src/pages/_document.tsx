import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
    return (
        <Html lang="pt-BR">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap" rel="stylesheet" />

                <link rel="icon" href="/images/favicon.png" />
            </Head>
            <Main />
            <NextScript />
        </Html>
    )
}