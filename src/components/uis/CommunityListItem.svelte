<style lang="postcss">
  .container {
    height: 172px;
    min-width: 420px;
    max-width: 540px;
    background-color: var(--background);
    border-radius: 30px;
    padding: 12px 18px;

    display: grid;
    row-gap: 8px;
    column-gap: 20px;
    grid-auto-flow: column;
    grid-template-columns: 106px 1fr;
    grid-template-rows: 1fr 1px 50px;
    grid-template-areas:
      'card content'
      'line line'
      'menu menu';
  }

  .card {
    grid-area: card;
    border-radius: 30px;

    display: grid;
    justify-content: center;
    align-content: center;
    text-align: center;
    overflow: hidden;
  }

  .content {
    grid-area: content;

    display: grid;
    align-content: start;

    .heading5 {
      margin: 2px 0;
    }
  }

  .menu {
    grid-area: menu;

    display: grid;
    align-content: center;
    grid-auto-flow: column;

    .balance {
      display: grid;
      grid-auto-flow: column;
      justify-self: start;

      p {
        line-height: 130%;
        text-align: center;
        justify-self: center;
        padding: 0 4px;

        span {
          color: var(--primary);
        }

        &:nth-child(2) {
          padding: 0 24px;
        }
      }
    }

    :global(.button) {
      display: grid;
      align-self: center;
      justify-self: end;
    }
  }

  .line {
    grid-area: line;
    height: 1px;
    background-color: var(--disabled);
  }
</style>

<script lang="ts">
  import {_} from 'svelte-i18n';

  import {definitions} from '../../types/supabase';
  import Button from './Button.svelte';

  export let community: definitions['Community'];
  const communityInitial: string[1] = community.name[0];
  const image = community.thumbURL || community.imageURL;
</script>

<div class="container">
  <div class="card heading4" style="background-color:{community.color}">
    {#if image}
      <img src={image} alt={communityInitial} />
    {:else}
      <p>{communityInitial}</p>
    {/if}
  </div>
  <div class="content">
    <div class="heading5">{community.name}</div>
    <div class="body2">{community.description}</div>
  </div>
  <div class="menu">
    <div class="balance">
      <p class="body3">
        {$_('sponsors')}<br />
        <span>1명</span>
      </p>
      <p class="body3">
        {$_('total_raised')}<br />
        <span>$11,592.06</span>
      </p>
      <p class="body3">
        {$_('current_balance')}<br />
        <span>$3,155</span>
      </p>
    </div>
    <Button
      primary
      class="button"
      style="width: 100px;"
      on:click={async () => {
        // await push(`/community/${community.id}`);
      }}
    >
      <div class="body3">{$_('more')}</div>
    </Button>
  </div>
  <div class="line" />
</div>
