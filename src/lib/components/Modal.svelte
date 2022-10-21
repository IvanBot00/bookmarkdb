<script lang="ts">
  import { slide } from 'svelte/transition'
  import { quintOut } from 'svelte/easing'

  export let isOpen = false

  function handleKeyPress(e: KeyboardEvent) {
    if (e.key === "Escape") {
      isOpen = false
    }
  }
</script>

{#if isOpen}
<div transition:slide class='z-10 absolute w-full h-full flex justify-center pt-10'>
  <slot />
</div>
{/if}

<svelte:window on:keydown={handleKeyPress} />