<style lang="postcss">
  .drawer {
    display: inline-flex;
    background-color: var(--background-color);
    height: 100%;
  }

  .community-layout {
    z-index: 2;
    min-width: 56px;
    box-shadow: 2px 8px 12px rgba(0, 0, 0, 0.12);
  }

  .menu-layout {
    display: flex;
    flex-direction: column;
    width: 144px;
    box-shadow: 2px 12px 12px rgba(0, 0, 0, 0.02);
    transition: width 0.15s;
    transition-timing-function: ease-in-out;
  }

  .menu-layout-close {
    visibility: hidden;
    width: 0px;
  }

  .close-button {
    align-self: flex-end;
    padding: 7px 12px;
    cursor: pointer;
  }

  .open-menu-button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 33px;
    margin-top: 5px;
  }

  .open-menu-button {
    padding: 5px;
    cursor: pointer;
  }

  .community-menu-layout {
    padding: 6px;
  }

  .hidden {
    visibility: hidden;
  }
</style>

<script lang="ts">
  import {onMount} from 'svelte';
  import {_} from 'svelte-i18n';
  import type {CommunityType} from '../../../types';
  import {SvgChevronsLeft, SvgMenu} from '../../../utils/Icon';
  import CommunityMenu from './CommunityMenu.svelte';
  import CommunityPlusMenu from './CommunityPlusMenu.svelte';
  import Menu from './Menu.svelte';

  export let communites: CommunityType[];
  export let onSelectMenu: (path: string) => void;
  export let menuStyle: string | undefined = undefined;

  const addCommunityPath = '/community/create';
  const menus = [
    {name: $_('Drawer.dashboard'), path: '/dashboard'},
    {name: $_('Drawer.feeds'), path: '/feeds'},
    {name: $_('Drawer.settings'), path: '/settings'},
  ];

  let isOpen = true;
  let isLoading = false;
  let isMenuVisible = isOpen;
  let selectedCommunityId = communites[0].id;
  let menuLayoutElement: HTMLDivElement;
  let seletedMenuPath = menus[0].path;

  $: {
    const redirectPath = `${seletedMenuPath}/${String(selectedCommunityId)}`;

    onSelectMenu(redirectPath);
  }

  const toggleMenuWindow = () => (isOpen = !isOpen);
  const selectAddCommunity = (path: string) => onSelectMenu(path);
  const selectMenu = (path: string) => (seletedMenuPath = path);

  const selectCommunity = (id: string) => {
    selectedCommunityId = id;
    selectMenu(menus[0].path);
  };

  const outPutsMenusAfterEndOfTransitionAnimation = () => {
    menuLayoutElement.addEventListener('transitionend', () => {
      isMenuVisible = isOpen;
    });
  };

  onMount(outPutsMenusAfterEndOfTransitionAnimation);
</script>

<div class="drawer">
  <div class="community-layout">
    <div class="open-menu-button-container">
      <div
        class="open-menu-button"
        class:hidden={isOpen}
        on:click={toggleMenuWindow}
      >
        <SvgMenu />
      </div>
    </div>
    <div class="community-menu-layout">
      {#each communites as community}
        <CommunityMenu
          community={community}
          isSelected={community.id === selectedCommunityId}
          selectCommunity={selectCommunity}
        />
      {/each}
      <CommunityPlusMenu
        redirectPath={addCommunityPath}
        onSelectAddCommunity={selectAddCommunity}
      />
    </div>
  </div>
  <div
    bind:this={menuLayoutElement}
    class="menu-layout"
    class:menu-layout-close={!isOpen}
    style={menuStyle}
  >
    <div class="close-button" on:click={toggleMenuWindow}>
      <SvgChevronsLeft />
    </div>
    {#if !isLoading && isMenuVisible}
      {#each menus as menu}
        <Menu
          menu={menu}
          selectMenu={selectMenu}
          isSelected={menu.path === seletedMenuPath}
        />
      {/each}
    {/if}
  </div>
</div>
