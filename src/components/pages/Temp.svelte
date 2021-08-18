<script lang="ts">
  import Drawer from '../uis/Drawer/Drawer.svelte';

  const string = `This is <strong>Temp!</strong>`;

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
</script>

<div style="padding: 30px; background-color:#F2F5F6;">
  <p>{@html string}</p>

  <div>
    <Drawer communites={communites} onSelectMenu={onSelectMenu} />
  </div>
</div>
