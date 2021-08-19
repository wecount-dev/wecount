<style lang="postcss">
  main {
    padding: 24px 0px 40px 60px;
    background-color: var(--gray20);

    grid-template-columns: 400px 1fr;
    grid-template-rows: 50px 1fr;
    grid-template-areas:
      '  title        .   '
      '  membership-request-list   member-list';

    @media (max-width: 640px) {
      grid-template-columns: 1fr;
      grid-template-rows: 50px 200px 1fr;
      grid-template-areas:
        '  title     '
        '  membership-request-list'
        '  member-list';
    }
  }

  :global(.membership-request-list) {
    grid-area: membership-request-list;
  }
  :global(.member-list) {
    grid-area: member-list;
  }

  MembershipRequestList {
    grid-area: MembershipRequestList;
  }
  .sub-heading {
    font-weight: bold;
    margin-bottom: 20px;
  }
</style>

<script lang="ts">
  import MemberList from './MemberList.svelte';
  import MembershipRequestList from './MembershipRequestList.svelte';
  import {_} from 'svelte-i18n';
</script>

<main>
  <div class="sub-heading">{$_('Member.title')}</div>
  <MembershipRequestList class="membership-request-list" />
  <MemberList class="member-list" data={[]} />
</main>
