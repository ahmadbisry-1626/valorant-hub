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
