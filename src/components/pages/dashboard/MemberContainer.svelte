<style lang="postcss">
  .wrap {
    width: 48px;
    text-align: center;
    cursor: pointer;
  }
  .name {
    margin-top: 6px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
</style>

<script lang="ts">
  export let name: string;
</script>

<div class="wrap">
  <slot />
  <div class="name">{name}</div>
</div>
