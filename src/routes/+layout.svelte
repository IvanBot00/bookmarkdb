<script lang="ts">
  import "../app.css"
  import Sidebar from "$lib/components/Sidebar.svelte"
</script>


<div class="flex h-full">
  <Sidebar />
  <slot />
  <a href='/bookmarks/new' class='absolute bottom-0 right-0 m-4 btn btn-primary rounded-full py-3 hover:bg-indigo-800'>
    <i class="fa-solid fa-plus" />
  </a>
</div>
