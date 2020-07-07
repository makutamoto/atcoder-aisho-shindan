import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { Button, Container, Form, Navbar } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css'

export default function ({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const [userA, setUserA] = useState('')
  const [userB, setUserB] = useState('')
  const onUserAChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setUserA(e.currentTarget.value),
    []
  )
  const onUserBChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setUserB(e.currentTarget.value),
    []
  )
  useEffect(() => setUserA((router.query.user_a as string) || ''), [
    router.query.user_a,
  ])
  useEffect(() => setUserB((router.query.user_b as string) || ''), [
    router.query.user_b,
  ])
  return (
    <>
      <Head>
        <title>AtCoder相性診断</title>
      </Head>
      <Navbar sticky="top" bg="dark" variant="dark">
        <Navbar.Brand href="/">AtCoder相性診断</Navbar.Brand>
      </Navbar>
      <Container className="py-4">
        <form action="/" method="GET">
          <Form.Control
            className="my-2"
            type="text"
            name="user_a"
            placeholder="Makutamoto..."
            value={userA}
            onChange={onUserAChange}
          />
          <Form.Control
            className="my-2"
            type="text"
            name="user_b"
            placeholder="chokudai..."
            value={userB}
            onChange={onUserBChange}
          />
          <Button variant="primary" type="submit">
            診断
          </Button>
        </form>
        <hr />
        <Component {...pageProps} />
      </Container>
    </>
  )
}
