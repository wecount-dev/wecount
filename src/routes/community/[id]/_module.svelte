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
  import Sidebar from './sidebar/index.svelte';
  import {GREEN, SKY_BLUE} from '../../../theme';
  import {context} from '@roxi/routify';
</script>

<div class="container">
  <nav>
    <Sidebar
      context={$context}
      communities={[
        {
          id: '100',
          name: 'com',
          isPublic: true,
          currency: 'USD',
          description: 'community description',
          color: GREEN,
          createdAt: new Date().toISOString(),
        },
        {
          id: '101',
          name: 'Hello',
          isPublic: true,
          currency: 'USD',
          description: 'community description',
          color: SKY_BLUE,
          createdAt: new Date().toISOString(),
        },
      ]}
    />
  </nav>
  <section>
    <slot />
  </section>
</div>
