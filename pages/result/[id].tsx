import Head from 'next/head'
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'

const STORAGE_PATH = (id: string) =>
  `https://storage.googleapis.com/atcoder-aisho-shindan/share/${id}`

interface Image {
  src: string
}

export default function (props: Image) {
  return (
    <>
      <Head>
        <meta property="og:title" content="AtCoder相性診断" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={props.src} />
      </Head>
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
