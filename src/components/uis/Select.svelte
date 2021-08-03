<style lang="postcss">
  main {
    position: relative;
  }
  .selector {
    display: flex;
    flex-direction: row;
    align-items: center;
    minwidth: 120px;
    height: 36px;
    padding: 0 12px;
    border: 1px solid;
    border-color: var(--gray30);
    box-sizing: border-box;
    border-radius: 4px;

    &:hover {
      cursor: pointer;
    }
  }
  .title {
    flex: 1;
    font-size: 14px;
    margin-right: 20px;
  }
  .options-container {
    top: 0;
    left: 0;
    background-color: var(--gray10);
    width: 100%;
    position: absolute;
    box-shadow: 0px 4px 10px 0px rgba(196, 196, 196, 0.5);
    border-radius: 4px;
    overflow: hidden;
  }
  .option {
    height: 36px;
    display: flex;
    align-items: center;
    padding-left: 12px;
    font-size: 14px;
    &:hover {
      cursor: pointer;
      background-color: var(--gray20);
    }
  }
</style>

<script lang="ts">
  import {createEventDispatcher, onMount, onDestroy} from 'svelte';
  import {SvgArrowDown} from '../../utils/Icon';

  export let placeholder: string;
  export let value: string | null;
  export let options: string[];

  export let titleContainerStyle = '';
  export let titleStyle = '';
  export let optionContainerStyle = '';
  export let optionStyle = '';

  let open = false;

  const dispatch = createEventDispatcher();

  const close = () => {
    open = false;
  };

  onMount(() => {
    document.addEventListener('click', close);
  });

  onDestroy(() => {
    document.removeEventListener('click', close);
  });

  const handleOnChange = (_value: string) => {
    dispatch('change', _value);
    open = false;
  };

  const handleOnOpen = () => {
    open = true;
  };
</script>

<main>
  <div
    style={titleContainerStyle}
    on:click|stopPropagation={handleOnOpen}
    class="selector"
  >
    <div style={titleStyle} class="title">{value || placeholder}</div>
    <slot name="rightElement">
      <SvgArrowDown />
    </slot>
  </div>
  {#if open}
    <div style={optionContainerStyle} class="options-container">
      {#each options as option}
        <div
          style={optionStyle}
          class="option"
          on:click|stopPropagation={() => handleOnChange(option)}
        >
          {option}
        </div>
      {/each}
    </div>
  {/if}
</main>
