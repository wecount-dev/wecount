<style lang="postcss">
  .community-route {
    display: flex;
    justify-content: center;
    background-color: var(--paper);
    overflow: hidden;
  }
  .layout {
    width: 1200px;
    height: calc(100vh - 56px);
    display: flex;

    @media (max-width: 1200px) {
      width: 100%;
    }
  }
  section {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
  }
</style>

<script lang="ts">
  import Dashboard from '../../pages/dashboard/Index.svelte';
  import Router from 'svelte-spa-router';
  import Drawer from './Drawer/index.svelte';
  import Temp from '../../pages/Temp.svelte';
  import Member from '../../pages/Member/Member.svelte';
  import Feed from '../../pages/Feed/Feed.svelte';

  const communites = [
    {
      id: '1',
      imageUrl: 'https://picsum.photos/50/50?random=1',
    },
    {
      id: '2',
      imageUrl: 'https://picsum.photos/50/50?random=2',
    },
  ];

  const onSelectMenu = (path: string) => {
    // eslint-disable-next-line no-console
    console.log(`Selected Path: ${path}`);
  };

  const prefix = '/community';
  const routes = {
    '/member': Member,
    '/dashboard': Dashboard,
    '/feed': Feed,
    '/*': Temp,
  };
</script>

<div class="community-route">
  <div class="layout">
    <nav>
      <Drawer communites={communites} onSelectMenu={onSelectMenu} />
    </nav>
    <section>
      <Router routes={routes} prefix={prefix} />
    </section>
  </div>
</div>
