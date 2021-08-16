<!-- svelte-ignore css-unused-selector -->
<style lang="postcss">
  main {
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
        -webkit-box-shadow: 0 0 0 1000px var(--background-color) inset !important;
      }
    }
  }
</style>

<script lang="ts">
  import moneyFormat from '../../utils/moneyFormat';

  export let placeholder = '';
  export let containerStyle = '';
  export let inputStyle = '';
  export let isMoneyFormat = false;
  export let value: number | undefined = undefined;

  let input: HTMLInputElement | null = null;

  // @ts-ignore
  const onInput = () => {
    if (!input) return;

    const currentValue = input.value;
    const newValue = Number(currentValue.replace(/[A-Za-z!,@#$%^&*()]/g, '')); // only number

    value = newValue;
    input.value = isMoneyFormat ? moneyFormat(newValue) : newValue.toString();
  };
</script>

<main style={containerStyle}>
  <slot name="leftElement" />
  <input
    bind:this={input}
    style={inputStyle}
    placeholder={placeholder}
    on:input={onInput}
  />
  <slot name="rightElement" />
</main>
