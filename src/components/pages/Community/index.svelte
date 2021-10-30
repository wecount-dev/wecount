<style lang="postcss">
  .container {
    background-color: var(--paper);
    overflow: hidden;

    display: flex;
    justify-content: center;
  }

  section {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
  }
</style>

<script lang="ts">
  import Router, {push} from 'svelte-spa-router';
  import Drawer from './Drawer/index.svelte';
  import Main from './Main.svelte';
  import Member from './Member.svelte';
  import Feed from './Feed.svelte';
  import Settings from './Settings.svelte';
  import {GREEN, SKY_BLUE} from '../../../theme';

  const prefix = '/community';
  const routes = {
    '/:id/member': Member,
    '/:id/settings': Settings,
    '/:id/feed': Feed,
    '/:id': Main,
  };
</script>

<div class="container">
  <nav>
    <Drawer
      communities={[
        {
          id: '100',
          name: 'Com',
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
      onSelectMenu={async (path) => {
        await push(path);
      }}
    />
  </nav>
  <section>
    <Router routes={routes} prefix={prefix} />
  </section>
</div>
