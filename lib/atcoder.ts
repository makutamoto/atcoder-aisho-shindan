import axios, { AxiosResponse } from 'axios'
import { JSDOM } from 'jsdom'

const USER_PAGE = (name: string) => `https://atcoder.jp/users/${name}`

const NAME_SELECTOR = '#main-container h3 span'
const RATING_SELECTOR = '#main-container table span'
const AVATAR_SELECTOR = '#main-container img.avatar'

export const COLORS = [
  '#808080', // gray
  '#804000', // brown
  '#008000', // green
  '#00C0C0', // cyan
  '#0000FF', // blue
  '#C0C000', // yellow
  '#FF8000', // orange
  '#FF0000', // red
]

export interface User {
  name: string
  rating: number
  avatar: string
}

export function getColor(rate: number) {
  return COLORS[Math.floor(Math.min(2800, rate) / 400)]
}

export async function getUser(username: string): Promise<User | null> {
  let res: AxiosResponse<string>
  try {
    res = await axios.get(USER_PAGE(username))
  } catch {
    return null
  }
  const { document } = new JSDOM(res.data).window
  const name = document.querySelector(NAME_SELECTOR)
  const rating = document.querySelector(RATING_SELECTOR)
  const avatar = document.querySelector(AVATAR_SELECTOR)
  return (
    name &&
    rating &&
    avatar && {
      name: name.textContent,
      rating: Number(rating.textContent),
      avatar: avatar.getAttribute('src'),
    }
  )
}
