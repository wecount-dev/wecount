<style lang="postcss">
  .container {
    height: 160px;

    display: grid;
    gap: 8px;
    grid-auto-flow: column;
    grid-template-columns: 120px 1fr;
    grid-template-rows: 1fr 50px;
    grid-template-areas:
      'card content'
      'owner menu';
  }

  .card {
    grid-area: card;
    background-color: lightcoral;
  }

  .content {
    grid-area: content;
    background-color: green;
  }

  .owner {
    grid-area: owner;
    background-color: blue;
  }

  .menu {
    grid-area: menu;
    background-color: orange;
  }
</style>

<script lang="ts">
  import {onMount} from 'svelte';
  import {getCommunities} from '../../services/communityService';
  import {definitions} from '../../types/supabase';

  export let community: definitions['Community'];

  onMount(async () => {
    const communities: definitions['Community'][] =
      (await getCommunities()) || [];

    console.log('communities', communities);
  });
</script>

<div class="container">
  <div class="card">
    {community.color}
  </div>
  <div class="content" />
  <div class="owner" />
  <div class="menu" />
</div>
