import type {SvelteComponent} from 'svelte';

export type UserType = {
  name: string;
  role: string;
  imageUrl: string;
};

export type CommunityType = {
  id: string;
  name?: string;
  isPublic?: boolean;
  description?: string;
  imageUrl: string;
};

export type CarouselItemType = {
  user: UserType;
  community: CommunityType;
  colors: string[];
};

export type TabNavigationType = {
  name: string;
  component: typeof SvelteComponent;
};

export type DrawerType = {
  community: {
    imageUrl: string;
  };
  menu: MenuType[];
};

export type MenuType = {
  name: string;
  path: string;
  notificationCounts?: number;
};