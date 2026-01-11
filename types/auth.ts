//types/auth.ts

export interface RegisterRequest {
  name: string;
  email: string;
  phone?: string | null;
  password: string;
  rePassword: string;
  acceptTerms: boolean;
  newsletterSubscribed?: boolean;
}

export interface LoginRequest {
  loginId: string; // email or phone
  password: string;
}

export interface VaultLoginRequest {
  password: string;
}

export interface VaultChangePasswordRequest {
  accessToken: string;
  currentPassword?: string;
  vaultPassword?: string;
  vaultRePassword?: string;
}

export interface TokenResponse {
  token: string;
  expiresAt: string;
}

export interface AuthResponse {
  accessToken: TokenResponse;
  refreshToken: TokenResponse;
  id: string;
  name: string;
  email: string;
  phone: string;
  vaultPasswordRequired: boolean;
  verified: boolean | null;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string | null;
  verified?: boolean | null;
  picture?: {
    id: string;
    url: string;
    type: string;
  };
}

export interface RefreshTokenRequest {
  token: string;
}

export interface ForgotPasswordRequest {
  password: string;
  rePassword: string;
}
export interface OtpRequest {
  email: string;
  code: string;
}
