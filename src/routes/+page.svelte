<script lang="ts">
  import type { PageData } from "./$types";
  import Bookmark from '$lib/components/Bookmark.svelte'
  import type { BookmarkInfo } from '$lib/types'

  export let data: PageData

  let displayedBookmarks = data.bookmarks
  let input: string = ''

  function deleteBookmark(e: CustomEvent) {
    const id = e.detail
    fetch(`/api/bookmark/${id}`, { method: 'DELETE' })
    fetchBookmarks()
  }

  function filterTitle(b: BookmarkInfo) {
    const title = b.title.toLowerCase()
    return title.includes(input.toLowerCase())
  }

  async function fetchBookmarks() {
    const bookmarks = await fetch('/api/bookmark').then(res => res.json())
    data.bookmarks = bookmarks
  }

  $: displayedBookmarks = input === '' ? data.bookmarks :  data.bookmarks.filter(filterTitle)

</script>

<!-- Page Container -->
<div class='flex flex-col items-center w-full'>

  <!-- Search / toolbar -->
  <div class='w-full py-1 flex justify-center'>
    <div class='container flex justify-center'>
      <input bind:value={input} class="input max-w-md" type="text" placeholder="Search titles..."/>
    </div>
  </div>

  <!-- Bookmarks list -->
  <div class='container w-11/12'>
    <ul class='w-full grid gap-3 mt-3'>
      {#each displayedBookmarks as link}
        <li>
          <Bookmark on:delete={deleteBookmark} id={link.id} title={link.title} url={link.url} />
        </li>
      {/each}
    </ul>
  </div>

</div>
