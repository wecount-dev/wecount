<style lang="postcss">
  .onboarding {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 70px 0px;
    margin-bottom: 130px;

    @media (--mobile) {
      margin-bottom: 0px;
    }
  }
  .sub-heading {
    line-height: 23px;
  }
  h3,
  .sub-heading {
    margin: 0;
    text-align: center;
    font-weight: bold;
  }
  .sub-heading {
    margin-bottom: 4px;
  }
  .greeting {
    margin-bottom: 70px;
  }
  .cards {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    justify-content: center;
  }
  .card-content-layout {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .card {
    width: 250px;
    cursor: pointer;

    @media (--mobile) {
      width: 100%;
    }
  }
  .icon {
    margin-bottom: 30px;
  }
  .description {
    flex-grow: 1;
  }
</style>

<script lang="ts">
  import {_} from 'svelte-i18n';
  import {push} from 'svelte-spa-router';
  import {SvgEntering, SvgGreenPlusCircle} from '../../utils/Icon';
  import Card from '../uis/Card.svelte';
</script>

<main class="onboarding">
  <div>
    <div class="greeting">
      <h3>{$_('Onboarding.hello')}</h3>
      <h3>{$_('Onboarding.welcome')}</h3>
    </div>
    <div class="cards">
      <div class="card" on:click={() => push('/community/create')}>
        <Card
          cardStyle={'box-shadow: 0px 24px 42px rgba(0, 0, 0, 0.08); height: 100%; padding: 54px 26px;'}
        >
          <div class="card-content-layout">
            <div class="icon"><SvgGreenPlusCircle /></div>
            <div class="description">
              <div class="sub-heading">
                {$_('Onboarding.creating_a_community')}
              </div>
              <div class="p2">
                {$_('Onboarding.create_a_community')}
                <br />
                {$_('Onboarding.try_managing_the_funds')}
              </div>
            </div>
          </div>
        </Card>
      </div>
      <div class="card" on:click={() => push('/community/dashboard')}>
        <Card
          cardStyle={'box-shadow: 0px 24px 42px rgba(0, 0, 0, 0.08); height: 100%; padding: 54px 26px;'}
        >
          <div class="card-content-layout">
            <div class="icon"><SvgEntering /></div>
            <div class="description">
              <div class="sub-heading">
                {$_('Onboarding.entering_the_community')}
              </div>
              <div class="p2">
                {$_('Onboarding.explore_the_community')}
                <br />
                {$_('Onboarding.support_sponsorship')}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </div>
</main>
