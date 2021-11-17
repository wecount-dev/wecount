<style lang="postcss">
  .container {
    max-width: 1200px;
    padding: 20px;

    display: grid;
    gap: 16px;
    grid-auto-flow: column;
    grid-template-columns: minmax(654px, 1fr) 364px;
    grid-template-rows: repeat(4, 180px);
    grid-template-areas:
      'summary member'
      'summary statistics'
      'history statistics'
      'history statistics';

    @media (--mobile) {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
    }
  }
</style>

<script>
  import Summary from './Summary.svelte';
  import History from './History.svelte';
  import MemberList from './MemberList.svelte';
  import Statistics from './Statistics.svelte';
</script>

<div class="container">
  <Summary />
  <History />
  <MemberList />
  <Statistics />
</div>
