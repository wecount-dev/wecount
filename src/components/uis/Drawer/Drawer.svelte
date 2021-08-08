<style lang="postcss">
  .drawer {
    display: inline-flex;
    background-color: white;
    height: 100%;
  }

  .community-layout {
    z-index: 2;
    min-width: 56px;
    box-shadow: 2px 8px 12px rgba(0, 0, 0, 0.12);
  }

  .menu-open {
    display: flex;
    flex-direction: column;
    min-width: 144px;
    box-shadow: 2px 12px 12px rgba(0, 0, 0, 0.02);
  }

  .menu-close {
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

  .community-menu-layout {
    padding: 6px;
  }

  .hidden {
    visibility: hidden;
  }
</style>

<script lang="ts">
  import type {DrawerType, MenuType} from '../../../types/index.svelte';
  import {SvgChevronsLeft, SvgMenu} from '../../../utils/Icon';
  import CommunityMenu from './CommunityMenu.svelte';
  import Menu from './Menu.svelte';

  export let isOpen = true;
  export let items: DrawerType[];
  export let onSelectMenu: (url: string) => void;

  const menus: {
    [id: string]: MenuType[];
  } = {};

  let selectedCommunityId: string = items[0].community.imageUrl;
  const selectCommunity = (id: string) => (selectedCommunityId = id);

  $: seletedMenuUrl = menus[selectedCommunityId][0].url;
  $: {
    onSelectMenu(seletedMenuUrl);
  }
  const selectMenu = (url: string) => (seletedMenuUrl = url);

  const toggleMenuWindow = () => (isOpen = !isOpen);

  const setMenus = (items: DrawerType[]) => {
    items.forEach((item: DrawerType) => {
      menus[item.community.imageUrl] = item.menu;
    });
  };

  setMenus(items);
</script>

<div class="drawer">
  <div class="community-layout">
    <div class="menu-button-container">
      <div
        class="menu-button"
        class:hidden={isOpen}
        on:click={toggleMenuWindow}
      >
        <SvgMenu />
      </div>
    </div>
    <div class="community-menu-layout">
      {#each items as {community}}
        <CommunityMenu
          imageUrl={community.imageUrl}
          isSelected={community.imageUrl === selectedCommunityId}
          selectCommunity={selectCommunity}
        />
      {/each}
    </div>
  </div>
  <div class:menu-open={isOpen} class:menu-close={!isOpen}>
    <div class="close-button" on:click={toggleMenuWindow}>
      <SvgChevronsLeft />
    </div>
    {#each menus[selectedCommunityId] as menu}
      <Menu
        name={menu.name}
        notificationCounts={menu.notificationCounts}
        url={menu.url}
        selectMenu={selectMenu}
        isSelected={menu.url === seletedMenuUrl}
      />
    {/each}
  </div>
</div>
