<style lang="postcss">
  .primary {
    background-color: var(--primary);
    color: white;
  }

  .secondary {
    background-color: var(--secondary);
    color: white;
  }

  button {
    background-color: var(--button);
    color: var(--text);
    border: 1px solid var(--border);
    border-radius: 4px;
    padding: 0.5rem;
    height: 40px;

    &:hover {
      cursor: pointer;
      opacity: 0.7;
    }
  }
</style>

<script lang="ts">
  import {createEventDispatcher} from 'svelte';

  export let primary = false;
  export let secondary = false;
  export let type: 'submit' | undefined = undefined;
  export let style = '';
  export let disabled = false;

  const dispatch = createEventDispatcher();

  function handleClick() {
    dispatch('click');
  }
</script>

<button
  class:primary
  class:secondary
  class={$$props.class}
  type={type}
  style={style}
  disabled={disabled}
  on:click={handleClick}
>
  <slot />
</button>
