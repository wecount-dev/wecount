<!-- svelte-ignore css-unused-selector -->
<style lang="postcss">
  main {
    background: var(--background-color);
    box-shadow: 2px 12px 12px rgba(0, 0, 0, 0.02);
    border-radius: 16px;
    padding: 28px;
    padding-right: 14px;
    margin-right: 20px;

    @media (--mobile) {
      border-radius: 0px;
      margin-right: 0px;
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
      font-weight: bold;
      cursor: pointer;
    }
  }

  .scrollview {
    padding-top: 16px;
    overflow-y: scroll;
  }
  .scrollview::-webkit-scrollbar {
    width: 4px;
  }
  .scrollview::-webkit-scrollbar-track {
    margin-top: 24px;
  }
  .scrollview::-webkit-scrollbar-thumb {
    width: 4px;
    background: var(--gray30);
    border-radius: 2px;
  }

  .item-container {
    display: flex;
    margin-right: 14px;
    align-items: center;
    margin-bottom: 16px;
    .item-image {
      width: 48px;
      height: 48px;
      border-radius: 24px;
      margin-right: 12px;
      object-fit: cover;
    }
    .item-name {
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
</style>

<script lang="ts">
  import {createEventDispatcher, onDestroy, onMount} from 'svelte';
  import {_} from 'svelte-i18n';
  import Button from '../../uis/Button.svelte';

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

  const onAcceptAll = () => {
    dispatch('acceptAll');
  };

  const onUpdate = (user: User, isAccessed: boolean) => {
    dispatch('update', {user, isAccessed});
  };
</script>

<main class={$$props.class}>
  <div class="title-container">
    <div class="title">
      {$_('member')} <span style="color:var(--blue50)">{count}</span>
    </div>
    <div on:click={onAcceptAll} class="title-acceptall">
      {$_('Member.accept_all')}
    </div>
  </div>
  <div class="scrollview" bind:this={scrollComponent}>
    {#each data as user}
      <div class="item-container">
        <img src={user.image} alt="profileImage" class="item-image" />
        <div class="item-name">{user.name}</div>
        <Button
          style="margin-right: 8px;"
          on:click={() => onUpdate(user, true)}
          positive
          size="small">수락하기</Button
        >
        <Button on:click={() => onUpdate(user, false)} size="small"
          >거절하기</Button
        >
      </div>
    {/each}
  </div>
</main>
