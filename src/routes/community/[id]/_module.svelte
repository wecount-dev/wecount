<style lang="postcss">
  .container {
    background-color: var(--paper);
    overflow: hidden;

    display: flex;
    flex-direction: row;
    justify-content: center;

    nav {
      position: -webkit-sticky;
      position: sticky;
      top: 0;
    }

    section {
      width: 100%;
      height: 100%;
      overflow-y: auto;
      overflow-x: hidden;

      display: grid;
    }
  }
</style>

<script lang="ts">
  import type {definitions} from '../../../types/supabase';
  import Sidebar from './sidebar/index.svelte';
  import {GREEN, SKY_BLUE} from '../../../theme';
  import {context} from '@roxi/routify';
  import {user} from '../../../stores/sessionStore';
  import {getMycommunities} from '../../../services/communityService';
  import {onMount} from 'svelte';

  let communities: definitions['Community'][] | null = null;

  onMount(async () => {
    if ($user) {
      communities = await getMycommunities($user?.id);
    }
  });
</script>

<div class="container">
  {#if $user}
    <nav>
      <Sidebar context={$context} communities={communities || []} />
    </nav>
  {/if}
  <section>
    <slot />
  </section>
</div>
