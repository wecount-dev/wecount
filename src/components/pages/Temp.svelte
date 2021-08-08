<script lang="ts">
  import Drawer from '../uis/Drawer/Drawer.svelte';

  let string = `This is <strong>Temp!</strong>`;

  let item = {
    community: {
      imageUrl:
        'https://cdn.icon-icons.com/icons2/2620/PNG/512/among_us_player_red_icon_156942.png',
    },
    menu: [
      {
        name: '대시보드',
        url: 'https://localhost:5000/money/dashboard',
      },
      {
        name: '피드',
        notificationCounts: 99,
        url: 'https://localhost:5000/money/feed',
      },
    ],
  };

  let item2 = {
    community: {
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png',
    },
    menu: [
      {
        name: '커밋',
        url: 'https://localhost:5000/github/commit',
      },
      {
        name: '이슈',
        notificationCounts: 99,
        url: 'https://localhost:5000/github/issue',
      },
    ],
  };

  let items = [item, item2];

  const onSelectMenu = (url: string) => {
    console.log(`Selected URL: ${url}`);
  };
</script>

<div style="padding: 30px; background-color:#F2F5F6;">
  <p>{@html string}</p>

  <div>
    <Drawer items={items} onSelectMenu={onSelectMenu} />
  </div>
</div>
