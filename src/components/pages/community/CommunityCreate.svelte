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
    border: 1px solid var(--gray30);
    box-sizing: border-box;
    border-radius: 4px;
    font-size: 0.875rem;
    padding: 8px;
  }
  textarea {
    height: 103px;
    -ms-overflow-style: none;
    scrollbar-width: none;
    resize: none;
  }
  textarea::-webkit-scrollbar {
    display: none;
  }
  .submit-layout {
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
  }
</style>

<script lang="ts">
  import {_} from 'svelte-i18n';
  import Button from '../../uis/Button.svelte';
  import Card from '../../uis/Card.svelte';
  import Select from '../../uis/Select.svelte';
  import {user} from '../../../stores/sessionStore';
  import Asterisk from './Asterisk.svelte';
  import Carousel from './Carousel.svelte';
  import InputContainer from './InputContainer.svelte';
  import {createCommunity} from '../../../services/communityService';

  const item = {
    user: {
      name: 'Jay-flow',
      imageUrl: 'https://source.unsplash.com/random/50x50',
      role: '최고 관리자',
    },
    community: {
      id: '1',
      name: 'dooboolab',
      description: 'PREMIUM ACCOUNT',
      isPublic: true,
    },
    colors: ['#28DB98', '#72E6FF', '#3A74E7', '#834FF3', '#2A2A2C'],
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

      console.log('community', community);
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
        cardStyle="padding: 28px 18px; display: flex; justify-content: center; align-items: center;"
      >
        <Carousel item={item} onChange={getColor} />
      </Card>
    </div>
    <div class="input-card">
      <Card cardStyle="padding: 34px; 28px;">
        <InputContainer>
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
        </InputContainer>
        <InputContainer>
          <svelte:fragment slot="label">
            {$_('Community.community_name')}<Asterisk />
          </svelte:fragment>
          <input
            slot="input"
            bind:value={communityName}
            type="text"
            placeholder="{$_('Community.write_down_the_community_name')}."
            required
          />
        </InputContainer>
        <InputContainer style={'align-items: start'}>
          <svelte:fragment slot="label">
            {$_('Community.community_description')}<Asterisk />
          </svelte:fragment>
          <textarea
            slot="input"
            bind:value={communityDescription}
            placeholder=" {$_('Community.introduce_the_community')}."
            required
          />
        </InputContainer>
        <InputContainer>
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
        </InputContainer>
      </Card>
    </div>
    <div class="submit-layout">
      <Button
        type={'submit'}
        style={'width: 304px; height: 40px; background-color: var(--green70); color: white; font-size: 0.875rem;'}
      >
        {$_('Community.create_community_button')}
      </Button>
    </div>
  </form>
</div>
