<style lang="postcss">
  .member-card {
    width: 366px;
    height: 174px;
  }
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .member-management {
    font-size: 0.75rem;
    color: var(--link);
  }
</style>

<script lang="ts">
  import {_} from 'svelte-i18n';
  import {SvgSmallRightAngleBracket} from '../../../utils/Icon';
  import Card from '../../uis/Card.svelte';
  import CircleImage from '../../uis/CircleImage.svelte';
</script>

<div class="member-card">
  <Card cardStyle={'padding: 28px;'}>
    <div class="header">
      <span class="sub-heading">{$_('member')}</span>
      <div class="member-management">
        {$_('member')}
        <SvgSmallRightAngleBracket />
      </div>
    </div>
    <CircleImage src={'https://www.w3schools.com/howto/img_avatar.png'} />
  </Card>
</div>
