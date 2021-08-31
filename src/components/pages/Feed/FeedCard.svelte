<style lang="postcss">
  .container {
    display: flex;
    width: 100%;
    box-sizing: border-box;
    padding: 28px;
    background-color: var(--background-color);
    box-shadow: 2px 12px 12px rgba(0, 0, 0, 0.02);
    border-radius: 16px;
    margin-bottom: 24px;
    flex-direction: column;
    @media (max-width: 1200px) {
      border-radius: 0px;
    }
  }
  .header {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    @media (max-width: 1200px) {
      flex-direction: column;
      align-items: flex-start;
    }
    .avatar-container {
      display: flex;
      align-items: center;
      img {
        width: 48px;
        height: 48px;
        border-radius: 24px;
        margin-right: 12px;
      }
      .avatar-label-container {
        flex: 1;
        min-width: 150px;

        .from-now {
          font-size: 14px;
          color: var(--gray60);
        }
        .user-name {
          font-size: 14px;
          font-weight: bold;
        }
      }
    }

    .header-right-container {
      display: flex;
      align-itmes: center;
      @media (max-width: 1200px) {
        flex-direction: column;
        align-items: flex-start;
        margin-top: 20px;
      }
      .price-container {
        display: flex;
        align-itmes: center;
        .price-label {
          margin-left: 4px;
          margin-right: 12px;
          font-size: 16px;
        }
        .price {
          font-size: 16px;
          font-weight: bold;
        }
      }
      .line {
        margin: 0px 16px;
        width: 1px;
        height: 14px;
        background-color: var(--gray40);
        @media (max-width: 1200px) {
          width: 0px;
        }
      }
      .title-container {
        display: flex;
        align-itmes: center;
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
    SvgMinusCircleFill,
    SvgPlusCircleFill,
    SvgShoppingBag,
  } from '../../../utils/Icon';

  import Pictures from '../../uis/Pictures.svelte';

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

<div class="container">
  <div class="header">
    <div class="avatar-container">
      <img alt="User Avatar" src={data.user.avatar_url} />
      <div class="avatar-label-container">
        <div class="from-now">{dayjs(data.createdAt).fromNow()}</div>
        <div class="user-name">{data.user.name}</div>
      </div>
    </div>
    <div class="header-right-container">
      <div class="price-container">
        {#if isIncome}
          <SvgPlusCircleFill />
        {:else}
          <SvgMinusCircleFill />
        {/if}
        <div class="price-label">
          {isIncome ? $_('Feed.income') : $_('Feed.spending')}
        </div>
        <div class="price">{Math.abs(data.price).toLocaleString()}</div>
      </div>
      <div class="line" />
      <div class="title-container">
        <SvgShoppingBag />
        <div class="title-label">{$_('Feed.title')}</div>
        <div class="title">{data.title}</div>
      </div>
    </div>
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
  <Pictures urls={data.Image.map((v) => v.url)} />
</div>
