import crypto from 'crypto'

export function calcCompatibility(a: number, b: number): number {
  const md5 = crypto.createHash('md5')
  const input = Buffer.alloc(4)
  input.writeUInt32LE(a * b)
  const output = md5.update(input).digest()
  return output.readUInt8() % 101
}
