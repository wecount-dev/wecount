<style lang="postcss">
  .progress-bar {
    position: relative;
    width: 318px;
    height: 10px;
    background: var(--gray20);
    border-radius: 10000px;
  }

  .completed {
    position: absolute;
    width: var(completedPercent);
    height: 100%;
    left: 0px;
    top: 0px;
    background-color: var(--green70);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.16);
    animation: completed-animation 0.3s ease-in-out;
    animation-fill-mode: both;
    border-radius: 10000px;
  }

  @keyframes completed-animation {
    0% {
      width: 0;
    }
    100% {
      width: var(completedPercent);
    }
  }
</style>

<script lang="ts">
  export let completed: number;
  export let progressBarStyle: string | undefined = undefined;
  export let completedStyle: string | undefined = undefined;

  const completedPercent = String(completed) + '%';
</script>

<div class="progress-bar" style={progressBarStyle}>
  <div
    class="completed"
    style={`width: ${completedPercent}; ${
      completedStyle ? completedStyle : ''
    }`}
  />
</div>
