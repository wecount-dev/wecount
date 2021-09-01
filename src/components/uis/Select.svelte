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
    background-color: var(--background-color);

    &:hover {
      cursor: pointer;
    }
  }
  .title {
    flex: 1;
    font-size: 14px;
    margin-right: 20px;
    overflow: hidden;
  }
  .options-container {
    top: 0;
    left: 0;
    background-color: var(--paper);
    width: 100%;
    position: absolute;
    box-shadow: 0px 4px 10px 0px rgba(196, 196, 196, 0.5);
    border-radius: 4px;
    overflow: hidden;
    z-index: 99;
  }
  .option {
    height: 36px;
    display: flex;
    align-items: center;
    padding-left: 12px;
    font-size: 14px;
    &:hover {
      cursor: pointer;
      background-color: var(--placeholder);
    }
  }
</style>

<script lang="ts">
  import {createEventDispatcher, onMount, onDestroy} from 'svelte';
  import {SvgArrowDown, SvgCheck} from '../../utils/Icon';

  export let placeholder = '';
  export let value: string | string[] | null;
  export let options: string[];
  export let multiple = false;

  export let style = '';
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
    if (!multiple) dispatch('change', _value);
    else if (value?.includes(_value))
      dispatch(
        'change',
        (value as string[]).filter((v) => v !== _value),
      );
    else dispatch('change', [...(value as string[]), _value]);

    open = multiple;
  };

  const handleOnOpen = () => {
    open = true;
  };
</script>

<main style={style}>
  <div
    style={titleContainerStyle}
    on:click|stopPropagation={handleOnOpen}
    class="selector"
  >
    <div style={titleStyle} class="title">
      {value?.length ? value : placeholder}
    </div>
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
          {#if multiple}
            <SvgCheck
              width={34}
              fill={value?.includes(option) ? '#0DB293' : 'none'}
            />
          {/if}
          {option}
        </div>
      {/each}
    </div>
  {/if}
</main>
