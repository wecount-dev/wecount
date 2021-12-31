<style lang="postcss">
  .container {
    padding: 28px 60px 75px 60px;

    display: grid;
    grid-template-columns: 406px 1fr;
    grid-template-rows: 1024px;
    gap: 20px;
    overflow: auto;

    @media (--mobile) {
      grid-auto-flow: row;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(2, min-content);
      padding: 28px 28px 75px 28px;
    }
  }

  .register {
    background-color: var(--background);
    box-sizing: border-box;
    border-radius: 16px;
    box-shadow: 0px 24px 42px var(--box-shadow22);
    overflow: auto;
    padding-bottom: 20px;

    display: grid;
    grid-template-rows: repeat(auto-fill, minmax(48px, auto));
    row-gap: 8px;

    @media (--mobile) {
      overflow: hidden;
      padding-bottom: 40px;
    }

    .head {
      padding: 0 24px;
      font-size: 1.25rem;
      font-weight: bold;

      display: grid;
      grid-auto-flow: column;
      align-items: center;
      justify-items: start;

      span {
        color: var(--info);
      }

      :global(button) {
        font-size: 0.875rem;
        justify-self: end;
      }
    }
  }

  .members {
    background-color: var(--background);
    box-sizing: border-box;
    border-radius: 16px;
    box-shadow: 0px 24px 42px var(--box-shadow22);
    overflow: auto;
    padding-bottom: 20px;

    display: grid;
    grid-template-rows: repeat(auto-fill, minmax(48px, auto));
    row-gap: 8px;

    @media (--mobile) {
      overflow: hidden;
      padding-bottom: 40px;
    }

    .head {
      padding: 0 24px;
      font-size: 1.25rem;
      font-weight: bold;

      display: grid;
      align-items: center;
      justify-items: start;
    }
  }
</style>

<script lang="ts">
  import type {definitions} from '../../../../../types/supabase';
  import {_} from 'svelte-i18n';
  import Button from '../../../../../layouts/button.svelte';
  import MemberItem from './member-item.svelte';
  import RegisterItem from './register-item.svelte';

  const members: definitions['User'][] = [
    {id: '123', displayName: 'Hello'},
    {id: '123', displayName: 'Chu'},
    {id: '123', displayName: '123123123214asdflakjasdf'},
    {id: '123'},
    {id: '123'},
    {id: '123'},
    {id: '123'},
    {id: '123'},
    {id: '123'},
    {id: '123'},
    {id: '123'},
    {id: '123'},
    {id: '123'},
    {id: '123'},
    {id: '123'},
    {id: '123'},
    {id: '123'},
    {id: '123'},
    {id: '123'},
    {id: '123'},
    {id: '123'},
  ];
</script>

<div class="container">
  <div class="register">
    <div class="head">
      <p>{$_('settings.request_join')} <span>10</span></p>
      <Button size="small">
        <p>{$_('settings.accept_all')}</p>
      </Button>
    </div>
    {#each members as member, i}
      <RegisterItem
        member={member}
        on:accept={() => console.log('accept')}
        on:reject={() => console.log('reject')}
      />
    {/each}
  </div>
  <div class="members">
    <div class="head">
      <p>{$_('settings.members')}</p>
    </div>
    {#each members as member, i}
      <MemberItem member={member} on:delete={() => console.log('delete')} />
    {/each}
  </div>
</div>
