<style lang="postcss">
  .container {
    background-color: var(--background-color);
    padding: 28px;
    border-radius: 16px;
    position: relative;
    width: 472px;
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
</style>

<script lang="ts">
  import {
    SvgCreateFeedPopupClose,
    SvgMinusCircle,
    SvgPlusCircle,
  } from '../../utils/Icon';
  import Modal from './Modal.svelte';

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
    <div class="community-info-container">
      <img class="icon" alt="communityIcon" src={communityInfo.iconUri} />
      <div class="name">{communityInfo.name}</div>
    </div>

    <div class="content-item-container">
      <div class="label">구분</div>
      <div class="content">
        <div class="type-btn">
          <SvgPlusCircle />
          <div style="margin-left:3px;">수입</div>
        </div>

        <div style="width:6px;" />

        <div class="type-btn">
          <SvgMinusCircle />
          <div style="margin-left:3px;">지출</div>
        </div>
      </div>
    </div>
  </div>
</Modal>
