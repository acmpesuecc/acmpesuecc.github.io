import { HASHED_WHITELIST, SECRET_KEY, SECRET_KEY_ENV } from './whitelist';

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const hashEmail = async (email: string): Promise<string> => {
  const secret =
    (typeof SECRET_KEY_ENV === 'string' && SECRET_KEY_ENV) ||
    (typeof SECRET_KEY === 'string' && SECRET_KEY);
  if (!secret) {
    return '0'.repeat(64);
  }

  const encoder = new TextEncoder();
  const data = encoder.encode(email.trim().toLowerCase());
  const key = encoder.encode(secret);

  const cryptoKey = await crypto.subtle.importKey(
    'raw',
    key,
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );

  const signature = await crypto.subtle.sign('HMAC', cryptoKey, data);
  return Array.from(new Uint8Array(signature))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
};

export const isEmailWhitelisted = async (email: string): Promise<boolean> => {
  if (!validateEmail(email)) return false;

  const hashedEmail = await hashEmail(email);
  return HASHED_WHITELIST.includes(hashedEmail);
};

export const checkIntegrity = (): boolean => {
  if (!Array.isArray(HASHED_WHITELIST) || HASHED_WHITELIST.length === 0) {
    return false;
  }

  // Check if all hashes are valid SHA-256 format (64 hex characters)
  const validHashFormat = /^[a-f0-9]{64}$/;
  return HASHED_WHITELIST.every((hash) => validHashFormat.test(hash));
};

export const STORAGE_KEYS = {
  EMAIL_VERIFIED: 'acm_recruitment_email_verified_2025',
  VERIFICATION_TIME: 'acm_recruitment_verification_time_2025',
  SESSION_TOKEN: 'acm_recruitment_session_token_2025'
};

export const generateSessionToken = (): string => {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, (byte) => byte.toString(16).padStart(2, '0')).join(
    ''
  );
};

export const isSessionValid = (): boolean => {
  try {
    const verificationTime = localStorage.getItem(
      STORAGE_KEYS.VERIFICATION_TIME
    );
    const sessionToken = localStorage.getItem(STORAGE_KEYS.SESSION_TOKEN);

    if (!verificationTime || !sessionToken) return false;

    const timeDiff = Date.now() - parseInt(verificationTime);
    const twentyFourHours = 24 * 60 * 60 * 1000;

    return timeDiff < twentyFourHours;
  } catch (error) {
    return false;
  }
};

export const setVerificationStatus = (email: string): void => {
  const sessionToken = generateSessionToken();
  const verificationTime = Date.now().toString();

  localStorage.setItem(STORAGE_KEYS.EMAIL_VERIFIED, email);
  localStorage.setItem(STORAGE_KEYS.VERIFICATION_TIME, verificationTime);
  localStorage.setItem(STORAGE_KEYS.SESSION_TOKEN, sessionToken);

  sessionStorage.setItem(STORAGE_KEYS.EMAIL_VERIFIED, email);
  sessionStorage.setItem(STORAGE_KEYS.SESSION_TOKEN, sessionToken);
};

export const clearVerificationStatus = (): void => {
  Object.values(STORAGE_KEYS).forEach((key) => {
    localStorage.removeItem(key);
    sessionStorage.removeItem(key);
  });
};

export const isCurrentlyVerified = (): boolean => {
  try {
    const localEmail = localStorage.getItem(STORAGE_KEYS.EMAIL_VERIFIED);
    const sessionEmail = sessionStorage.getItem(STORAGE_KEYS.EMAIL_VERIFIED);
    const localToken = localStorage.getItem(STORAGE_KEYS.SESSION_TOKEN);
    const sessionToken = sessionStorage.getItem(STORAGE_KEYS.SESSION_TOKEN);

    if (localEmail && localToken && isSessionValid()) {
      if (
        sessionEmail &&
        sessionToken &&
        localEmail === sessionEmail &&
        localToken === sessionToken
      ) {
        return true;
      }
      if (!sessionEmail || !sessionToken) {
        sessionStorage.setItem(STORAGE_KEYS.EMAIL_VERIFIED, localEmail);
        sessionStorage.setItem(STORAGE_KEYS.SESSION_TOKEN, localToken);
        return true;
      }
    }

    return false;
  } catch (error) {
    return false;
  }
};
