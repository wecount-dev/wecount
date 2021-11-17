<style lang="postcss">
  .container {
    padding-bottom: 20px;

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
  import {_} from 'svelte-i18n';
  import {push} from 'svelte-spa-router';
  import {SvgGreenPlusCircle, SvgEntering} from '../../../utils/Icon';
  import Card from './Card.svelte';

  type MenuType = {
    title: string;
    body: string;
    onPress: () => void;
  };

  const menus: MenuType[] = [
    {
      title: $_('Onboarding.create_community'),
      body: $_('Onboarding.create_community_desc'),
      onPress: () => push('/community/create'),
    },
    {
      title: $_('Onboarding.see_communities'),
      body: $_('Onboarding.see_communities_desc'),
      onPress: () => push('/communities'),
    },
  ];
</script>

<div class="container">
  <div class="greeting">
    <div class="heading3">{$_('Onboarding.hello')}</div>
    <div class="heading3">{$_('Onboarding.welcome')}</div>
  </div>
  <div class="card-wrapper">
    {#each menus as {title, body, onPress}, i}
      <Card title={title} body={body} on:click={onPress}>
        <svelte:fragment slot="icon">
          {#if i === 0}
            <SvgGreenPlusCircle />
          {:else}
            <SvgEntering />
          {/if}
        </svelte:fragment>
      </Card>
    {/each}
  </div>
</div>
