<template>
  <div id="app" class="mx-auto max-w-6xl">
    <div
      id="nav"
      class="flex border-b-2 border-blue-dark mb-8 sticky top-0 bg-white p-2 justify-between"
    >
      <h1 class="m-0 text-base uppercase flex items-center">
        <router-link
          to="/"
          class="inline-flex text-blue-900 hover:text-black font-bold"
        >
          <ti-toe size="24" class="mr-1 text-cyan-500" />Toe Icons
        </router-link>
      </h1>
      <div class="flex items-center">
        <a
          href="https://www.github.com/javisperez/toe-icons"
          class="w-4 mr-2 inline-block"
        >
          <component :is="'ti-github'" size="24" />
        </a>
      </div>
    </div>

    <router-view />
  </div>
</template>

<style>
body {
  @apply .m-0;
  background-image: url("data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 16c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zm33.414-6l5.95-5.95L45.95.636 40 6.586 34.05.636 32.636 2.05 38.586 8l-5.95 5.95 1.414 1.414L40 9.414l5.95 5.95 1.414-1.414L41.414 8zM40 48c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zM9.414 40l5.95-5.95-1.414-1.414L8 38.586l-5.95-5.95L.636 34.05 6.586 40l-5.95 5.95 1.414 1.414L8 41.414l5.95 5.95 1.414-1.414L9.414 40z' fill='%239C92AC' fill-opacity='0.04' fill-rule='evenodd'/%3E%3C/svg%3E");
  font-size: 16px;
}

#app {
  @apply .text-gray-700;
  box-sizing: border-box;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
