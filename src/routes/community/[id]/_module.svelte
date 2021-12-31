<style lang="postcss">
  .container {
    background-color: var(--paper);
    overflow: hidden;
    padding-bottom: 56px;

    display: grid;
    grid-template-columns: min-content 1fr;
    grid-auto-flow: column;

    nav {
      position: fixed;
      height: calc(100% - 56px);
      top: 56px;
      z-index: 98;
      overflow: auto;

      &::-webkit-scrollbar {
        width: 0px;
        height: 0px;
      }
    }

    section {
      width: calc(100% - 80px);
      height: 100%;
      left: 80px;
      position: fixed;
      overflow-y: auto;
      overflow-x: hidden;

      display: grid;
    }
  }
</style>

<script lang="ts">
  import type {definitions} from '../../../types/supabase';
  import Sidebar from './sidebar/index.svelte';
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
  <nav>
    <Sidebar context={$context} communities={communities || []} />
  </nav>
  <section>
    <slot />
  </section>
</div>
