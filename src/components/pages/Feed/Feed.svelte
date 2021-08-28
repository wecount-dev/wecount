<style lang="postcss">
  .container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  .list-container {
    width: 800px;
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: flex-end;
    margin-right: 200px;
    @media (max-width: 1200px) {
      width: 100%;
      margin-right: 0px;
    }
  }
  :global(.create-feed-button) {
    margin-top: 24px;
    margin-bottom: 24px;
    font-size: 14px;
    @media (max-width: 1200px) {
      margin-right: 24px;
    }
  }
</style>

<script lang="ts">
  import {_} from 'svelte-i18n';
  import Button from '../../uis/Button.svelte';
  import FeedCreatePopup from '../../uis/FeedCreatePopup.svelte';
  import FeedCard from './FeedCard.svelte';
  import faker from 'faker/locale/en';
  import dayjs from 'dayjs';

  let feedCreatePopupVisible = false;

  const dummyCommunityInfo = {
    iconUri: 'https://picsum.photos/50/50?random=1',
    name: 'dooboolab',
    currency: 'USD',
  };

  interface Feed {
    id: string;
    createdAt: Date;
    title: string;
    price: number;
    description: string;
    Category: {name: string}[];
    Image: {url: string}[];
    user: {name: string; avatar_url: string};
  }

  /* eslint-disable @typescript-eslint/no-unsafe-call */
  const dummyFeeds: Feed[] = Array(30)
    .fill(0)
    .map(() => ({
      id: faker.datatype.uuid(),
      createdAt: faker.date.between('2021-06-01', dayjs().format('YYYY-MM-DD')),
      title: faker.company.companyName(),
      price: faker.datatype.number({min: -10000000, max: 10000000}),
      description: faker.lorem.lines(10),
      user: {
        avatar_url: faker.image.avatar(),
        name: faker.name.firstName(),
      },
      Category: Array(faker.datatype.number({min: 0, max: 5}))
        .fill(0)
        .map(() => ({
          name: faker.lorem.word(),
        })),
      Image: Array(6) //faker.datatype.number({min: 0, max: 10})
        .fill(0)
        .map(() => ({
          url: faker.image.image(),
        })),
    }));
</script>

<main>
  <div class="container">
    <div class="list-container">
      <Button
        on:click={() => (feedCreatePopupVisible = true)}
        primary
        class="create-feed-button">{$_('Feed.create_feed')}</Button
      >
      {#each dummyFeeds as feed}
        <FeedCard data={feed} />
      {/each}
    </div>
  </div>
  <FeedCreatePopup
    communityInfo={dummyCommunityInfo}
    bind:visible={feedCreatePopupVisible}
  />
</main>
