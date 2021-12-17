<!-- svelte-ignore css-unused-selector -->
<style lang="postcss">
  .container {
    display: grid;
    grid-template-rows: 1fr min-content;
    row-gap: 10px;

    &:focus-within {
      border: 1px solid var(--input-focus);
    }

    .input-wrapper {
      border: 1px solid var(--border) !important;
      box-sizing: border-box;
      border-radius: 4px;

      display: grid;
      grid-template-columns: min-content 1fr min-content;
      align-items: center;
    }

    input {
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

    .errorText {
      color: red;
      font-size: var(--font-size, 14px);

      display: grid;
      justify-self: start;
    }
  }
</style>

<script lang="ts">
  import {createEventDispatcher} from 'svelte';

  export let placeholder = '';
  export let type = 'text';
  export let containerStyle = '';
  export let inputStyle = '';
  export let errorText = '';

  export let value = '';

  const dispatch = createEventDispatcher();

  // @ts-ignore
  const onChanged = (e) => {
    value = /^(number|range)$/.exec(type) ? +e.target.value : e.target.value;

    dispatch('changed', value);
  };
</script>

<div class="container" style={containerStyle}>
  <div class="input-wrapper">
    <slot name="leftElement" />
    <input
      style={inputStyle}
      type={type}
      placeholder={placeholder}
      on:input={onChanged}
    />
    <slot name="rightElement" />
  </div>
  <div class="errorText">
    <span style="margin-left: 15px">
      {errorText}
    </span>
  </div>
</div>
