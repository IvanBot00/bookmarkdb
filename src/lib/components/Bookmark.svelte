<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatcher = createEventDispatcher()

  export let id: number
  export let mode = 'Row'
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

  function stripHttp(url: string): string {
    const res = url.split('//')
    return res[1]
  } 

</script>

<div class='bg-slate-700 rounded-md p-2'>
  {#if mode === 'Row'}
    <div class='flex justify-between'>
      <div>
        <div class='flex items-end space-x-4 mb-1'>
          <h2 class='text-4xl'>{title}</h2>
          <!-- <div>{extractBaseDomain(url)}</div> -->
          
        </div>

        <div>
          <a href={url} class='text-gray-400'>{stripHttp(url)}</a>
        </div>

        <div class='flex space-x-2 mt-2 items-center'>
          <a href={url}>
            <i class="fa-solid fa-arrow-up-right-from-square fa-xl text-slate-200"></i>
          </a>
          <button on:click={handleDelete}>
            <i class="fa-solid fa-trash fa-lg text-slate-200"></i>
          </button>
        </div>
      </div>

      <div>
        Edit
      </div>

    </div>
  {/if}
</div>