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
  import type {CommunityType, MenuType} from '../../../types/index.svelte';
  import {SvgChevronsLeft, SvgMenu} from '../../../utils/Icon';
  import CommunityMenu from './CommunityMenu.svelte';
  import CommunityPlusMenu from './CommunityPlusMenu.svelte';
  import Menu from './Menu.svelte';

  const addCommunityUrl = 'https://google.com';
  export let isOpen = true;
  export let communites: CommunityType[];
  export let onSelectMenu: (url: string) => void;
  export let menuStyle: string | undefined = undefined;

  let isLoading = false;
  let showMenuText = isOpen;
  let selectedCommunityId = communites[0].id;
  let seletedMenuUrl: string;
  let menuLayoutElement: HTMLDivElement;
  const menus: {
    [communityId: string]: MenuType[];
  } = {};

  const toggleMenuWindow = () => (isOpen = !isOpen);
  const selectCommunity = (id: string) => (selectedCommunityId = id);
  const selectAddCommunity = (url: string) => onSelectMenu(url);

  const selectMenu = (url: string) => {
    seletedMenuUrl = url;
    onSelectMenu(seletedMenuUrl);
  };

  const requestMenuAPI = (communityId: string) => {
    // eslint-disable-next-line no-console
    console.debug(`Call menu API (comminity id: ${communityId})`);

    return [
      {
        name: '커밋',
        url: 'https://github.com/wecount-dev/wecount/commits',
      },
      {
        name: '이슈',
        notificationCounts: 99,
        url: 'https://github.com/wecount-dev/wecount/issues',
      },
    ];
  };

  const setInitMenu = () => {
    const InitCommunity = communites[0];
    const menuIndex = 0;

    seletedMenuUrl = menus[InitCommunity.id][menuIndex].url;
  };

  const setMenus = (communites: CommunityType[]) => {
    communites.forEach((community: CommunityType) => {
      const menu = requestMenuAPI(community.id);

      menus[community.id] = menu;
    });

    setInitMenu();
    isLoading = false;
  };

  const outPutsMenusAfterEndOfTransitionAnimation = () => {
    menuLayoutElement.addEventListener('transitionend', () => {
      showMenuText = isOpen;
    });
  };

  setMenus(communites);
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
          id={community.id}
          imageUrl={community.imageUrl}
          isSelected={community.id === selectedCommunityId}
          selectCommunity={selectCommunity}
        />
      {/each}
      <CommunityPlusMenu
        redirectUrl={addCommunityUrl}
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
    {#if !isLoading && showMenuText}
      {#each menus[selectedCommunityId] as menu}
        <Menu
          name={menu.name}
          notificationCounts={menu.notificationCounts}
          url={menu.url}
          selectMenu={selectMenu}
          isSelected={menu.url === seletedMenuUrl}
        />
      {/each}
    {/if}
  </div>
</div>
