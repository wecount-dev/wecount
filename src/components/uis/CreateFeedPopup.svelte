<style lang="postcss">
  .container {
    background-color: var(--background-color);
    padding: 28px;
    border-radius: 16px;
    position: relative;
    width: 472px;
    display: flex;
    flex-direction: column;
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
</style>

<script lang="ts">
  import {
    SvgCreateFeedPopupClose,
    SvgMinusCircle,
    SvgPlusCircle,
  } from '../../utils/Icon';
  import Button from './Button.svelte';
  import EditText from './EditText.svelte';
  import EditTextArea from './EditTextArea.svelte';
  import Modal from './Modal.svelte';
  import {_} from 'svelte-i18n';

  export let visible: boolean;
  export let communityInfo: {
    iconUri: string;
    name: string;
  };

  interface Data {
    type?: 'income' | 'expenditure';
    price?: number;
    title?: string;
    content?: string;
    uris: string[];
  }

  let data: Data = {};

  const onClose = () => {
    visible = false;
  };
</script>

<Modal visible={visible} on:close={onClose} disableBackdropClickToClose>
  <div class="container">
    <div on:click={onClose} class="close">
      <SvgCreateFeedPopupClose />
    </div>
    <!-- community-info -->
    <div class="community-info-container">
      <img class="icon" alt="communityIcon" src={communityInfo.iconUri} />
      <div class="name">{communityInfo.name}</div>
    </div>
    <!-- type -->
    <div class="content-item-container">
      <div class="label">{$_('Feed.CreateFeedPopup.category')}</div>
      <div class="content">
        <div class="type-btn">
          <SvgPlusCircle />
          <div style="margin-left:3px;">
            {$_('Feed.CreateFeedPopup.income')}
          </div>
        </div>

        <div style="width:6px;" />

        <div class="type-btn">
          <SvgMinusCircle />
          <div style="margin-left:3px;">
            {$_('Feed.CreateFeedPopup.spending')}
          </div>
        </div>
      </div>
    </div>
    <!-- price -->
    <div class="content-item-container">
      <div class="label">{$_('Feed.CreateFeedPopup.price')}</div>
      <div class="content">
        <EditText
          placeholder={$_('Feed.CreateFeedPopup.price_hint')}
          containerStyle="height:40px; flex:1;"
          inputStyle="margin:0px;"
        />
      </div>
    </div>
    <!-- title -->
    <div class="content-item-container">
      <div class="label">{$_('Feed.CreateFeedPopup.title')}</div>
      <div class="content">
        <EditText
          placeholder={$_('Feed.CreateFeedPopup.title_hint')}
          containerStyle="height:40px; flex:1;"
          inputStyle="margin:0px;"
        />
      </div>
    </div>
    <!-- content -->
    <div class="content-item-container">
      <div class="label">{$_('Feed.CreateFeedPopup.content')}</div>
      <div class="content">
        <EditTextArea
          placeholder={$_('Feed.CreateFeedPopup.content_hint')}
          style="height:162px;"
        />
      </div>
    </div>
    <!-- images -->
    <div class="content-item-container">
      <div class="label">{$_('Feed.CreateFeedPopup.image')}</div>
      <div class="content" />
    </div>

    <div class="submit-container">
      <Button
        style="background-color:transparent; border:none; width:72px; height:40px;"
        >{$_('Feed.CreateFeedPopup.cancel')}</Button
      >
      <Button
        style="width:72px; height:40px; margin-left:8px;: border:none;"
        primary
        disabled>{$_('Feed.CreateFeedPopup.submit')}</Button
      >
    </div>
  </div>
</Modal>
