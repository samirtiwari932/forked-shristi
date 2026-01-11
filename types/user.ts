// src/types/user.ts
export interface User {
  id: string;
  name: string;
  username: string;
  avatar?: string;
  isFollowing?: boolean;
  isFollower?: boolean;
  isBlocked?: boolean;
  bio?: string;
  email?: string;
  verified?: boolean;
  picture?: {
    id: string;
    url: string;
    type: "IMAGE";
  };
}

export interface UserProfileResponse {
  user: User;

  // Add any other profile-specific properties
}
export interface UserResponse {
  user: User;
}

export interface PaginatedResponse<T> {
  data: T[];
  next?: string;
  hasMore: boolean;
  hasNext: boolean;
  total?: number;
}

export interface PasswordUpdateRequest {
  currentPassword: string;
  password: string;
  rePassword: string;
}
