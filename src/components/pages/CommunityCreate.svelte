<style lang="postcss">
  .container {
    display: flex;
    justify-content: center;

    @media (--mobile) {
      padding: 0px 20px;
    }
  }
  .wrap {
    width: 620px;

    @media (--mobile) {
      width: 100%;
    }
  }
  .title {
    margin-top: 40px;
    margin-bottom: 22px;
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
</style>

<script lang="ts">
  import {_} from 'svelte-i18n';
  import Button from '../uis/Button.svelte';
  import Card from '../uis/Card.svelte';
  import Select from '../uis/Select.svelte';
  import Asterisk from '../uis/Asterisk.svelte';
  import Carousel from '../uis/Carousel.svelte';
  import InputBox from '../uis/InputBox.svelte';
  import {user} from '../../stores/sessionStore';
  import {createCommunity} from '../../services/communityService';
  import {BLACK, GREEN, NAVY, PURPLE, SKY_BLUE} from '../../utils/colors';
  import {replace} from 'svelte-spa-router';

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

  const publicOptions = [$_('Community.public'), $_('Community.private')];
  let selectedPublicOption = publicOptions[0];

  const currencyOptions = ['USD', 'KRW'];
  let selectedCurrencyOption = currencyOptions[0];

  let isSubmitOnFlight = false;
  let communityName: string;
  let communityDescription: string;
  let color = item.colors[0];

  const getColor = (selectedColor: string) => {
    // eslint-disable-next-line no-console
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
          selectedPublicOption === $_('Community.public') ? true : false,
      });

      if (community) await replace(`/community/${community.id}`);
    } finally {
      isSubmitOnFlight = false;
    }
  };
</script>

<div class="container">
  <form class="wrap" on:submit|preventDefault={submitCreateCommunity}>
    <h3 class="title">
      {$_('app_name')}<br />{$_('Community.create_community')}
    </h3>
    <div class="community-card-carousel">
      <Card
        style="padding: 28px 18px; display: flex; justify-content: center; align-items: center;"
      >
        <Carousel item={item} onChange={getColor} />
      </Card>
    </div>
    <div class="input-card">
      <Card style="padding: 34px; 28px;">
        <InputBox>
          <svelte:fragment slot="label">
            {$_('Community.type')}
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
            {$_('Community.community_name')}<Asterisk />
          </svelte:fragment>
          <input
            style="padding-left: 12px"
            slot="input"
            bind:value={communityName}
            type="text"
            placeholder="{$_('Community.write_down_the_community_name')}."
            required
          />
        </InputBox>
        <InputBox style={'align-items: start'}>
          <svelte:fragment slot="label">
            {$_('Community.community_description')}<Asterisk />
          </svelte:fragment>
          <textarea
            slot="input"
            bind:value={communityDescription}
            placeholder=" {$_('Community.introduce_the_community')}."
            required
          />
        </InputBox>
        <InputBox>
          <svelte:fragment slot="label">
            {$_('Community.community_representative_currency')}<Asterisk />
          </svelte:fragment>
          <Select
            slot="input"
            style={'width: 100%'}
            value={selectedCurrencyOption}
            options={currencyOptions}
            on:change={selectCurrencyOption}
          />
        </InputBox>
      </Card>
    </div>
    <div class="input-wrapper">
      <Button
        on:click={() => {}}
        primary
        style={'width: 304px;'}
        type="submit"
        disabled={loading}
        loading={loading}
      >
        <div class="text" style="color: white;">
          {$_('Community.create_community_button')}
        </div>
      </Button>
    </div>
  </form>
</div>
