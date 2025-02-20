import * as crypto from "crypto";

export class EncryptionHelper {
  private algorithm: string;
  private key: Buffer;

  constructor(key = crypto.randomBytes(32), algorithm = "aes-256-cbc") {
    this.algorithm = algorithm;
    this.key = key;
  }

  encrypt(data: string, iv = crypto.randomBytes(16)): string {
    const cipher = crypto.createCipheriv(this.algorithm, this.key, iv);

    let encryptedText = cipher.update(data, "utf8", "hex");
    encryptedText += cipher.final("hex");
    return `${encryptedText}:${iv.toString("hex")}`;
  }

  decrypt(encryptedText: string): string {
    const { encrypted, ivHex } = this.getEncryptedWithIv(encryptedText);

    const decipher = crypto.createDecipheriv(
      this.algorithm,
      this.key,
      Buffer.from(ivHex, "hex")
    );

    let decrypted = decipher.update(encrypted, "hex", "utf8");
    decrypted += decipher.final("utf8");
    return decrypted;
  }

  private getEncryptedWithIv(encryptedText: string) {
    const [encrypted, ivHex] = encryptedText.split(":");
    this.validateEncryptedText(encrypted, ivHex);

    return {
      encrypted: encrypted!,
      ivHex: ivHex!,
    };
  }

  private validateEncryptedText(
    encrypted: string | undefined,
    ivHex: string | undefined
  ) {
    if (!encrypted || !ivHex) {
      throw new Error(`Invalid encrypted text`);
    }
  }
}
