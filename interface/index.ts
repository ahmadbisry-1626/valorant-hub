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

export interface AgentResponseById {
  status: number;
  data: Agent;
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

export interface WeaponsResponse {
  status: number;
  data: Weapon[];
}

export interface WeaponsResponseById {
  status: number;
  data: Weapon;
}

export interface Weapon {
  uuid: string;
  displayName: string;
  category: string;
  defaultSkinUuid: string;
  displayIcon: string;
  killStreamIcon: string;
  assetPath: string;
  weaponStats: WeaponStats | null;
  shopData: ShopData | null;
  skins: WeaponSkin[];
}

export interface WeaponStats {
  fireRate: number;
  magazineSize: number;
  runSpeedMultiplier: number;
  equipTimeSeconds: number;
  reloadTimeSeconds: number;
  firstBulletAccuracy: number;
  shotgunPelletCount: number;
  wallPenetration: string;
  feature: string | null;
  fireMode: string | null;
  altFireType: string | null;
  adsStats: AdsStats | null;
  altShotgunStats: AltShotgunStats | null;
  airBurstStats: AirBurstStats | null;
  damageRanges: DamageRange[];
}

export interface AdsStats {
  zoomMultiplier: number;
  fireRate: number;
  runSpeedMultiplier: number;
  burstCount: number;
  firstBulletAccuracy: number;
}

export interface AltShotgunStats {
  shotgunPelletCount: number;
  burstRate: number;
}

export interface AirBurstStats {
  shotgunPelletCount: number;
  burstDistance: number;
}

export interface DamageRange {
  rangeStartMeters: number;
  rangeEndMeters: number;
  headDamage: number;
  bodyDamage: number;
  legDamage: number;
}

export interface ShopData {
  cost: number;
  category: string;
  categoryText: string;
  canBeTrashed: boolean;
  image: string | null;
  newImage: string | null;
  newImage2: string | null;
  assetPath: string;
}

export interface WeaponSkin {
  uuid: string;
  displayName: string;
  displayIcon: string | null;
  wallpaper: string | null;
  assetPath: string;
  chromas: WeaponChroma[];
  levels: WeaponLevel[];
}

export interface WeaponChroma {
  uuid: string;
  displayName: string;
  displayIcon: string | null;
  fullRender: string | null;
  swatch: string | null;
  streamedVideo: string | null;
  assetPath: string;
}

export interface WeaponLevel {
  uuid: string;
  displayName: string;
  levelItem: string | null;
  displayIcon: string | null;
  streamedVideo: string | null;
  assetPath: string;
}

export interface MapsResponse {
  status: number;
  data: ValorantMap[];
}

export interface MapResponseById {
  status: number;
  data: ValorantMap;
}

export interface ValorantMap {
  uuid: string;
  displayName: string;
  narrativeDescription: string | null;
  tacticalDescription: string | null;
  coordinates: string | null;
  displayIcon: string | null;
  listViewIcon: string | null;
  stylizedBackgroundImage: string;
  splash: string;
  assetPath: string;
  mapUrl: string;
  xMultiplier: number;
  yMultiplier: number;
  xScalarToAdd: number;
  yScalarToAdd: number;
  callouts: MapCallout[] | null;
}

export interface MapCallout {
  regionName: string;
  superRegionName: string;
  location: {
    x: number;
    y: number;
  };
}
