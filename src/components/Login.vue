<script>
</script>
<template>
   <div class="boostrap">
<div class="flex items-center justify-center min-h-screen bg-gradient-to-r from-teal-400 to-blue-500">
  <div class="bg-white rounded-lg shadow-lg p-8 w-80 relative">
    <div class="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-2 shadow-lg">
      <img aria-hidden="true" alt="user-icon" src="https://openui.fly.dev/openui/50x50.svg?text=👤" class="w-12 h-12" />
    </div>
    <h2 class="text-center text-xl font-semibold text-zinc-800 mt-8">My Account</h2>
    <form class="mt-6">
      <div class="mb-4">
        <label class="block text-zinc-600 text-sm mb-2" for="login">
          <img aria-hidden="true" alt="login-icon" src="https://openui.fly.dev/openui/24x24.svg?text=🔑" class="inline-block mr-2" />
          Login
        </label>
        <input class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" type="text" id="login" placeholder="Enter your login" />
      </div>
      <div class="mb-4">
        <label class="block text-zinc-600 text-sm mb-2" for="password">
          <img aria-hidden="true" alt="password-icon" src="https://openui.fly.dev/openui/24x24.svg?text=🔒" class="inline-block mr-2" />
          Password
        </label>
        <input class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" type="password" id="password" placeholder="Enter your password" />
      </div>
      <div class="flex items-center justify-between mb-6">
        <div class="flex items-center">
          <input type="checkbox" id="remember" class="form-checkbox h-4 w-4 text-primary" />
          <label for="remember" class="ml-2 text-zinc-600 text-sm">Remember me</label>
        </div>
        <a href="#" class="text-sm text-primary hover:underline">Forgot password?</a>
      </div>
      <button class="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary">Sign in</button>
    </form>
  </div>
</div>
</div>
</template>
<style scoped>
.boostrap{
  text-align: center;
}
</style>
