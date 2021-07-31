<style lang="scss">
  main {
    border: 1px solid var(--input-border);
    box-sizing: border-box;
    border-radius: 4px;
    padding: 11px 16px;

    display: flex;
    flex-direction: row;
    align-items: center;

    input {
      flex: 1;
      color: var(--text);
      text-transform: none;
      font-size: var(--font-size, 14px);
      margin-left: 12px;
      margin-top: 4px;
      font-family: inherit;
      background-color: transparent;
      background: transparent;
      border: none;
    }

    *:focus {
      outline: none;
    }
  }

  main:focus-within {
    border: 1px solid var(--input-focus);
  }
</style>

<script lang="ts">
  import {createEventDispatcher} from 'svelte';

  export let placeholder = '';
  export let type = 'text';
  export let containerStyle = '';
  export let inputStyle = '';

  let value = '';
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
  <div class="test" />
</main>
