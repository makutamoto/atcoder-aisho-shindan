import crypto from 'crypto';

export function calcCompatibility(a: number, b: number): number {
    let md5 = crypto.createHash('md5');
    let input = Buffer.alloc(4);
    input.writeUInt32LE(a * b);
    let output = md5.update(input).digest();
    return output.readUInt8() % 101;
}
