<script context="module" lang="ts">
  import type {SvelteComponent} from 'svelte';

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

  export type TabNavigationType = {
    name: string;
    component: typeof SvelteComponent;
  };
</script>
