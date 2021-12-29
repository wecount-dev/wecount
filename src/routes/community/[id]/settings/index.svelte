<style lang="postcss">
  .container {
    display: grid;
    justify-items: center;
    align-items: center;
  }

  .wrap {
    width: 620px;
    @media (--mobile) {
      width: 100%;
    }
  }

  .community-card-carousel {
    margin-bottom: 20px;
  }

  .input-card {
    margin-bottom: 40px;
  }

  input,
  textarea {
    width: 100%;
    border: 1px solid var(--border);
    border-radius: 4px;
    padding: 8px;
    font-size: 14px;
  }

  textarea {
    height: 103px;
  }

  textarea::-webkit-scrollbar {
    display: none;
  }

  .input-wrapper {
    margin-bottom: 40px;
    display: flex;
    justify-content: center;
  }

  .card {
    background-color: var(--card);
    border: 1px solid var(--gray20);
    box-sizing: border-box;
    box-shadow: 2px 12px 12px rgba(0, 0, 0, 0.02);
    border-radius: 16px;
    width: 100%;

    @media (--mobile) {
      border-radius: 0px;
    }
  }
</style>

<script lang="ts">
  import {_} from 'svelte-i18n';
  import Button from '../../../../layouts/button.svelte';
  import Select from '../../../../layouts/select.svelte';
  import Asterisk from '../../../../layouts/asterisk.svelte';
  import Carousel from '../../../../layouts/carousel.svelte';
  import InputBox from '../../../../layouts/input-box.svelte';
  import {user} from '../../../../stores/sessionStore';
  import {createCommunity} from '../../../../services/communityService';
  import {BLACK, GREEN, NAVY, PURPLE, SKY_BLUE} from '../../../../theme';
  import {goto} from '@roxi/routify';

  let loading = false;
  const item = {
    user: {
      name: 'Jay-flow',
      imageUrl:
        'https://i.pinimg.com/originals/b0/05/39/b00539f1b2cd313f5db6c209363dd881.jpg',
      role: '최고 관리자',
    },
    community: {
      id: '1',
      name: 'dooboolab',
      description: 'PREMIUM ACCOUNT',
      isPublic: true,
    },
    colors: [GREEN, SKY_BLUE, NAVY, PURPLE, BLACK],
  };

  const publicOptions = [$_('community.public'), $_('community.private')];

  let selectedPublicOption = publicOptions[0];
  const currencyOptions = ['USD', 'KRW'];
  let selectedCurrencyOption = currencyOptions[0];
  let isSubmitOnFlight = false;
  let communityName: string;
  let communityDescription: string;
  let color = item.colors[0];
  const getColor = (selectedColor: string) => {
    color = selectedColor;
  };

  const selectPublicOption = (e: CustomEvent<string>) =>
    (selectedPublicOption = e.detail);

  const selectCurrencyOption = (e: CustomEvent<string>) =>
    (selectedCurrencyOption = e.detail);

  const submitCreateCommunity = async () => {
    isSubmitOnFlight = true;
    try {
      const community = await createCommunity($user?.id, {
        name: communityName,
        currency: selectedCurrencyOption,
        color,
        description: communityDescription,
        isPublic:
          // eslint-disable-next-line @typescript-eslint/no-unsafe-call
          selectedPublicOption === $_('community.public') ? true : false,
      });

      if (community?.id) {
        $goto('/community/[id]', {id: community.id});
      }
    } finally {
      isSubmitOnFlight = false;
    }
  };
</script>

<div class="container">
  <form class="wrap" on:submit|preventDefault={submitCreateCommunity}>
    <div />
    <div class="community-card-carousel">
      <div
        class="card"
        style="
          padding: 28px 18px;
          display: flex;
          justify-content: center;
          align-items: center;"
      >
        <Carousel item={item} onChange={getColor} />
      </div>
    </div>
    <div class="input-card">
      <div class="card" style="padding: 34px 28px;">
        <InputBox>
          <svelte:fragment slot="label">
            {$_('community.type')} &nbsp;
          </svelte:fragment>
          <Select
            slot="input"
            style={'width: 100%'}
            value={selectedPublicOption}
            options={publicOptions}
            on:change={selectPublicOption}
          />
        </InputBox>
        <InputBox>
          <svelte:fragment slot="label">
            {$_('community.name')}<Asterisk />
          </svelte:fragment>
          <input
            style="padding-left: 12px"
            slot="input"
            bind:value={communityName}
            type="text"
            placeholder="{$_('community.name_hint')}."
            required
          />
        </InputBox>
        <InputBox style={'align-items: start'}>
          <svelte:fragment slot="label">
            {$_('community.introduction')}<Asterisk />
          </svelte:fragment>
          <textarea
            slot="input"
            bind:value={communityDescription}
            placeholder=" {$_('community.introduction_hint')}."
            required
          />
        </InputBox>
        <InputBox>
          <svelte:fragment slot="label">
            {$_('community.currency')}<Asterisk />
          </svelte:fragment>
          <Select
            slot="input"
            style={'width: 100%'}
            value={selectedCurrencyOption}
            options={currencyOptions}
            on:change={selectCurrencyOption}
          />
        </InputBox>
      </div>
    </div>
    <div class="input-wrapper">
      <Button
        primary
        style={'width: 292px;'}
        type="submit"
        disabled={loading}
        loading={loading}
      >
        <div class="text" style="color: white;">
          {$_('community.update')}
        </div>
      </Button>
    </div>
  </form>
</div>
