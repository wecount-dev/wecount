<style lang="postcss">
  .register-item {
    display: grid;
    grid-auto-flow: column;
    height: 48px;
    text-overflow: ellipsis;
    text-align: left;
    padding: 0 24px;
    align-items: center;

    .user {
      padding-right: 12px;

      display: grid;
      grid-template-columns: 48px 1fr;
      grid-auto-flow: column;
      align-items: center;

      img {
        width: 48px;
        height: 48px;
        border-radius: 24px;
      }

      p {
        margin-left: 12px;
        overflow: hidden;
      }

      &:hover {
        cursor: pointer;
        opacity: 0.7;
      }
    }

    .trash-wrapper {
      padding-top: 4px;
      margin-left: 8px;
      cursor: pointer;

      &:hover {
        opacity: 0.7;
      }
    }
  }
</style>

<script lang="ts">
  import {_} from 'svelte-i18n';
  import Select from '../../../../../layouts/select.svelte';
  import {SvgTrash} from '../../../../../utils/icons';

  const roleOptions = [$_('role.owner'), $_('role.admin'), $_('role.member')];
  let selectedRoleOption = roleOptions[0];

  const selectRoleOption = (e: CustomEvent<string>) =>
    (selectedRoleOption = e.detail);
</script>

<div class="register-item">
  <div class="user">
    <img
      src="https://images.chosun.com/resizer/CqTgVIhmyyEt7Se3PyW6IHF7bxQ=/616x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/ZPLDCQJGKDMAMSQE6EYTEDLSCI.jpg"
      alt="chu"
    />
    <p>Megan Theeasdfasdfaslkfdjasdflaskjfdasdflkj</p>
  </div>
  <Select
    slot="input"
    style={'width: 100%'}
    value={selectedRoleOption}
    options={roleOptions}
    on:change={selectRoleOption}
  />
  <div class="trash-wrapper">
    <img src={SvgTrash} alt="trash" />
  </div>
</div>
