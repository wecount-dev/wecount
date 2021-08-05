<style lang="postcss">
  .sub-menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    cursor: pointer;
  }

  .selexted-name {
    font-size: 0.875rem;
    font-weight: 700;
    color: #2a2a2c;
  }

  .unselected-name {
    font-size: 0.875rem;
    font-size: 400;
    color: #4c4d53;
  }

  .notification-counts {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff2e8;
    min-width: 25px;
    height: 14px;
    border-radius: 1000px;
    font-size: 0.688rem;
    font-weight: bold;
    color: #f15454;
    padding: 3px 1px;
  }
</style>

<script lang="ts">
  export let name: string;
  export let isSelected = true;
  export let notificationCounts: number | undefined = undefined;
</script>

<div
  class="sub-menu"
  style="background-color: {isSelected ? '#F9F9F9' : '#FFFF'}"
>
  <span class:selexted-name={isSelected} class:unselected-name={!isSelected}>
    {name}
  </span>
  {#if notificationCounts}
    <span class="notification-counts">
      +{notificationCounts}
    </span>
  {/if}
</div>
