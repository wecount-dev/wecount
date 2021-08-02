<style lang="postcss">
  .primary {
    background-color: var(--primary);
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

  export let type: 'primary' | undefined = undefined;
  export let style = '';
  export let value = '';
  export let disabled = false;

  const dispatch = createEventDispatcher();

  function handleClick() {
    dispatch('click');
  }
</script>

<button
  type={type}
  class={type === 'primary' ? 'primary' : ''}
  style={style}
  value={value}
  disabled={disabled}
  on:click|preventDefault={handleClick}
>
  <slot />
</button>
