<style lang="postcss">
  .container {
    width: 250px;
    cursor: pointer;

    @media (--mobile) {
      width: 100%;
    }
  }
  .card {
    width: 100%;
    height: 100%;
    background-color: var(--card);
    border: 1px solid var(--gray20);
    box-sizing: border-box;
    border-radius: 16px;
    box-shadow: 0px 24px 42px rgba(0, 0, 0, 0.08);
    padding: 54px 26px;

    @media (--mobile) {
      border-radius: 0px;
    }
  }
  .card-content {
    width: 100%;
    height: 100%;
    align-items: center;
    text-align: center;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>

<script lang="ts">
  import {createEventDispatcher} from 'svelte';

  export let style = '';
  export let title = '';
  export let body = '';

  const dispatch = createEventDispatcher();

  function handleClick() {
    dispatch('click');
  }
</script>

<div class="container" style={style}>
  <div class="card" on:click={handleClick}>
    <div class="card-content">
      <div class="icon" style="margin-bottom: 30px;">
        <slot name="icon" />
      </div>
      <div class="body1" style="font-weight: bold;">
        {title}
      </div>
      <div
        class="body3"
        style="
          margin-top: 10px;
          padding: 0 8px;
        "
      >
        {body}
      </div>
    </div>
  </div>
</div>
