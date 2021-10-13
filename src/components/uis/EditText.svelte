<!-- svelte-ignore css-unused-selector -->
<style lang="postcss">
  main {
    border: 1px solid var(--border) !important;
    box-sizing: border-box;
    border-radius: 4px;
    height: 50px;

    display: flex;
    flex-direction: row;
    align-items: center;

    &:focus-within {
      border: 1px solid var(--input-focus);
    }

    input {
      flex: 1;
      height: 100%;
      color: var(--text);
      caret-color: var(--text);
      text-transform: none;
      font-size: var(--font-size, 14px);
      padding: 12px 16px;
      font-family: inherit;
      background-color: transparent;
      background: transparent;
      border: none;

      &:focus {
        outline: none;
      }

      &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 1000px var(--paper) inset !important;
        -webkit-text-fill-color: var(--text) !important;
      }
    }
  }
</style>

<script lang="ts">
  import {createEventDispatcher} from 'svelte';

  export let placeholder = '';
  export let type = 'text';
  export let containerStyle = '';
  export let inputStyle = '';

  export let value = '';

  const dispatch = createEventDispatcher();

  // @ts-ignore
  const onChanged = (e) => {
    value = /^(number|range)$/.exec(type) ? +e.target.value : e.target.value;

    dispatch('changed', value);
  };
</script>

<main style={containerStyle}>
  <slot name="leftElement" />
  <input
    style={inputStyle}
    type={type}
    placeholder={placeholder}
    on:input={onChanged}
  />
  <slot name="rightElement" />
</main>
