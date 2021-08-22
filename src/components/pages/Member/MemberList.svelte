<!-- svelte-ignore css-unused-selector -->
<style lang="postcss">
  main {
    background: var(--background-color);
    box-shadow: 2px 12px 12px rgba(0, 0, 0, 0.02);
    border-radius: 16px;
    padding: 28px;
    box-sizing: border-box;

    @media (max-width: 640px) {
      border-radius: 0px;
    }
  }
  .title {
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 12px;
  }
  .labelContainer {
    display: flex;
    width: 100%;
    background-color: var(--gray10);
    height: 29px;
    border-radius: 6px;
    align-items: center;
    font-size: 14px;
    color: var(--gray70);
  }
  .label-name {
    flex: 1;
    display: flex;
    justify-content: center;
    padding-right: 31px;
  }
  .label-role {
    display: flex;
    justify-content: center;
    margin-right: 31px;
    width: 118px;
  }
  .label-customRole {
    display: flex;
    justify-content: center;
    margin-right: 91px;
    width: 118px;
  }
  .itemContainer {
    padding-top: 16px;
    overflow-y: scroll;
  }
  .itemContainer::-webkit-scrollbar {
    width: 4px;
  }
  .itemContainer::-webkit-scrollbar-track {
    margin-top: 24px;
  }
  .itemContainer::-webkit-scrollbar-thumb {
    width: 4px;
    background: var(--gray30);
    border-radius: 2px;
  }
  .member-container {
    display: flex;
    align-items: center;
    padding: 0 24px;
    margin-bottom: 16px;
  }
  .member-image {
    width: 48px;
    height: 48px;
    border-radius: 24px;
    margin-right: 12px;
    object-fit: cover;
  }
  .member-name {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .member-role {
    width: 118px;
    margin-right: 31px;
    font-size: 14px;
    display: flex;
    justify-content: center;
  }
  .member-customRole {
    width: 118px;
    margin-right: 31px;
    font-size: 14px;
    display: flex;
    justify-content: center;
  }
  .member-delete {
    width: 36px;
    height: 36px;
  }
</style>

<script lang="ts">
  import {createEventDispatcher, onDestroy, onMount} from 'svelte';
  import {_} from 'svelte-i18n';
  import {SvgBadgeCrown, SvgTrashcan} from '../../../utils/Icon';
  import Button from '../../uis/Button.svelte';
  import Select from '../../uis//Select.svelte';

  interface Member {
    image: string;
    name: string;
    isRepresentativeAdmin: boolean;
    role: string;
    customRole: string;
  }

  export let data: Member[];
  let threshold = 100;
  let roleList = ['Admin', 'Writer', 'Reader']; // Update Me
  let customRoleList = ['Admin', 'Writer', 'Reader']; // Update Me

  const dispatch = createEventDispatcher();
  let scrollComponent: HTMLElement;
  let lastLength = 0;

  const onScroll = (e: Event) => {
    const offset =
      //@ts-ignore
      e.target.scrollHeight - e.target.clientHeight - e.target.scrollTop;

    if (offset <= threshold && lastLength !== data.length) {
      dispatch('endReached');
      lastLength = data.length;
    }
  };

  onMount(() => {
    scrollComponent.addEventListener('scroll', onScroll);
    scrollComponent.addEventListener('resize', onScroll);

    if (
      scrollComponent.scrollHeight <=
      scrollComponent.clientHeight - scrollComponent.scrollTop
    )
      dispatch('endReached');
  });

  onDestroy(() => {
    scrollComponent.removeEventListener('scroll', onScroll);
    scrollComponent.removeEventListener('resize', onScroll);
  });

  const onMemeberChange = (member: Member) => {
    dispatch('memberChange', member);
  };

  const onMemberDelete = (member: Member) => {
    dispatch('memberDelete', member);
  };
</script>

<main class={$$props.class}>
  <div class="title">{$_('member')}</div>
  <div class="labelContainer">
    <div class="label-name">{$_('Member.name')}</div>
    <div class="label-role">{$_('Member.permission')}</div>
    <div class="label-customRole">{$_('Member.role')}</div>
  </div>
  <div class="itemContainer" bind:this={scrollComponent}>
    {#each data as member}
      <div class="member-container">
        <img src={member.image} alt="profileImage" class="member-image" />
        <div class="member-name">{member.name}</div>
        <div class="member-role">
          {#if member.isRepresentativeAdmin}
            <div style="display:flex; align-items:center;">
              <SvgBadgeCrown />
              <div style="margin-left: 4px;">
                {$_('Member.role_representative')}
              </div>
            </div>
          {:else}
            <Select
              value={member.role}
              options={roleList}
              placeholder=""
              titleContainerStyle="width:118px;"
              titleStyle="color: var(--gray70)"
              on:change={(e) => onMemeberChange({...member, role: e.detail})}
            />
          {/if}
        </div>
        <div class="member-customRole">
          {#if member.isRepresentativeAdmin}
            <div>{$_('Member.role_all')}</div>
          {:else}
            <Select
              value={member.customRole}
              options={customRoleList}
              placeholder=""
              titleContainerStyle="width:118px;"
              titleStyle="color: var(--gray70)"
              on:change={(e) =>
                onMemeberChange({...member, customRole: e.detail})}
            />
          {/if}
        </div>
        <div class="member-delete">
          {#if member.isRepresentativeAdmin}
            <div />
          {:else}
            <Button
              on:click={() => onMemberDelete(member)}
              style="width:36px; height:36px;"
            >
              <SvgTrashcan />
            </Button>
          {/if}
        </div>
      </div>
    {/each}
  </div>
</main>
