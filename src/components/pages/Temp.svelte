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
  };

  const items = [
    {...item, selectedColor: '#28DB98'},
    {...item, selectedColor: '#72E6FF'},
    {...item, selectedColor: '#3A74E7'},
    {...item, selectedColor: '#834FF3'},
    {...item, selectedColor: '#2A2A2C'},
  ];
</script>

<div style="padding: 30px; background-color:white;">
  <p>{@html string}</p>

  <div>
    <Carousel items={items} />
  </div>
</div>
