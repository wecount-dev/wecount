<style lang="postcss">
  main {
    padding: 0 10%;
    display: flex;
  }
  .container {
    width: 100%;
    height: 100%;
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
  <Drawer communites={communites} onSelectMenu={onSelectMenu} />
  <div class="container">
    <Router routes={routes} prefix={prefix} />
  </div>
</main>
