<style lang="postcss">
  .input-loayout {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    flex-wrap: wrap;
  }

  .label {
    width: 40%;

    @media (max-width: 640px) {
      width: 100%;
      margin-bottom: 5px;
    }
  }

  .input-box {
    flex-grow: 1;
  }
</style>

<script lang="ts">
  export let style: string | undefined = undefined;
</script>

<div class="input-loayout" style={style}>
  <div class="label p2"><slot name="label" /></div>
  <div class="input-box">
    <slot name="input" />
  </div>
</div>
