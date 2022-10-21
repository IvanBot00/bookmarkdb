<script lang="ts">
  import type { PageData } from "./$types";
  import Bookmark from '$lib/components/Bookmark.svelte'

  export let data: PageData

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
  <div class='container w-11/12'>
    <ul class='w-full grid gap-3 mt-3'>
      {#each data.bookmarks as link}
        <li>
          <Bookmark on:delete={deleteBookmark} id={link.id} title={link.title} url={link.url} icon={link.icon} />
        </li>
      {/each}
    </ul>
  </div>


</div>
