import { Storage } from '@google-cloud/storage'

const STORAGE_PATH = (name: string) => `share/${name}`

export async function uploadImage(name: string, image: Buffer) {
  const storage = new Storage({
    credentials: JSON.parse(process.env.GCLOUD_CREDENTIALS),
  })
  const bucket = storage.bucket('atcoder-aisho-shindan')
  const file = bucket.file(STORAGE_PATH(name))
  await file.save(image, { metadata: { contentType: 'image/png' } })
}
