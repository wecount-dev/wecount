export type UserType = {
  name: string;
  role: string;
  imageUrl: string;
};

export type CommunityType = {
  name: string;
  isPublic: boolean;
  description: string;
};

export type CarouselItemType = {
  user: UserType;
  community: CommunityType;
  colors: string[];
};
