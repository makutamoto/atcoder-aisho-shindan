export interface TwitterShareButtonOptions {
  size: 'large'
  text: string
}

export interface TwitterShareButtonProps {
  options: TwitterShareButtonOptions
  url: string
}

export function TwitterShareButton(props: TwitterShareButtonProps): JSX.Element
