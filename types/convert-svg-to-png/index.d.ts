export interface PuppeteerOptions {
  args: string[]
  headless: boolean
  executablePath: string
}

export interface ConvertOptions {
  puppeteer: PuppeteerOptions
}

export function convert(svg: string, options: ConvertOptions): Promise<Buffer>
