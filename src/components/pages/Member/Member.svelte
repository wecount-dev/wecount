<style lang="postcss">
  main {
    padding: 24px 0px 40px 60px;
    box-sizing: border-box;

    background-color: var(--gray20);
    grid-template-columns: 440px 1fr;
    grid-template-rows: 50px calc(100vh - 56px - 50px - 24px - 40px - 1px);
    grid-template-areas:
      '  title        .   '
      '  membership-request-list   member-list';

    @media (max-width: 640px) {
      padding: 0px;

      grid-template-columns: 1fr;
      grid-template-rows: 50px 400px 1fr;
      grid-template-areas:
        '  title'
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
  import faker from 'faker/locale/en';

  interface User {
    image: string;
    name: string;
  }

  interface Member {
    image: string;
    name: string;
    isRepresentativeAdmin: boolean;
    role: string;
    customRole: string;
  }

  const createFakeMember = (): Member => {
    return {
      isRepresentativeAdmin: false,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      image: faker.image.avatar(),
      // @ts-ignore
      name: `${faker.name.lastName()} ${faker.name.firstName()}`,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      customRole: faker.random.arrayElement(['Admin', 'Writer', 'Reader']),
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      role: faker.random.arrayElement(['Admin', 'Writer', 'Reader']),
    };
  };

  const createFakeUser = (): User => {
    return {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      image: faker.image.avatar(),
      // @ts-ignore
      name: `${faker.name.lastName()} ${faker.name.firstName()}`,
    };
  };

  let memberList = Array(30)
    .fill(0)
    .map((_, i) =>
      i === 0
        ? {...createFakeMember(), isRepresentativeAdmin: true}
        : createFakeMember(),
    );

  let membershipRequestList = Array(30).fill(0).map(createFakeUser);
</script>

<main>
  <div class="sub-heading">{$_('Member.title')}</div>
  <MembershipRequestList
    class="membership-request-list"
    data={membershipRequestList}
    on:update={(e) => console.log(e.detail)}
    count={25}
  />
  <MemberList
    class="member-list"
    data={memberList}
    on:memberChange={(e) => console.log(e.detail)}
  />
</main>
