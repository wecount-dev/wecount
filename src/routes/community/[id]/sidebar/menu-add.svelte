<style lang="postcss">
  .menu {
    width: 44px;
    height: 44px;
    box-sizing: border-box;
    border-radius: 10px;
    margin-bottom: 16px;
    cursor: pointer;
    user-select: none;
    background-position: center;
    transition: var(--background) 0.8s;
    border: 1.5px solid var(--border);
    background-color: var(--paper);

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .menu:hover {
    background: var(--background)
      radial-gradient(circle, transparent 1%, var(--link) 1%) center/15000%;
  }

  .menu:active {
    background-color: var(--link);
    background-size: 100%;
    transition: background 0s;
  }
</style>

<script lang="ts">
  import {SvgPlus} from '../../../../utils/icons';
  import {createEventDispatcher} from 'svelte';

  export let style: string | undefined = undefined;

  const dispatch = createEventDispatcher();

  function handleClick() {
    dispatch('click');
  }
</script>

<div class="menu" style={style} on:click={handleClick}>
  <img src={SvgPlus} alt="plus" />
</div>
