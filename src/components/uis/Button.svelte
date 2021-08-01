<style lang="scss">
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

<script>
  import {createEventDispatcher} from 'svelte';

  export let type = '';
  export let style = '';
  export let value = '';
  export let disabled = false;

  const dispatch = createEventDispatcher();

  function handleClick() {
    dispatch('click');
  }

</script>

<button
  {type}
  {style}
  {value}
  {disabled}
  on:click|preventDefault={handleClick}
>
  <slot />
</button>
