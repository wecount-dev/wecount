<style lang="postcss">
  .container {
    padding-bottom: 20px;
    grid-column: 1fr;
    grid-row: 1fr;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (--mobile) {
      background-color: var(--paper);
    }
  }
  .greeting {
    padding: 40px 0;
    text-align: center;
    margin-bottom: 70px;
    @media (--mobile) {
      margin-bottom: 0;
    }
  }
  .card-wrapper {
    flex-wrap: wrap;
    gap: 24px;
    display: flex;
    justify-content: center;
  }
</style>

<script lang="ts">
  import {goto, url} from '@roxi/routify';

  import {_} from 'svelte-i18n';
  import {user} from '../stores/sessionStore';
  import {SvgGreenPlusCircle, SvgEntering} from '../utils/icons';
  import Card from '../layouts/onboard-card.svelte';

  type MenuType = {
    title: string;
    body: string;
    onPress: () => void;
  };

  const menus: MenuType[] = [
    {
      title: $_('onboard.create_community'),
      body: $_('onboard.create_community_desc'),
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      onPress: (): void => $goto($url('/community/create')),
    },
    {
      title: $_('onboard.see_communities'),
      body: $_('onboard.see_communities_desc'),
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      onPress: () => $goto($url('/community')),
    },
  ];
</script>

<div class="container">
  <div class="greeting">
    <div class="heading3">{$_('onboard.hello')}</div>
    <div class="heading3">{$_('onboard.welcome')}</div>
  </div>
  <div class="card-wrapper">
    {#each menus as { title, body, onPress }, i}
      {#if !$user && i === 0}
        <div />
      {:else}
        <Card title={title} body={body} on:click={onPress}>
          <svelte:fragment slot="icon">
            {#if i === 0}
              <img src={SvgGreenPlusCircle} alt="logo" />
            {:else}
              <img src={SvgEntering} alt="logo" />
            {/if}
          </svelte:fragment>
        </Card>
      {/if}
    {/each}
  </div>
</div>
