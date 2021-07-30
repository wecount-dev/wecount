<style>
  button {
    background-color: var(--button);
    color: var(--text);
    border: none;
    border-radius: 4px;
    padding: 0.5rem;
    text-transform: uppercase;
  }
</style>

<script>
  import {createEventDispatcher} from 'svelte';

  const dispatch = createEventDispatcher();

  function handleClick() {
    dispatch('click');
  }

</script>

<button on:click|preventDefault={handleClick}>
  <slot />
</button>
