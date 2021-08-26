<style lang="postcss">
  main {
    display: flex;
    width: 100%;
    box-sizing: border-box;
    padding: 28px;
    background-color: var(--background-color);
    box-shadow: 2px 12px 12px rgba(0, 0, 0, 0.02);
    border-radius: 16px;
    margin-bottom: 24px;
    flex-direction: column;
  }
  .header {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    img {
      width: 48px;
      height: 48px;
      border-radius: 24px;
      margin-right: 12px;
    }
    .from-now {
      font-size: 14px;
      color: var(--gray60);
    }
    .user-name {
      font-size: 14px;
      font-weight: bold;
    }
    .price-label {
      margin-left: 4px;
      margin-right: 12px;
      font-size: 16px;
    }
    .price {
      font-size: 16px;
      font-weight: bold;
    }
    .line {
      margin: 0px 16px;
      width: 1px;
      height: 14px;
      background-color: var(--gray40);
    }
    .title-label {
      margin-left: 4px;
      margin-right: 12px;
      font-size: 16px;
    }
    .title {
      font-size: 16px;
      font-weight: bold;
    }
  }
  .description {
    margin: 20px 0px;
    color: var(--text);
    letter-spacing: -0.5px;
    font-size: 14px;
    line-height: 24px;
  }
  .category-list {
    display: flex;
  }
  .category-container {
    background-color: var(--blue10);
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 12px;
    border-radius: 15px;
    margin-right: 4px;
    cursor: pointer;
    margin-bottom: 20px;
  }
  .category {
    color: var(--blue90);
    font-size: 12px;
  }
</style>

<script lang="ts">
  import dayjs from 'dayjs';
  import {_} from 'svelte-i18n';
  import {
    SvgMinusCircle,
    SvgMinusCircleFill,
    SvgPlusCircleFill,
    SvgShoppingBag,
  } from '../../../utils/Icon';

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

  export let data: Feed;

  $: isIncome = data.price > 0;
</script>

<main>
  <div class="header">
    <img alt="User Avatar" src={data.user.avatar_url} />
    <div style="flex:1;">
      <div class="from-now">{dayjs(data.createdAt).fromNow()}</div>
      <div class="user-name">{data.user.name}</div>
    </div>
    {#if isIncome}
      <SvgPlusCircleFill />
    {:else}
      <SvgMinusCircleFill />
    {/if}
    <div class="price-label">
      {isIncome ? $_('Feed.income') : $_('Feed.spending')}
    </div>
    <div class="price">{Math.abs(data.price).toLocaleString()}</div>
    <div class="line" />
    <SvgShoppingBag />
    <div class="title-label">{$_('Feed.title')}</div>
    <div class="title">{data.title}</div>
  </div>
  <div class="description">
    {data.description}
  </div>
  <div class="category-list">
    {#each data.Category as category}
      <div class="category-container">
        <div class="category">#{category.name}</div>
      </div>
    {/each}
  </div>
</main>
