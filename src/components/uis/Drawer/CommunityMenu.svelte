<style lang="postcss">
  .menu {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 44px;
    height: 44px;
    background-color: white;
    box-sizing: border-box;
    border-radius: 10px;
    margin-bottom: 16px;
    cursor: pointer;
    border: 1.5px solid white;
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
  export let imageUrl: string;
  export let style: string | undefined = undefined;
  export let isSelected = false;
  export let selectCommunity: (id: string) => void;
</script>

<div
  class="menu"
  class:seleted-menu={isSelected}
  style={style}
  on:click={() => selectCommunity(imageUrl)}
>
  <img class="icon" src={imageUrl} alt="icon" style="icon" />
</div>
