<style lang="postcss">
  .layout {
    position: relative;
    margin: 25px;
  }

  .left {
  }

  .center {
    position: absolute;
    top: 0px;
    left: 25%;
    z-index: 1;
  }

  .right {
    position: absolute;
    top: 0px;
    right: 0px;
  }
</style>

<script lang="ts">
</script>

<div class="layout">
  <div class="left">
    <slot name="left" class="left" />
  </div>
  <div class="center">
    <slot name="center" />
  </div>
  <div class="right">
    <slot name="right" />
  </div>
</div>
