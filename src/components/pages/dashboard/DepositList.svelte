<style lang="postcss">
  .deposits {
    text-align: right;
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
    margin-bottom: 15px;
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
