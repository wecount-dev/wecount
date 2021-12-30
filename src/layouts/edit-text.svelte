<!-- svelte-ignore css-unused-selector -->
<style lang="postcss">
  .edit-text {
    display: grid;
    grid-template-rows: 1fr min-content;

    &:focus-within {
      border: 1px solid var(--text);
    }

    .input-wrapper {
      border: 1px solid var(--border) !important;
      box-sizing: border-box;
      border-radius: 4px;
      grid-auto-flow: column;

      display: grid;
      align-items: center;
    }

    input,
    textarea {
      background-color: var(--background-color);
      color: var(--text);
      caret-color: var(--text);
      text-transform: none;
      font-size: var(--font-size, 14px);
      padding: 12px 16px;
      font-family: inherit;
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
      margin-top: 10px;

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
  export let numOfLines = 1;

  const dispatch = createEventDispatcher();

  // @ts-ignore
  const onChanged = (e) => {
    value = /^(number|range)$/.exec(type) ? +e.target.value : e.target.value;

    dispatch('changed', value);
  };
</script>

<div class="edit-text" style={containerStyle}>
  <div class="input-wrapper">
    <slot name="leftElement" />
    {#if numOfLines === 1}
      <input
        style={inputStyle}
        type={type}
        placeholder={placeholder}
        on:input={onChanged}
      />
    {:else if numOfLines > 1}
      <textarea
        style={inputStyle}
        type={type}
        placeholder={placeholder}
        rows={numOfLines}
        on:input={onChanged}
      />
    {/if}
    <slot name="rightElement" />
  </div>
  {#if errorText}
    <div class="errorText">
      <span style="margin-left: 15px">
        {errorText}
      </span>
    </div>
  {/if}
</div>
