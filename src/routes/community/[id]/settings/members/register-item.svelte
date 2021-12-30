<style lang="postcss">
  .register-item {
    display: grid;
    grid-auto-flow: column;
    height: 48px;
    text-overflow: ellipsis;
    text-align: left;

    .user {
      padding-left: 24px;
      padding-right: 12px;
      display: grid;
      grid-auto-flow: column;
      align-items: center;

      img {
        width: 48px;
        height: 48px;
        border-radius: 24px;
      }

      p {
        overflow: hidden;
        padding: 0 16px;
      }

      &:hover {
        cursor: pointer;
        opacity: 0.7;
      }
    }

    div:nth-child(2) {
      display: grid;
      grid-auto-flow: column;

      p {
        display: grid;
        font-size: 0.875rem;
        align-items: center;
        text-align: center;
        font-weight: bold;

        &:nth-child(1) {
          color: var(--info);
        }

        &:nth-child(2) {
          color: var(--placeholder);
          margin-left: 8px;
          margin-right: 20px;
        }

        &:hover {
          cursor: pointer;
          opacity: 0.7;
        }
      }
    }
  }
</style>

<script>
  import {_} from 'svelte-i18n';
</script>

<div class="register-item">
  <div class="user">
    <img
      src="https://images.chosun.com/resizer/CqTgVIhmyyEt7Se3PyW6IHF7bxQ=/616x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/ZPLDCQJGKDMAMSQE6EYTEDLSCI.jpg"
      alt="chu"
    />
    <p>Megan Theeasdfasdfaslkfdjasdflaskjfdasdflkj</p>
  </div>
  <div>
    <p>{$_('settings.accept')}</p>
    <p>{$_('settings.reject')}</p>
  </div>
</div>
