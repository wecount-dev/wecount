<!--
* Usage

<script>
  let visible = false
</script>

<Modal 
  visible={visible} // required
  onBackdropClick={() => visible = !visible}
  style='background-color: red' 
>
  <p>hello modal</p>
<Modal />
-->

<style>
  .backdrop {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
  }
</style>

<script>
  import {createEventDispatcher} from 'svelte';

  export let visible;
  export let style = '';

  const dispatch = createEventDispatcher();

  const click = () => {
    dispatch('onBackdropClick');
  };
</script>

{#if visible}
  <div class="backdrop" style={style} on:click|self={click}>
    <slot />
  </div>
{/if}
