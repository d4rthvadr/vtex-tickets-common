import { EncryptionHelper } from "./encrypt";

const encryptDecryptAlgorithm = "AES-256-CBC";

let secretKey = process.env.ENC_DEC_KEY;

/**
 * Validates the provided secret key.
 *
 * @param secretKey - The secret key to validate. It can be a string or undefined.
 * @throws Will throw an error if the secret key is not provided.
 */
function validateSecretKey(secretKey: string | undefined) {
  if (!secretKey) {
    throw new Error("Secret key is required");
  }
}

/**
 * Creates and returns an instance of `EncryptionHelper` using the provided secret key and encryption algorithm.
 *
 * @returns {EncryptionHelper} An instance of `EncryptionHelper` initialized with the secret key and encryption algorithm.
 *
 * @throws {Error} If the secret key is invalid.
 */
const getEncryptionHelper = () => {
  validateSecretKey(secretKey);

  const secretKeyBuffer = Buffer.from(secretKey!);

  return new EncryptionHelper(
    secretKeyBuffer,
    encryptDecryptAlgorithm
  );
}


/**
 * Encrypts the given data using the encryption helper.
 *
 * @param data - The string data to be encrypted.
 * @returns The encrypted string.
 */
export const encrypt = (data: string): string => {
  return getEncryptionHelper().encrypt(data);
};

/**
 * Decrypts the given encrypted data.
 *
 * @param encryptedData - The data to be decrypted.
 * @returns The decrypted string.
 */
export const decrypt = (encryptedData: string): string => {
  return getEncryptionHelper().decrypt(encryptedData);
};
