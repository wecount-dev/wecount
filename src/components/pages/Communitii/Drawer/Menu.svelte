<style lang="postcss">
  .menu {
    width: 44px;
    height: 44px;
    box-sizing: border-box;
    border-radius: 10px;
    margin-bottom: 16px;
    cursor: pointer;
    border: 1.5px solid var(--border);
    user-select: none;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .seleted-menu {
    color: white;
    background-color: var(--community-color);
    border: 1.5px solid var(--green40);
  }

  .icon {
    object-fit: cover;
    max-width: 100%;
    max-height: 100%;
    box-sizing: border-box;
    border-radius: 10px;
  }
</style>

<script lang="ts">
  import {definitions} from '../../../../types/supabase';
  import {createEventDispatcher} from 'svelte';

  export let community: definitions['Community'];
  export let selected = false;
  export let style: string | undefined = undefined;

  let styles = {
    'community-color': community.color,
  };

  $: cssVarStyles = Object.entries(styles)
    .map(([key, value]) => `--${key}:${value as string}`)
    .join(';');

  const imageURL = community.thumbURL || community.imageURL;
  const dispatch = createEventDispatcher();

  function handleClick() {
    dispatch('click', {id: community.id});
  }
</script>

<div
  class="menu {$$props.class}"
  class:seleted-menu={selected}
  style="{cssVarStyles}; {style}"
  on:click={handleClick}
>
  {#if imageURL}
    <img class="icon" src={imageURL} alt={community.name.substring(0, 1)} />
  {:else}
    <div class="icon">{community.name.substring(0, 1)}</div>
  {/if}
</div>
