<style lang="postcss">
  .deposits {
    display: flex;
    align-items: end;
    flex-direction: column;
    justify-content: space-between;
    margin: 15px 0px;
    height: 184px;
    width: 100%;
    overflow: auto;

    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .deposits::-webkit-scrollbar {
    display: none;
  }
  .deposit:not(:last-child) {
    margin-bottom: 16px;
  }
</style>

<script lang="ts">
  import type {DepositType} from '../../../types';

  export let deposits: DepositType[];
</script>

<div class="deposits">
  {#each deposits as deposit}
    <div class="deposit">
      {deposit.price}
    </div>
  {/each}
</div>
