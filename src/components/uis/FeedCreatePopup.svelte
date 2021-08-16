<style lang="postcss">
  .container {
    background-color: var(--background-color);
    padding: 28px;
    border-radius: 16px;
    position: relative;
    width: 472px;
    display: flex;
    flex-direction: column;
    max-height: 100vh;
    overflow: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    @media (max-width: 640px) {
      border-radius: 0px;
      width: 100%;
    }
  }
  .close {
    position: absolute;
    right: 28px;
    top: 28px;
    &:hover {
      cursor: pointer;
    }
  }
  .community-info-container {
    display: flex;
    align-items: center;
    margin-bottom: 40px;
    .icon {
      width: 30px;
      height: 30px;
      border-radius: 15px;
      border: 1px solid var(--gray20);
      margin-right: 6px;
    }
    .name {
      font-weight: bold;
      font-size: 18px;
    }
  }
  .content-item-container {
    display: flex;
    margin-bottom: 20px;
    @media (max-width: 640px) {
      flex-direction: column;
    }
    .label {
      margin-top: 8px;
      margin-bottom: 8px;
      width: 112px;
    }
    .content {
      flex: 1;
      display: flex;
    }
  }
  .type-btn {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    height: 40px;
    border-radius: 4px;
    background-color: var(--gray10);
    font-weight: bold;
    color: var(--gray60);
    &:hover {
      cursor: pointer;
    }
  }
  .submit-container {
    display: flex;
    margin-top: 24px;
    align-self: center;
  }
  .image-hint {
    font-size: 12px;
    color: var(--gray50);
    margin-top: 3px;
  }
</style>

<script lang="ts">
  import {
    SvgFeedCreatePopupClose,
    SvgMinusCircle,
    SvgPlusCircle,
  } from '../../utils/Icon';
  import Button from './Button.svelte';
  import EditText from './EditText.svelte';
  import EditTextArea from './EditTextArea.svelte';
  import Modal from './Modal.svelte';
  import {_} from 'svelte-i18n';
  import {createEventDispatcher} from 'svelte';
  import EditNumber from './EditNumber.svelte';

  const dispatch = createEventDispatcher();

  export let visible: boolean;
  export let communityInfo: {
    iconUri: string;
    name: string;
    currency: string;
  };

  interface Data {
    price?: number;
    title?: string;
    content?: string;
    uris: string[];
  }

  let data: Data = {uris: []};
  let type: 'income' | 'spending' | null = null;

  $: submitButtonActive =
    data.content && data.price && data.title && data.uris && type;

  const onClose = () => {
    visible = false;
    // init value
    data = {uris: []};
    type = null;
  };

  const onSubmit = (data: Data) => {
    dispatch('submit', data);
    onClose();
  };
</script>

<Modal visible={visible} on:close={onClose} disableBackdropClickToClose>
  <div class="container">
    <div on:click={onClose} class="close">
      <SvgFeedCreatePopupClose />
    </div>
    <!-- community-info -->
    <div class="community-info-container">
      <img class="icon" alt="communityIcon" src={communityInfo.iconUri} />
      <div class="name">{communityInfo.name}</div>
    </div>
    <!-- type -->
    <div class="content-item-container">
      <div class="label">{$_('Feed.FeedCreatePopup.category')}</div>
      <div class="content">
        <div
          class="type-btn"
          on:click={() => (type = 'income')}
          style={type === 'income'
            ? 'background-color:var(--blue10); color: var(--blue50)'
            : ''}
        >
          <!-- TODO : Icon color -->
          <SvgPlusCircle />
          <div style="margin-left:3px;">
            {$_('Feed.FeedCreatePopup.income')}
          </div>
        </div>

        <div style="width:6px;" />

        <div
          class="type-btn"
          on:click={() => (type = 'spending')}
          style={type === 'spending'
            ? 'background-color:var(--red10); color: var(--red50)'
            : ''}
        >
          <!-- TODO : Icon color -->
          <SvgMinusCircle />
          <div style="margin-left:3px;">
            {$_('Feed.FeedCreatePopup.spending')}
          </div>
        </div>
      </div>
    </div>
    <!-- price -->
    <div class="content-item-container">
      <div class="label">{$_('Feed.FeedCreatePopup.price')}</div>
      <div class="content">
        <EditNumber
          placeholder={$_('Feed.FeedCreatePopup.price_hint')}
          containerStyle="height:40px; flex:1;"
          inputStyle={`margin:0px; ${
            data.price
              ? 'text-align:right; font-weight:bold;'
              : 'text-align:left; font-weight:normal;'
          }`}
          bind:value={data.price}
          isMoneyFormat
        >
          <div style="font-size:14px;" slot="rightElement">
            {communityInfo.currency}
          </div>
        </EditNumber>
      </div>
    </div>
    <!-- title -->
    <div class="content-item-container">
      <div class="label">{$_('Feed.FeedCreatePopup.title')}</div>
      <div class="content">
        <EditText
          placeholder={$_('Feed.FeedCreatePopup.title_hint')}
          containerStyle="height:40px; flex:1;"
          inputStyle="margin:0px;"
          bind:value={data.title}
        />
      </div>
    </div>
    <!-- content -->
    <div class="content-item-container">
      <div class="label">{$_('Feed.FeedCreatePopup.content')}</div>
      <div class="content">
        <EditTextArea
          placeholder={$_('Feed.FeedCreatePopup.content_hint')}
          style="height:162px;"
          bind:value={data.content}
        />
      </div>
    </div>
    <!-- images -->
    <div class="content-item-container">
      <div class="label">
        {$_('Feed.FeedCreatePopup.image')}
        <div class="image-hint">{$_('Feed.FeedCreatePopup.image_hint')}</div>
      </div>
      <div class="content">
        <!-- TODO -->
        <!-- Please insert ImageUpload Componnet this line -->
      </div>
    </div>

    <div class="submit-container">
      <Button
        on:click={onClose}
        style="background-color:transparent; border:none; width:72px; height:40px;"
        >{$_('Feed.FeedCreatePopup.cancel')}</Button
      >
      <Button
        style={`width:72px; height:40px; margin-left:8px;: border:none; ${
          !submitButtonActive
            ? 'color: var(--gray10); background-color: var(--gray40);'
            : ''
        }`}
        primary
        on:click={() => onSubmit(data)}
        disabled={!submitButtonActive}
        >{$_('Feed.FeedCreatePopup.submit')}</Button
      >
    </div>
  </div>
</Modal>
