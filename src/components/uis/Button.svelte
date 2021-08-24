<style lang="postcss">
  button {
    background-color: var(--button);

    &:hover {
      cursor: pointer;
    }
  }

  .small {
    height: 32px;
    padding: 0px 12px;
    border-radius: 4px;
    border: none;
    color: var(--gray70);
    font-weight: bold;
    font-size: 14px;
  }

  .medium {
    border: 1px solid var(--border);
    border-radius: 4px;
    padding: 0.5rem;
    height: 40px;

    &:hover {
      opacity: 0.7;
    }
  }

  .primary {
    background-color: var(--primary);
    color: white;
  }

  .secondary {
    background-color: var(--secondary);
    color: white;
  }

  .blue {
    background-color: var(--blue10);
    color: var(--blue50);
  }
</style>

<script lang="ts">
  import {createEventDispatcher} from 'svelte';

  export let primary = false;
  export let secondary = false;
  export let blue = false;
  export let size: 'small' | 'medium' = 'medium';
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
  class:blue
  class:small={size === 'small'}
  class:medium={size === 'medium'}
  class={$$props.class}
  type={type}
  style={style}
  disabled={disabled}
  on:click={handleClick}
>
  <slot />
</button>
