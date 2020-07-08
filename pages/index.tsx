import { v4 as uuid } from 'uuid'
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import { Alert } from 'react-bootstrap'

import { COLORS, getColor, getUser } from '../lib/atcoder'
import { calcCompatibility } from '../lib/compatibility'
import { generateImage } from '../lib/image'
import { uploadImage } from '../lib/storage'

interface NotFound {
  users: string[]
}

const RESULT_PAGE = (
  id: string,
  userA: string,
  userB: string,
  compatibility: number
) =>
  `/result/${id}?user_a=${userA}&user_b=${userB}&compatibility=${compatibility}`

export default function (props: NotFound) {
  return (
    <>
      {props.users.map((user, i) =>
        user ? (
          <Alert key={i} variant="danger">
            &#39;{user}&#39;のデータを取得できませんでした。
          </Alert>
        ) : (
          <Alert key={i} variant="danger">
            両方のフィールドにAtCoder IDを入力して下さい。
          </Alert>
        )
      )}
      <h1>AtCoder相性診断</h1>
      <p>
        AtCoder IDの相性をレートをもとに判定します。
        <br />
        導出される数字に特に意味はありません。
      </p>
      <p>
        このサイトのGitHubリポジトリ:{' '}
        <a
          href="https://github.com/makutamoto/atcoder-aisho-shindan"
          target="_blank"
          rel="noreferrer"
        >
          https://github.com/makutamoto/atcoder-aisho-shindan
        </a>
        <br />
        作者Twitter:{' '}
        <a
          href="https://twitter.com/makutamoto"
          target="_blank"
          rel="noreferrer"
        >
          https://twitter.com/makutamoto
        </a>
      </p>
    </>
  )
}

export async function getServerSideProps(
  props: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<NotFound>> {
  const queryUserA = (props.query.user_a as string) || null
  const queryUserB = (props.query.user_b as string) || null
  const userA = queryUserA && (await getUser(queryUserA))
  const userB = queryUserB && (await getUser(queryUserB))
  const users: string[] = []
  if (queryUserA !== null || queryUserB !== null) {
    if (userA === null) users.push(queryUserA)
    if (userB === null) users.push(queryUserB)
    if (users.length == 0) {
      const compatibility = calcCompatibility(userA.rating, userB.rating)
      const compatibilityColor = COLORS[Math.floor(compatibility / 13)]
      const colorA = getColor(userA.rating)
      const colorB = getColor(userB.rating)
      const image = await generateImage(
        userA.name,
        colorA,
        userA.avatar,
        userB.name,
        colorB,
        userB.avatar,
        compatibility,
        compatibilityColor
      )
      const id = uuid()
      await uploadImage(id, image)
      props.res.writeHead(303, {
        Location: RESULT_PAGE(id, userA.name, userB.name, compatibility),
      })
      props.res.end()
    }
  }
  return { props: { users } }
}
