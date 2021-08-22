<!-- svelte-ignore css-unused-selector -->
<style lang="postcss">
  main {
    background: var(--background-color);
    box-shadow: 2px 12px 12px rgba(0, 0, 0, 0.02);
    border-radius: 16px;
    padding: 28px;
    margin-right: 20px;

    @media (max-width: 640px) {
      border-radius: 0px;
    }
  }

  .title-container {
    margin-bottom: 12px;
    display: flex;
    justify-content: space-between;

    .title {
      font-weight: bold;
      font-size: 18px;
    }
    .title-acceptall {
      color: var(--blue50);
      font-size: 14px;
    }
  }
</style>

<script lang="ts">
  import {createEventDispatcher, onDestroy, onMount} from 'svelte';
  import {_} from 'svelte-i18n';
  import {SvgBadgeCrown, SvgTrashcan} from '../../../utils/Icon';
  import Button from '../../uis/Button.svelte';
  import Select from '../../uis//Select.svelte';

  interface User {
    image: string;
    name: string;
  }

  export let data: User[];
  export let count = 0;

  let threshold = 100;

  const dispatch = createEventDispatcher();
  let scrollComponent: HTMLElement;
  let lastLength = 0;

  const onScroll = (e: Event) => {
    const offset =
      //@ts-ignore
      e.target.scrollHeight - e.target.clientHeight - e.target.scrollTop;

    if (offset <= threshold && lastLength !== data.length) {
      dispatch('endReached');
      lastLength = data.length;
    }
  };

  onMount(() => {
    scrollComponent.addEventListener('scroll', onScroll);
    scrollComponent.addEventListener('resize', onScroll);

    if (
      scrollComponent.scrollHeight <=
      scrollComponent.clientHeight - scrollComponent.scrollTop
    )
      dispatch('endReached');
  });

  onDestroy(() => {
    scrollComponent.removeEventListener('scroll', onScroll);
    scrollComponent.removeEventListener('resize', onScroll);
  });

  const onUpdate = (user: User, isAccessed: boolean) => {
    dispatch('update', {user, isAccessed});
  };
</script>

<main class={$$props.class}>
  <div class="title-container">
    <div class="title">
      {$_('member')} <span style="color:var(--blue50)">{count}</span>
    </div>
    <div class="title-acceptall">{$_('Member.accept_all')}</div>
  </div>
  <div class="itemContainer" bind:this={scrollComponent}>
    {#each data as user}{/each}
  </div>
</main>
