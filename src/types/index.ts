import type {SvelteComponent} from 'svelte';

export type UserType = {
  name: string;
  role?: string;
  imageUrl: string;
};

export type CommunityType = {
  id: string;
  name?: string;
  currency?: string;
  isPublic?: boolean;
  description?: string;
  imageUrl?: string;
  deposit?: DepositType[]
};

export type DepositType = {
  title: string
  description: string
  currency: string;
  price: number
  createdAt: string
}

export type CarouselItemType = {
  user: UserType;
  community: CommunityType;
  colors: string[];
};

export type TabNavigationType = {
  name: string;
  component: {
    component: typeof SvelteComponent, 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    props?: Record<string, any> 
  };
};

export type DrawerType = {
  community: CommunityType;
  menu: MenuType[];
};

export type MenuType = {
  name: string;
  path: string;
  notificationCounts?: number;
};