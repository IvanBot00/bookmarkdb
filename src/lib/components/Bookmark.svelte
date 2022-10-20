<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatcher = createEventDispatcher()

  export let id: number
  export let mode = 'Card'
  export let title = ''
  export let url = ''
  export let icon = ''

  function handleDelete() {
    dispatcher('delete', id)
  }

  // very naive implementation, improve later
  function extractBaseDomain(url: string): string {
    const res = url.split('//')
    const subdomains = res[1].split('/')
    return subdomains[0]
  }

</script>

<div class='bg-gray-400'>
  {#if mode === 'Card'}
    <a href={url}><img src={icon} /></a>
    <div>{title}</div>
    <div>{extractBaseDomain(url)}</div>
    <a href={url} class='btn bg-blue-500'>Open</a>
    <button on:click={handleDelete} class='btn bg-red-500'>Delete</button>
  {/if}
</div>