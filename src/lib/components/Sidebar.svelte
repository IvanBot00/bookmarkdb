<script>
  let isOpen = false
</script>

<div class={`bg-zinc-800 h-full text-white ${isOpen ? "block" : "hidden"} absolute sm:static sm:block`}>
  <ul class='flex flex-col justify-center gap-2 mx-1'>
    <li class=''>
      <a href='/' class='flex space-x-2 w-full justify-center items-center '>
        <p class='text-2xl mt-4 font-semibold'>Bookmark</p>
      </a>
    </li>
    <li>
      <a href='/' class='flex items-center justify-center w-full hover:bg-slate-700 px-4 rounded-sm py-2 space-x-2'>
        <div class='flex space-x-2 items-center justify-center text-xl'>
          <i class="fa-solid fa-bookmark text-gray-300"></i>
          <p>Bookmarks</p>
        </div>
      </a>
    </li>
  </ul>
</div>
<div class="absolute bottom-0 left-0 m-4 sm:hidden">
  <button on:click={() => isOpen = !isOpen} class="btn btn-primary rounded-full py-3 hover:bg-blue-800"><i class="fa-solid fa-bars"></i></button>
</div>