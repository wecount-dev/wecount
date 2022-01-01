<style lang="postcss">
  .container {
    background-color: var(--background);
    max-width: 800px;
    min-height: 100px;
    padding: 24px 0;
    overflow: hidden;

    display: grid;
    grid-template-rows: 48px 1fr 48px;
    row-gap: 24px;

    @media (--mobile) {
      width: 100%;
      grid-template-rows: 48px 1fr 80px;
    }
  }

  .header {
    padding: 0 24px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: start;
    align-items: center;

    @media (--mobile-sm) {
      width: 76%;
    }

    .title {
      color: var(--text);
      font-weight: bold;
      font-size: 1.2rem;
    }

    .price {
      display: grid;
      align-items: center;
      grid-auto-flow: column;
      justify-self: end;

      span {
        margin-left: 4px;
      }
    }
  }

  .content {
    padding: 0 24px;
    text-align: left;

    display: grid;
    row-gap: 20px;
    grid-auto-flow: row;

    @media (--mobile-sm) {
      width: 76%;
    }
  }

  .footer {
    padding: 0 24px;

    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;

    @media (--mobile-sm) {
      width: 76%;

      display: flex;
      flex-direction: column-reverse;
      align-items: flex-start;
    }

    .user {
      display: grid;
      grid-auto-flow: column;
      align-items: center;
      grid-auto-columns: min-content;
      column-gap: 12px;

      @media (--mobile) {
        grid-auto-columns: max-content;
      }

      img {
        border-radius: 24px;
        width: 48px;
        height: 48px;
      }

      span {
        overflow: hidden;
        min-width: 200px;
        text-align: left;
        font-size: 1rem;
        grid-auto-flow: row;
        font-weight: bold;

        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }

    .date {
      justify-self: end;
      font-size: 0.9rem;
      color: var(--disabled);

      @media (--mobile) {
        align-items: center;
        padding-bottom: 12px;
        grid-auto-columns: max-content;
      }
    }
  }
</style>

<script lang="ts">
  import type {FeedWithUserAndImages} from '../services/feedService';
  import {formatDistance} from 'date-fns';
  import {SvgPlusCircleFill} from '../utils/icons';
  import ImageCollection from './image-collection.svelte';

  export let feed: FeedWithUserAndImages;
</script>

<div class="container">
  <div class="header">
    <span class="title">{feed.title}</span>
    <div class="price">
      <img src={SvgPlusCircleFill} alt="plus" />
      <span
        >{feed.price.toLocaleString('en-US', {
          style: 'currency',
          currency: 'KRW',
        })}
      </span>
    </div>
  </div>
  <div class="content">
    {feed.content}
    <ImageCollection images={feed.images || []} />
  </div>
  <div class="footer">
    <div class="user">
      <img
        src="https://user-images.githubusercontent.com/27461460/147486069-97d7b5d3-946b-4f32-a459-d73c0b950c8e.png"
        alt="user"
      />
      <span class="name">HackaTalk</span>
    </div>
    <span class="date"
      >{feed.createdAt
        ? formatDistance(new Date(feed.createdAt), new Date(), {
            addSuffix: true,
          })
        : ''}</span
    >
  </div>
</div>
