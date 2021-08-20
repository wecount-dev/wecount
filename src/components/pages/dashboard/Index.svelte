<style lang="postcss">
  .temp {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

<script lang="ts">
  import MemberCard from './MemberCard.svelte';

  const members = [
    {
      name: 'Hyochan',
      imageUrl: 'https://picsum.photos/50/50?random=1',
    },
    {
      name: 'DevYuns',
      imageUrl: 'https://picsum.photos/50/50?random=2',
    },
    {
      name: 'KoreanThinker',
      imageUrl: 'https://picsum.photos/50/50?random=3',
    },
    {
      name: 'Jay-flow',
      imageUrl: 'https://picsum.photos/50/50?random=4',
    },
  ];
</script>

<div class="temp">
  <MemberCard members={members} />
</div>
