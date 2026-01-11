export interface FamilyTreeCreateRequest {
  name: string;
  description?: string;
  root: {
    firstName: string;
    lastName: string;
    dateOfBirth?: string;
    dateOfDeath?: string;
    isAlive: boolean;
    gender: "MALE" | "FEMALE" | "OTHER";
    marriedDate?: string;
    nickname?: string;
    hiddenName?: string;
    educations?: Education[];
    addresses?: Address[];
    jobs?: Job[];
  };
}

export interface FamilyTree {
  id: string;
  name: string;
  description: string;
  gotra?: string;
  createdAt: string;
  updatedAt: string;
  root: Person;
  personCount: number; // Added to match API response
  image?: { id: string; url: string; type: "IMAGE" };
  treeImage?: {
    url: string;
  };
  owner?: {
    id: string;
    name: string;
    picture?: { id: string; url: string; type: "IMAGE" };
  };
  memberCount: number;
  requestStatus?: "PENDING" | "APPROVED" | "REJECTED";
}

export interface FamilyTreeSearchResponse {
  id: string;
  name: string;
  description: string;
  gotra: string | null;
  createdAt: string;
  memberCount: number;
  treeImage?: { id: string; url: string; type: "IMAGE" };
  personCount: number;
}

export interface FamilyTreeDetail extends FamilyTree {
  persons: Person[]; // All persons in the tree
  connections: Connection[];
}

export interface PersonBase {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth?: string; // ISO date string
  dateOfDeath?: string; // ISO date string (optional)
  gender: "MALE" | "FEMALE" | "OTHER";
  image?: {
    id: string;
    url: string;
    type: "IMAGE";
  };
  linked?: boolean;
  linkedTo?: string;
}

export interface Person extends PersonBase {
  name: string;
  bio?: string;
  marriedDate?: string; // ISO date string
  nickname?: string;
  hiddenName?: string;
  educations?: Education[];
  addresses?: Address[];
  contact?: number;
  religion?: string;
  jobs?: Job[];
  wives?: Person[]; // For male persons
  bloodGroup?: string;
  isAlive?: boolean; // For deceased persons
}

export interface PersonCreateRequest extends Omit<Person, "id" | "wives"> {}

export interface PersonUpdateRequest {
  id: string;
  firstName?: string;
  lastName?: string;
  dateOfBirth?: string;
  dateOfDeath?: string;
  gender?: "MALE" | "FEMALE" | "OTHER";
  marriedDate?: string;
  isAlive?: boolean;
  relationship?: RelationshipType;
  nickname?: string;
  hiddenName?: string;
  religion?: string;
  educations?: Education[];
  addresses?: Address[];
  jobs?: Job[];
  image?: {
    id: string;
    url: string;
    type: "IMAGE";
  };
  imageId?: string;
  contactDetails?: {
    email?: string | null;
    phoneNumber?: string | null;
    bloodGroup?: string | null;
    bio?: string | null;
  };
}

export interface Education {
  degreeName: string;
  institutionName: string;
  startDate: string;
  endDate: string;
  currentEducation?: boolean;
}

export interface Address {
  id?: string;
  city: {
    id: string;
    name?: string;
    countryCode?: string;
    countryName?: string;
    timezone?: string | null;
  };
  address: string;
  startDate?: string;
  endDate?: string;
  currentAddress?: boolean;
}

export interface Job {
  position: string;
  companyName: string;
  startDate: string;
  endDate: string | null;
  currentJob?: boolean;
}

export type RelationshipType = "FATHER" | "MOTHER" | "WIFE" | "CHILD";

// Add Person to Family Tree Request
export interface AddPersonRequest {
  person: PersonCreateRequest;
  linkedPersonId: string;
  relationship: RelationshipType;
}

export interface Connection {
  fromPersonId: string;
  toPersonId: string;
  relationship: RelationshipType;
}

export type MemberRole = "OWNER" | "READ_WRITE" | "READ_ONLY" | "VIEW_ONLY";

export interface FamilyTreeMember {
  userId: string;
  familyTreeId: string;
  role: MemberRole;
  name: string; // Changed from userName to name to match API response
  status: "ACTIVE" | "PENDING";
  picture?: { id: string; url: string; type: "IMAGE" }; // Added to support profile picture
}

export interface FamilyTreeMemberRequest {
  userId: string;
  familyTreeId: string;
  role: MemberRole;
}

export interface FamilyTreeMemberRequest {
  userId: string;
  familyTreeId: string;
  role: MemberRole;
}

export interface JoinRequestResponse {
  user: {
    id: string;
    name: string;
    picture?: { id: string; url: string; type: "IMAGE" };
    isFollowed?: boolean;
  };
  role: string;
  status: string;
}

// For tree visualization
export interface TreeNode {
  id: string;
  name: string;
  gender: "MALE" | "FEMALE" | "OTHER";
  dateOfBirth?: string;
  dateOfDeath?: string;
  profileImage?: {
    id: string;
    url: string;
    type: "IMAGE";
  };
  wives?: TreeNode[];
  children?: TreeNode[];
  parents?: TreeNode[];
}

export interface ShareFamilyTree {
  id: string;
  name: string;
  description?: string;
  gotra?: string;
  treeImage?: { id: string; url: string; type: "IMAGE" };
  createdAt: string;
  memberCount: number;
  personCount: number;
  joined: boolean;
  requested: boolean;
}
