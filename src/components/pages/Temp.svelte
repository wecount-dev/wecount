<style lang="postcss">
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>

<script lang="ts">
  import TabNavigation from '../uis/TabNavigation.svelte';
  import Intro from '../pages/Intro.svelte';
  import SignIn from './SignIn.svelte';
  import SignUp from './SignUp.svelte';

  export let tabs = [
    {name: '최근 1주', component: Intro},
    {name: '최근 1개월', component: SignIn},
    {name: '최근 3개월', component: SignUp},
  ];
</script>

<main>
  <TabNavigation tabs={tabs} tabNavigationStyle="height: 90%;" />
</main>
