import { generateImage } from '../../lib/image'

test('lib/image/generateImage', () => {
  const nameA = 'Makutamoto'
  const colorA = '#FF0000'
  const avatarA =
    'https://img.atcoder.jp/icons/d8034bf137577f59350bbedda1d698f2.png'
  const nameB = 'Test'
  const colorB = '#FF0000'
  const avatarB = 'https://img.atcoder.jp/assets/icon/avatar.png'
  const compatibility = 100
  const compatibilityColor = '#FF0000'
  return generateImage(
    nameA,
    colorA,
    avatarA,
    nameB,
    colorB,
    avatarB,
    compatibility,
    compatibilityColor
  )
})
