<style lang="postcss">
  .container {
    position: relative;
    width: 200px;
    height: 200px;
  }
</style>

<script lang="ts">
  import CircleProgressBar from './CircleProgressBar.svelte';

  export let outerCompleted: number;
  export let middleCompleted: number;
  export let innerCompleted: number;
  export let total = outerCompleted;

  const absoluteCenterStyle =
    'position: absolute; top: 50%; left: 50%;  transform: translate(-50%, -50%);';
</script>

<div>
  <div class="container">
    <CircleProgressBar
      strokeColor={'var(--green40)'}
      circleStyle={absoluteCenterStyle}
      completed={outerCompleted}
    />
    <CircleProgressBar
      circlediameter={162}
      strokeColor={'var(--yellow50)'}
      circleStyle={absoluteCenterStyle}
      completed={middleCompleted}
    />
    <CircleProgressBar
      circlediameter={122}
      strokeColor={'var(--green30)'}
      circleStyle={absoluteCenterStyle}
      completed={innerCompleted}
    />
    <h2 style={`margin: 0; ${absoluteCenterStyle}`}>{total}%</h2>
  </div>
</div>
