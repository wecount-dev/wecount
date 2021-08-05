<style lang="postcss">
  .menu {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 44px;
    height: 44px;
    background-color: #f3f4f5;
    box-sizing: border-box;
    border-radius: 10px;
    margin-bottom: 16px;
  }

  .seleted-menu {
    border: 1.5px solid #28db98;
  }

  .icon {
    object-fit: cover;
    max-width: 100%;
    max-height: 100%;
  }
</style>

<script lang="ts">
  export let imageUrl: string | undefined = undefined;
  export let style: string | undefined = undefined;
  export let isSelected = false;
</script>

<div class="menu" class:seleted-menu={isSelected} style={style}>
  <img class="icon" src={imageUrl} alt="icon" style="icon" />
</div>
