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
  import Menu from './Menu.svelte';
  import MenuAdd from './MenuAdd.svelte';
  import MenuList from './MenuList.svelte';

  export let communities: definitions['Community'][];
  export let onSelectMenu: (path: string) => void;
  export let menuStyle: string | undefined = undefined;

  const communityAddPath = '/community/create';

  let isOpen = true;
  let isLoading = false;
  let isMenuVisible = isOpen;
  let communityId = communities?.[0].id;
  let menuElement: HTMLDivElement;

  const subMenus = [
    {name: $_('Drawer.dashboard'), path: `/community/${communityId}`},
    {name: $_('Drawer.feeds'), path: `/community/${communityId}/feed`},
    {name: $_('Drawer.settings'), path: `/community/${communityId}/settings`},
  ];

  let seletedSubMenuPath = subMenus[0].path;

  const toggleMenu = () => (isOpen = !isOpen);
  const selectSubMenu = (path: string) => {
    onSelectMenu(path);
    seletedSubMenuPath = path;
  };

  const selectCommunity = (id: string) => {
    communityId = id;
    const path = subMenus[0].path;

    seletedSubMenuPath = path;
    selectSubMenu(path);
    onSelectMenu(path);
  };

  const handleAdd = () => onSelectMenu(communityAddPath);

  const postTransition = () => {
    menuElement.addEventListener('transitionend', () => {
      isMenuVisible = isOpen;
    });
  };

  onMount(postTransition);
</script>

<div class="container">
  <aside>
    <div class="menu-btn" class:hidden={isOpen} on:click={toggleMenu}>
      <SvgMenu />
    </div>
    {#each communities as community}
      <Menu
        community={community}
        selected={community.id === communityId}
        on:click={() => selectCommunity(community.id)}
      />
    {/each}
    <MenuAdd on:click={handleAdd} />
  </aside>
  <section bind:this={menuElement} class:close={!isOpen} style={menuStyle}>
    <div class="close-arr" on:click={toggleMenu}>
      <SvgChevronsLeft />
    </div>
    {#if !isLoading && isMenuVisible}
      {#each subMenus as subMenu}
        <MenuList
          menu={subMenu}
          selectMenu={selectSubMenu}
          selected={subMenu.path === seletedSubMenuPath}
        />
      {/each}
    {/if}
  </section>
</div>
