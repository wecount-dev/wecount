<style lang="postcss">
  .container {
    display: inline-flex;
    background-color: var(--background);
    height: 100%;
  }

  aside {
    min-width: 56px;
    padding-left: 8px;
    z-index: 2;
    box-shadow: 2px 8px 12px var(--box-shadow12);
  }

  section {
    background-color: var(--card);
    width: 144px;
    box-shadow: 2px 12px 12px var(--box-shadow02);
    transition: width 0.15s;
    transition-timing-function: ease-in-out;

    display: flex;
    flex-direction: column;

    @media (--mobile) {
      width: 124px;
    }
  }

  .close {
    visibility: hidden;
    width: 0px;
  }

  .close-arr {
    align-self: flex-end;
    padding: 7px 12px;
    cursor: pointer;
  }

  .menu-btn {
    height: 33px;
    margin-top: 5px;
    margin-right: 8px;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .hidden {
    visibility: hidden;
  }
</style>

<script lang="ts">
  import {onMount} from 'svelte';
  import {_} from 'svelte-i18n';
  import {definitions} from '../../../../types/supabase';
  import {SvgChevronsLeft, SvgMenu} from '../../../../utils/Icon';
  import CommunityMenu from './CommunityMenu.svelte';
  import CommunityPlusMenu from './CommunityPlusMenu.svelte';
  import Menu from './Menu.svelte';

  export let communites: definitions['Community'][];
  export let onSelectMenu: (path: string) => void;
  export let menuStyle: string | undefined = undefined;

  const addCommunityPath = '/community/create';

  let isOpen = true;
  let isLoading = false;
  let isMenuVisible = isOpen;
  let communityId = communites?.[0].id;
  let menuElement: HTMLDivElement;

  const menus = [
    {name: $_('Drawer.dashboard'), path: `/community/${communityId}`},
    {name: $_('Drawer.feeds'), path: `/community/${communityId}/feed`},
    {name: $_('Drawer.settings'), path: `/community/${communityId}/settings`},
  ];

  let seletedMenuPath = menus[0].path;

  $: {
    const redirectPath = `${seletedMenuPath}/${String(communityId)}`;

    onSelectMenu(redirectPath);
  }

  const toggleMenu = () => (isOpen = !isOpen);
  const selectMenu = (path: string) => (seletedMenuPath = path);
  const handleAdd = (path: string) => onSelectMenu(path);

  const selectCommunity = (id: string) => {
    communityId = id;
    selectMenu(menus[0].path);
  };

  const outPutsMenusAfterEndOfTransitionAnimation = () => {
    menuElement.addEventListener('transitionend', () => {
      isMenuVisible = isOpen;
    });
  };

  onMount(outPutsMenusAfterEndOfTransitionAnimation);
</script>

<div class="container">
  <aside>
    <div class="menu-btn" class:hidden={isOpen} on:click={toggleMenu}>
      <SvgMenu />
    </div>
    {#each communites as community}
      <CommunityMenu
        community={community}
        isSelected={community.id === communityId}
        selectCommunity={selectCommunity}
      />
    {/each}
    <CommunityPlusMenu
      redirectPath={addCommunityPath}
      onAddCommunity={handleAdd}
    />
  </aside>
  <section bind:this={menuElement} class:close={!isOpen} style={menuStyle}>
    <div class="close-arr" on:click={toggleMenu}>
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
  </section>
</div>
