<!-- svelte-ignore css-unused-selector -->
<style lang="postcss">
  textarea {
    flex: 1;
    color: var(--text);
    text-transform: none;
    font-size: var(--font-size, 14px);
    font-family: inherit;
    padding: 11px 16px;
    border-radius: 4px;
    background-color: transparent;
    background: transparent;
    resize: none;
    border: 1px solid var(--border);

    &:focus-within {
      border: 1px solid var(--input-focus);
    }

    &:focus {
      outline: none;
    }

    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 1000px var(--background) inset !important;
    }
  }
</style>

<script lang="ts">
  export let placeholder = '';
  export let style = '';

  export let value = '';
</script>

<textarea style={style} placeholder={placeholder} bind:value />
