export type NetworkType = {
  isConnected: boolean;
};

export type PhotoType = {
  id: number;
  url: string;
  description: string;
};

export type PhotosType = {
  isFetching: boolean;
  items: PhotoType[];
};
