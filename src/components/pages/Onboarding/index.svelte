<style lang="postcss">
  .container {
    padding-bottom: 20px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (--mobile) {
      margin-bottom: 0px;
    }
  }
  .greeting {
    text-align: center;
    margin-bottom: 70px;
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

  type CardType = {
    title: string;
    body: string;
    onPress: () => void;
  };

  const cards: CardType[] = [
    {
      title: $_('Onboarding.create_community'),
      body: $_('Onboarding.create_community_desc'),
      onPress: () => push('/community/create'),
    },
    {
      title: $_('Onboarding.enter_community'),
      body: $_('Onboarding.enter_community_desc'),
      onPress: () => push('/community/dashboard'),
    },
  ];
</script>

<div class="container">
  <div class="greeting">
    <div class="heading3">{$_('Onboarding.hello')}</div>
    <div class="heading3">{$_('Onboarding.welcome')}</div>
  </div>
  <div class="card-wrapper">
    {#each cards as {title, body, onPress}, i}
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
