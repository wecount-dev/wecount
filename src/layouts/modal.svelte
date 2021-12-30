<style>
  .backdrop {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 99;
  }
</style>

<script>
  import {createEventDispatcher} from 'svelte';

  export let visible;
  export let style = '';
  export let disableBackdropClickToClose = false;

  const dispatch = createEventDispatcher();

  const handleBackdropClick = () => {
    if (disableBackdropClickToClose) {
      return;
    }

    visible = false;
    dispatch('close');
  };
</script>

{#if visible}
  <div class="backdrop" style={style} on:click|self={handleBackdropClick}>
    <slot />
  </div>
{/if}
