<style lang="postcss">
  .container {
    display: flex;
    justify-content: center;
  }
  .wrap {
    width: 620px;
  }
  .title {
    margin-top: 40px;
    margin-bottom: 22px;
  }
</style>

<script lang="ts">
  import {_} from 'svelte-i18n';
  import Card from '../../uis/Card.svelte';
  import Carousel from './Carousel.svelte';

  const item = {
    user: {
      name: 'Jay-flow',
      imageUrl: 'https://source.unsplash.com/random/50x50',
      role: '최고 관리자',
    },
    community: {
      name: 'dooboolab',
      description: 'PREMIUM ACCOUNT',
      isPublic: true,
    },
    colors: ['#28DB98', '#72E6FF', '#3A74E7', '#834FF3', '#2A2A2C'],
  };

  function getColor(selectedColor: string) {
    console.log(selectedColor);
  }
</script>

<div class="container">
  <div class="wrap">
    <h3 class="title">
      {$_('app_name')}<br />{$_('Community.create_community')}
    </h3>
    <Card
      cardStyle="padding: 28px; display: flex; justify-content: center; align-items: center"
    >
      <Carousel item={item} onChange={getColor} />
    </Card>
  </div>
</div>
