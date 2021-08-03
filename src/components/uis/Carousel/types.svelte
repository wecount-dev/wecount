<script context="module" lang="ts">
  export type CommunityType = {
    name: string;
    description: string;
  };

  export type UserType = {
    name: string;
    role: string;
    imageUrl: string;
  };

  export type ItemType = {
    user: UserType;
    community: CommunityType;
    isPublic: boolean;
    selectedColor: string;
  };
</script>
