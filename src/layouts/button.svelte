<style lang="postcss">
  button {
    background-color: var(--paper);
    border: 1px solid var(--paper);
    color: var(--text);

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    &:hover {
      cursor: pointer;
      opacity: 0.7;
    }

    &:focus {
      background-color: var(--paper);
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
  }

  .primary {
    background-color: var(--primary);
    color: white;

    &:focus {
      background-color: var(--primary);
    }
  }

  .secondary {
    background-color: var(--secondary);
    color: white;

    &:focus {
      background-color: var(--secondary);
    }
  }

  .positive {
    background-color: var(--brand);
    color: white;

    &:focus {
      background-color: var(--brand);
    }
  }

  .negative {
    background-color: var(--danger);
    color: white;

    &:focus {
      background-color: var(--danger);
    }
  }

  .loader {
    border: 2px solid var(--background);
    border-top: 2px solid var(--primary);
    border-radius: 50%;
    width: 24px;
    height: 24px;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>

<script lang="ts">
  import {createEventDispatcher} from 'svelte';

  export let primary = false;
  export let secondary = false;
  export let positive = false;
  export let negative = false;
  export let size: 'small' | 'medium' = 'medium';
  export let type: 'submit' | undefined = undefined;
  export let style = '';
  export let disabled = false;
  export let loading = false;

  const dispatch = createEventDispatcher();

  function handleClick() {
    dispatch('click');
  }
</script>

<button
  class:primary
  class:secondary
  class:positive
  class:negative
  class:small={size === 'small'}
  class:medium={size === 'medium'}
  class={$$props.class}
  type={type}
  style={style}
  disabled={disabled}
  on:click={handleClick}
>
  {#if loading}
    <div class="loader" />
  {:else}
    <slot />
  {/if}
</button>
