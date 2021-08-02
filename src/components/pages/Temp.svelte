<script lang="ts">
  import Carousel from '../uis/Carousel/Carousel.svelte';

  let string = `This is <strong>Temp!</strong>`;

  const item = {
    user: {
      name: 'Jay-flow',
      imageUrl: 'https://source.unsplash.com/random/50x50',
      role: '최고 관리자',
    },
    community: {name: 'dooboolab', description: 'PREMIUM ACCOUNT'},
    isPublic: true,
    selectedColor: '#28DB98',
  };

  const items = [item, item, item, item, item, item];
</script>

<div style="padding: 30px; background-color:white;">
  <p>{@html string}</p>

  <div>
    <Carousel items={items} />
  </div>
</div>
