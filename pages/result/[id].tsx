import { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import { TwitterShareButton } from 'react-twitter-embed'

const STORAGE_PATH = (id: string) =>
  `https://storage.googleapis.com/atcoder-aisho-shindan/share/${id}`
const SHARE_MESSAGE = (nameA: string, nameB: string, compatibility: number) =>
  `${nameA}さんと${nameB}さんの相性は${compatibility}%です！ #AtCoder相性診断`

interface Image {
  src: string
}

export default function (props: Image) {
  const router = useRouter()
  const [shareURL, setShareURL] = useState('')
  useEffect(() => setShareURL(window.location.href), [])
  const nameA = router.query.user_a as string
  const nameB = router.query.user_b as string
  const compatibility = Number(router.query.compatibility)
  const message = SHARE_MESSAGE(nameA, nameB, compatibility)
  return (
    <>
      <Head>
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:creator" content="@makutamoto" />
        <meta property="og:title" content="AtCoder相性診断" />
        <meta property="og:description" content={message} />
        <meta property="og:image" content={props.src} />
      </Head>
      <TwitterShareButton
        url={shareURL}
        options={{ size: 'large', text: message }}
      />
      <img width="100%" src={props.src} />
    </>
  )
}

export async function getServerSideProps(
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<Image>> {
  const id = context.params.id as string
  return {
    props: {
      src: STORAGE_PATH(id),
    },
  }
}
