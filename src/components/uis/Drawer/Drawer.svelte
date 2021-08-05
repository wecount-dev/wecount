<style lang="postcss">
  .drawer {
    display: inline-flex;
    background-color: white;
    height: 100%;
  }

  .menu {
    z-index: 2;
    min-width: 56px;
    box-shadow: 2px 8px 12px rgba(0, 0, 0, 0.12);
  }

  .sub-menu-open {
    display: flex;
    flex-direction: column;
    min-width: 144px;
    box-shadow: 2px 12px 12px rgba(0, 0, 0, 0.02);
  }

  .sub-menu-close {
    display: none;
  }

  .close-button {
    align-self: flex-end;
    padding: 7px 12px;
    cursor: pointer;
  }

  .menu-button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 33px;
    margin-top: 5px;
  }

  .menu-button {
    padding: 5px;
    cursor: pointer;
  }

  .menu-layout {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px;
  }

  .hidden {
    visibility: hidden;
  }
</style>

<script lang="ts">
  import {SvgChevronsLeft, SvgMenu} from '../../../utils/Icon';

  export let isOpen = true;

  function toggleMenuWindow() {
    isOpen = !isOpen;
  }
</script>

<div class="drawer">
  <div class="menu">
    <div class="menu-button-container">
      <div
        class="menu-button"
        class:hidden={isOpen}
        on:click={toggleMenuWindow}
      >
        <SvgMenu />
      </div>
    </div>
    <div class="menu-layout">
      <slot name="menu" />
    </div>
  </div>
  <div class:sub-menu-open={isOpen} class:sub-menu-close={!isOpen}>
    <div class="close-button" on:click={toggleMenuWindow}>
      <SvgChevronsLeft />
    </div>
    <slot name="subMenu" />
  </div>
</div>
