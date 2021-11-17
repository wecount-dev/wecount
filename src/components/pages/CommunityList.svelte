<style lang="postcss">
  .container {
    display: grid;
    grid-auto-flow: row-dence;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, minmax(460px, auto));
    gap: 24px;
    padding: 24px;
  }
</style>

<script lang="ts">
  import {onMount} from 'svelte';
  import {getCommunities} from '../../services/communityService';
  import {definitions} from '../../types/supabase';
  import CommunityListItem from '../uis/CommunityListItem.svelte';

  let communities: definitions['Community'][] = [];

  onMount(async () => {
    communities = (await getCommunities()) || [];
  });
</script>

<div class="container">
  {#each communities as community (community.id)}
    <CommunityListItem community={community} />
  {/each}
</div>
