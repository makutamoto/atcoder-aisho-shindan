import { convert } from 'convert-svg-to-png'

const SVG = (
  nameA: string,
  colorA: string,
  avatarA: string,
  nameB: string,
  colorB: string,
  avatarB: string,
  compatibility: number,
  compatibilityColor: string
) => `\
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
    <defs>
        <clipPath id="round-image" clipPathUnits="objectBoundingBox">
            <circle cx="0.5" cy="0.5" r="0.5" />
        </clipPath>
        <filter id="back-shadow">
            <feDropShadow flood-opacity="0.75" stdDeviation="16" />
        </filter>
    </defs>
    <rect y="128" width="1200" height="502" fill="#F5F5F5" />
    <rect filter="url(#back-shadow)" x="64" y="128" width="1072" height="502" fill="#FFFFFF" />
    <rect width="1200" height="128" fill="#222222" />
    <text x="39" y="92" font-size="48" font-family="sans-serif" fill="#FFFFFF">あなたのAtCoder IDの相性は？</text>
    <image clip-path="url(#round-image)" href="${avatarA}" width="256" height="256" x="159" y="215" />
    <image clip-path="url(#round-image)" href="${avatarB}" width="256" height="256" x="788" y="215" />
    <text x="287.5" y="487" alignment-baseline="hanging" text-anchor="middle" font-size="48" font-family="sans-serif" fill="${colorA}">${nameA}</text>
    <text x="914.5" y="487" alignment-baseline="hanging" text-anchor="middle" font-size="48" font-family="sans-serif" fill="${colorB}">${nameB}</text>
    <text x="600" y="316" alignment-baseline="hanging" text-anchor="middle" font-size="96" font-family="sans-serif" fill="${compatibilityColor}">${compatibility}%</text>
</svg>
`

export async function generateImage(
  nameA: string,
  colorA: string,
  avatarA: string,
  nameB: string,
  colorB: string,
  avatarB: string,
  compatibility: number,
  compatibilityColor: string
): Promise<Buffer> {
  return await convert(
    SVG(
      nameA,
      colorA,
      avatarA,
      nameB,
      colorB,
      avatarB,
      compatibility,
      compatibilityColor
    )
  )
}
