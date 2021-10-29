<!-- svelte-ignore css-unused-selector -->
<style lang="postcss">
  .container {
    border: 1px solid var(--border);
    box-sizing: border-box;
    border-radius: 4px;
    padding: 11px 16px;

    display: flex;
    flex-direction: row;
    align-items: center;

    &:focus-within {
      border: 1px solid var(--input-focus);
    }

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

      &:focus {
        outline: none;
      }

      &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 1000px var(--background) inset !important;
      }
    }
  }
</style>

<script lang="ts">
  export let placeholder = '';
  export let containerStyle = '';
  export let inputStyle = '';
  export let isLocaleString = false;
  export let max = 100000000000;
  export let min = 0;
  export let value: number | undefined = undefined;

  let input: HTMLInputElement | null = null;

  // @ts-ignore
  const onInput = () => {
    if (!input) return;

    const currentValue = input.value;
    let newValue = Number(currentValue.replace(/[A-Za-z!,@#$%^&\-*()]/g, '')); // only number

    if (newValue > max) newValue = max; // clamp

    if (newValue < min) newValue = min;

    // TODO how to support negative number
    value = newValue;
    input.value = isLocaleString
      ? newValue.toLocaleString()
      : newValue.toString();
  };
</script>

<div class="container" style={containerStyle}>
  <slot name="leftElement" />
  <input
    bind:this={input}
    style={inputStyle}
    placeholder={placeholder}
    on:input={onInput}
  />
  <slot name="rightElement" />
</div>
