<script lang="ts">
  import { enhance } from "$app/forms";
  import type { ActionData, PageData } from "./$types";
  import Bookmark from '$lib/components/Bookmark.svelte'

  export let data: PageData
  export let form: ActionData
  let isCreatingBookmark = false

  function deleteBookmark(e) {
    const id = e.detail
    fetch(`/api/bookmark/${id}`, { method: 'DELETE' })
    fetchBookmarks()
  }

  async function fetchBookmarks() {
    const bookmarks = await fetch('/api/bookmark').then(res => res.json())
    data.bookmarks = bookmarks
  } 

</script>

<div class='flex flex-col items-center w-full'>
  <div>
    <button class='btn btn-primary' on:click={() => isCreatingBookmark = true}>Add Bookmark</button>
    {#if isCreatingBookmark}
      <div>
        <form method="POST" use:enhance>
          <input name='title' type='text' placeholder="title" class='input' />
          <input name="url" type="text" placeholder="link" class='input' />
          <button class='btn bg-blue-500' type="submit">Add Bookmark</button>
          <button on:click={() => isCreatingBookmark = false}>Cancel</button>
        </form>
        {#if form?.missing}<div>Please add a url</div>{/if}  
      </div>
    {/if}
  
  </div>

  <div class='container'>
    <ul class='w-full grid gap-3 mt-3'>
      {#each data.bookmarks as link}
        <li>
          <Bookmark on:delete={deleteBookmark} id={link.id} title={link.title} url={link.url} icon={link.icon} />
        </li>
      {/each}
    </ul>
  </div>


</div>
