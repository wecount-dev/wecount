<style lang="postcss">
  .container {
    padding: 10px 20px;
    cursor: pointer;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .selected-name {
    font-size: 0.875rem;
    font-weight: 700;
    color: var(--text);
  }

  .unselected-name {
    font-size: 0.875rem;
    font-size: 400;
    color: var(--text);
  }

  .notification-counts {
    background-color: var(--main-dark);
    min-width: 25px;
    height: 14px;
    border-radius: 1000px;
    font-size: 0.688rem;
    font-weight: bold;
    color: white;
    padding: 3px 1px;

    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

<script lang="ts">
  import type {MenuType} from '../../../../types';
  import {push} from 'svelte-spa-router';

  export let menu: MenuType;
  export let isSelected: boolean;
  export let selectMenu: (path: string) => void;

  const onClick = async (path: string) => {
    selectMenu(path);
    await push(menu.path);
  };
</script>

<div
  class="container"
  style="background-color: {isSelected
    ? 'var(--placeholder)'
    : 'var(--background)'}"
  on:click={() => onClick(menu.path)}
>
  <span class:selected-name={isSelected} class:unselected-name={!isSelected}>
    {menu.name}
  </span>
  {#if menu.notificationCounts}
    <span class="notification-counts">
      +{menu.notificationCounts}
    </span>
  {/if}
</div>
