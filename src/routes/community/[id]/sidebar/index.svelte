<style lang="postcss">
  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      opacity: 0.7;
    }
  }

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
  import type {definitions} from '../../../../types/supabase';
  import {onMount} from 'svelte';
  import {_} from 'svelte-i18n';
  import {SvgChevronsLeft, SvgMenu} from '../../../../utils/icons';
  import Menu from './menu.svelte';
  import MenuAdd from './menu-add.svelte';
  import MenuList from './menu-list.svelte';
  import {params, isActive, goto, url} from '@roxi/routify';
  import {user} from '../../../../stores/sessionStore';

  export let communities: definitions['Community'][];
  export let menuStyle: string | undefined = undefined;
  export let context: any;

  const {node} = context;

  let isOpen = true;
  let isLoading = false;
  let isMenuVisible = isOpen;
  let menuElement: HTMLElement;
  let communityId: string = $params.id;

  const subMenus = [
    {
      name: $_('community.sidebar.dashboard'),
      path: `/community/${communityId}`,
    },
    {
      name: $_('community.sidebar.feeds'),
      path: `/community/${communityId}/feeds`,
    },
    {
      name: $_('community.sidebar.settings'),
      path: `/community/${communityId}/settings`,
    },
  ];

  let seletedSubMenuPath = subMenus[0].path;

  const toggleMenu = () => (isOpen = !isOpen);
  const selectSubMenu = (path: string) => {
    seletedSubMenuPath = path;
  };

  const selectCommunity = (id: string) => {
    const path = (subMenus[0].path = `/community/${id}`);

    subMenus[1].path = `/community/${id}/feeds`;
    subMenus[2].path = `/community/${id}/settings`;

    communityId = id;

    seletedSubMenuPath = path;
    selectSubMenu(path);
  };

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  const handleAdd = () => $goto($url('/community/create'));

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
      <img src={SvgMenu} alt="menu" />
    </div>
    {#each communities as community}
      <a href={$url('/community/[id]', {id: community.id})}>
        <Menu
          community={community}
          selected={community.id === communityId}
          on:click={() => selectCommunity(community.id)}
        />
      </a>
    {/each}
    {#if $user}
      <MenuAdd on:click={handleAdd} />
    {/if}
  </aside>
  <section bind:this={menuElement} class:close={!isOpen} style={menuStyle}>
    <div class="close-arr" on:click={toggleMenu}>
      <img src={SvgChevronsLeft} alt="menu" />
    </div>
    {#if !isLoading && isMenuVisible}
      {#each subMenus as subMenu}
        <a href={subMenu.path}>
          <MenuList
            menu={subMenu}
            selectMenu={selectSubMenu}
            selected={subMenu.path === seletedSubMenuPath}
          />
        </a>
      {/each}
    {/if}
  </section>
</div>
