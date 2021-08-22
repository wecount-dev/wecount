<style lang="postcss">
  .dashboard {
    padding: 20px;
  }
  .user-name {
    font-weight: bold;
  }
  .greeting {
    margin-bottom: 20px;
  }
  .summary-card {
    margin-bottom: 20px;
  }
</style>

<script lang="ts">
  import SummaryCard from './SummaryCard.svelte';
  import MemberCard from './MemberCard.svelte';
  import {_} from 'svelte-i18n';

  const user = {
    name: 'Jay-flow',
    role: '대표 관리자',
    imageUrl: 'https://picsum.photos/50/50?random=1',
  };

  const community = {
    id: '1',
    name: 'dooboolab',
    currency: 'KRW',
    description: 'PREMIUM ACCOUNT',
    deposit: [
      {
        title: '이마트 강서마곡점',
        description: '쇼핑',
        price: 25000,
        currency: 'KRW',
        createdAt: '2020/02/01',
      },
      {
        title: '삼성화재 강남지점',
        description: '쇼핑',
        price: 1125000.0,
        currency: 'KRW',
        createdAt: '2020/02/01',
      },
      {
        title: '현대카드',
        description: '쇼핑',
        price: -611000.0,
        currency: 'KRW',
        createdAt: '2020/02/01',
      },
      {
        title: '롯데수퍼 강일점',
        description: '쇼핑',
        price: 25000.0,
        currency: 'KRW',
        createdAt: '2020/02/01',
      },
      {
        title: '쿠팡',
        description: '쇼핑',
        price: 3000.0,
        currency: 'KRW',
        createdAt: '2020/02/01',
      },
    ],
  };

  const members = [
    {
      name: 'Hyochan',
      imageUrl: 'https://picsum.photos/50/50?random=1',
    },
    {
      name: 'Dean',
      imageUrl: 'https://picsum.photos/50/50?random=2',
    },
    {
      name: 'Herry',
      imageUrl: 'https://picsum.photos/50/50?random=3',
    },
    {
      name: 'Jay',
      imageUrl: 'https://picsum.photos/50/50?random=4',
    },
  ];
</script>

<div class="dashboard">
  <div class="sub-heading greeting">
    ✋️ {$_('Dashboard.hello')} <span class="user-name">{user.name}</span>
  </div>
  <div class="summary-card">
    <SummaryCard community={community} user={user} />
  </div>
  <div>
    <MemberCard members={members} />
  </div>
</div>
