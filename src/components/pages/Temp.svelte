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
    colors: ['#28DB98', '#72E6FF', '#3A74E7', '#834FF3', '#2A2A2C'],
  };

  function getColor(selectedColor: string) {
    /*eslint no-console: */
    console.log(selectedColor);
  }
</script>

<div style="padding: 30px; background-color:white;">
  <p>{@html string}</p>

  <div>
    <Carousel item={item} onChange={getColor} />
  </div>
</div>
