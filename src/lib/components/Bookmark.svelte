<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatcher = createEventDispatcher()

  export let id: number
  export let mode = 'Card'
  export let title = ''
  export let url = ''

  function handleDelete() {
    dispatcher('delete', id)
  }
</script>

<div class='bg-gray-400'>
  {#if mode === 'Card'}
    <div>{title}</div>
    <a href={url} class='btn bg-blue-500'>Open</a>
    <button on:click={handleDelete} class='btn bg-red-500'>Delete</button>
  {/if}
</div>