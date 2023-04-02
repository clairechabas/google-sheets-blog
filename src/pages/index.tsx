import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

/**
 * TO DO LATER
 * warn  - Your project has `@next/font` installed as a dependency,
 * please use the built-in `next/font` instead. The `@next/font`
 * package will be removed in Next.js 14. You can migrate by running
 * `npx @next/codemod@latest built-in-next-font .`.
 * Read more: https://nextjs.org/docs/messages/built-in-next-font
 */
// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>My Blog Powered By Google Sheet</title>
        <meta
          name="description"
          content="Fully functional blog using Google Sheet as database"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>Coucou</main>
    </>
  )
}
