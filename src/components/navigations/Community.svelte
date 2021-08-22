<style lang="postcss">
  main {
    display: flex;
    justify-content: center;
  }
  .community-route {
    display: flex;
    width: 1200px;

    @media (max-width: 1200px) {
      width: 100%;
    }
  }
  .navigation {
    height: calc(100vh - 56px);
    position: sticky;
    top: 56px;
    left: 0;
  }

  .container {
    width: 100%;
  }
</style>

<script lang="ts">
  import Router from 'svelte-spa-router';
  import Drawer from '../uis/Drawer/Drawer.svelte';
  import Temp from '../pages/Temp.svelte';

  const communites = [
    {
      id: '1',
      imageUrl:
        'https://cdn.icon-icons.com/icons2/2620/PNG/512/among_us_player_red_icon_156942.png',
    },
    {
      id: '2',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png',
    },
  ];

  const onSelectMenu = (path: string) => {
    // eslint-disable-next-line no-console
    console.log(`Selected Path: ${path}`);
  };

  const prefix = '/community';
  const routes = {
    '/*': Temp,
  };
</script>

<main>
  <div class="community-route">
    <div class="navigation">
      <Drawer communites={communites} onSelectMenu={onSelectMenu} />
    </div>
    <div class="container">
      <Router routes={routes} prefix={prefix} />
    </div>
  </div>
</main>
