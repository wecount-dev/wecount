<style lang="postcss">
  .menu {
    background-color: white;
    width: 44px;
    height: 44px;
    box-sizing: border-box;
    border-radius: 10px;
    margin-bottom: 16px;
    cursor: pointer;
    border: 1.5px solid white;
    user-select: none;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .seleted-menu {
    border: 1.5px solid var(--green40);
  }

  img {
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
  export let isSelected = false;
  export let style: string | undefined = undefined;

  const imageURL = community.thumbURL || community.imageURL;
  const dispatch = createEventDispatcher();

  function handleClick() {
    dispatch('click', {id: community.id});
  }
</script>

<div
  class="menu {$$props.class}"
  class:seleted-menu={isSelected}
  style={style}
  on:click={handleClick}
>
  <img src={imageURL} alt="icon" style="icon" />
</div>
