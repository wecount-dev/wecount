<script lang="ts">
  let string = `This is <strong>Temp!</strong>`;

  import Carousel from '../uis/Carousel.svelte';

  const item = {
    user: {
      name: 'Jay-flow',
      imageUrl: 'https://source.unsplash.com/random/50x50',
      role: '최고 관리자',
    },
    community: {
      name: 'dooboolab',
      description: 'PREMIUM ACCOUNT',
      isPublic: false,
    },
    colors: ['#28DB98', '#72E6FF', '#3A74E7', '#834FF3', '#2A2A2C'],
  };

  function getColor(selectedColor: string) {
    /*eslint no-console: */
    console.log(selectedColor);
  }
</script>

<div>
  <p>{@html string}</p>

  <Carousel
    item={item}
    onChange={getColor}
    carouselStyle={'margin:30px;'}
    communityNameStyle={'color: white'}
  />
</div>
