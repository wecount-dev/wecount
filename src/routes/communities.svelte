<style lang="postcss">
  .container {
    background-color: var(--paper);
    filter: drop-shadow(0px 2.88727px 2.88727px rgba(255, 255, 255, 0.06));
    display: grid;
    justify-content: center;
    grid-auto-flow: row-dence;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, minmax(460px, auto));
    gap: 24px;
    padding: 24px;
  }
</style>

<script lang="ts">
  import type {definitions} from '../types/supabase';
  import {onMount} from 'svelte';
  import {getCommunities} from '../services/communityService';
  import CommunityItem from '../layouts/community-item.svelte';

  let communities: definitions['Community'][] = [];

  onMount(async () => {
    communities = (await getCommunities()) || [];
  });
</script>

<div class="container">
  {#each communities as community (community.id)}
    <CommunityItem community={community} />
  {/each}
</div>
