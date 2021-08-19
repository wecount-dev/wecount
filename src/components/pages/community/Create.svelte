<style lang="postcss">
  .container {
    display: flex;
    justify-content: center;

    @media (max-width: 640px) {
      padding: 0px 20px;
    }
  }

  .wrap {
    width: 620px;

    @media (max-width: 640px) {
      width: 100%;
    }
  }

  .title {
    margin-top: 40px;
    margin-bottom: 22px;
  }

  .community-card-carousel {
    margin-bottom: 20px;
  }

  .input-loayout {
    display: flex;
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
    // eslint-disable-next-line no-console
    console.log(selectedColor);
  }
</script>

<div class="container">
  <div class="wrap">
    <h3 class="title">
      {$_('app_name')}<br />{$_('Community.create_community')}
    </h3>
    <div class="community-card-carousel">
      <Card
        cardStyle="padding: 28px 18px; display: flex; justify-content: center; align-items: center;"
      >
        <Carousel item={item} onChange={getColor} />
      </Card>
    </div>
    <div>
      <Card cardStyle="padding: 28px;">
        <div class="input-loayout">Hello world</div>
      </Card>
    </div>
  </div>
</div>
