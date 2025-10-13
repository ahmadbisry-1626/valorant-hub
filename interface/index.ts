export interface GearResponse {
  status: number;
  data: GearItem[];
}

export interface GearItem {
  uuid: string;
  displayName: string;
  description: string;
  descriptions: string[];
  details: GearDetail[];
  displayIcon: string;
  assetPath: string;
  shopData: ShopData;
}

export interface GearDetail {
  name: string;
  value: string;
}

export interface ShopData {
  cost: number;
  category: string;
  shopOrderPriority: number;
  categoryText: string;
  gridPosition: any | null;
  canBeTrashed: boolean;
  image: string | null;
  newImage: string | null;
  newImage2: string | null;
  assetPath: string;
}

export interface AgentResponse {
  status: number;
  data: Agent[];
}

export interface Agent {
  uuid: string;
  displayName: string;
  description: string;
  developerName: string;
  releaseDate: string;
  characterTags: string[] | null;
  displayIcon: string;
  displayIconSmall: string;
  bustPortrait: string;
  fullPortrait: string;
  fullPortraitV2: string;
  killfeedPortrait: string;
  minimapPortrait: string;
  homeScreenPromoTileImage: string | null;
  background: string;
  backgroundGradientColors: string[];
  assetPath: string;
  isFullPortraitRightFacing: boolean;
  isPlayableCharacter: boolean;
  isAvailableForTest: boolean;
  isBaseContent: boolean;
  role: Role | null;
  abilities: Ability[];
}

export interface Role {
  uuid: string;
  displayName: string;
  description: string;
  displayIcon: string;
  assetPath: string;
}

export interface Ability {
  slot: string;
  displayName: string;
  description: string;
  displayIcon: string;
}
