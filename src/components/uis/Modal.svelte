<!-- 
* Usage

<script>
  import Modal from '../uis/Modal.svelte';
 
  let visible = false;

  const onOpen = () => {
      visible=true;
  };

  const onClose = () => {
      visible=false;
  };
</script>

<button on:click={onOpen} >modal</button>
<Modal 
  visible={visible}
  on:backdropClick={onClose}
>
  <p>hello modal</p>
</Modal> 
-->
<style>
  .backdrop {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

<script>
  import {createEventDispatcher} from 'svelte';

  export let visible;
  export let style = '';

  const dispatch = createEventDispatcher();

  const click = () => {
    dispatch('backdropClick');
  };
</script>

{#if visible}
  <div class="backdrop" style={style} on:click|self={click}>
    <slot />
  </div>
{/if}
