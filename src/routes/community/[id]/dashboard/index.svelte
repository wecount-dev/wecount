<style lang="postcss">
  .container {
    max-width: 1200px;
    padding: 20px 20px 80px 20px;

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
  import Summary from './summary.svelte';
  import History from './history.svelte';
  import MemberList from './member-list.svelte';
  import Statistics from './statistics.svelte';
</script>

<div class="container">
  <Summary />
  <History />
  <MemberList />
  <Statistics />
</div>
