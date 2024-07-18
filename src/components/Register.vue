<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-orange-400 to-orange-600">
    <div class="w-full max-w-md p-8 space-y-8">
      <!-- Circle Indicator -->
      <div class="flex justify-center space-x-4 mb-8">
        <div>
          <span class="w-3 h-3 bg-white rounded-full"></span>
          <span class="w-3 h-3 bg-white rounded-full opacity-50"></span>
          <span class="w-3 h-3 bg-white rounded-full opacity-50"></span>
        </div>
      </div>
      
      <!-- Header -->
      <h2 class="text-center text-3xl font-extrabold text-white">CREATE ACCOUNT</h2>

      <!-- Form -->
      <form class="mt-8 space-y-6" @submit.prevent="submitForm">
        <div class="rounded-md shadow-sm -space-y-px">
          <!-- Input Fields -->
          <div class="relative mb-4">
            <input aria-label="Name" name="name" type="text" required class="appearance-none rounded-md relative block w-full px-3 py-4 border border-zinc-300 placeholder-zinc-500 text-zinc-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm" placeholder="Name">
          </div>
          <div class="relative mb-4">
            <input aria-label="Email" name="email" type="email" required class="appearance-none rounded-md relative block w-full px-3 py-4 border border-zinc-300 placeholder-zinc-500 text-zinc-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm" placeholder="Email">
          </div>
          <div class="relative mb-4">
            <input aria-label="Password" name="password" type="password" required class="appearance-none rounded-md relative block w-full px-3 py-4 border border-zinc-300 placeholder-zinc-500 text-zinc-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm" placeholder="Password">
          </div>
        </div>
        
        <!-- Submit Button -->
        <div>
          <button type="submit" class="group relative w-full flex justify-center py-4 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
            Continue
          </button>
        </div>
      </form>
      
      <!-- Footer -->
      <p class="mt-4 text-center text-sm text-white">
        <a href="#" class="font-medium text-primary hover:text-primary/80">Terms & Conditions</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    submitForm() {
      // Handle form submission logic here
    }
  }
}
</script>

<style scoped>
/* Scoped CSS for the Register component */
.bg-primary {
  background-color: #1d4ed8; /* Tailwind blue-700 */
}

.focus:ring-primary {
  --tw-ring-color: #1d4ed8; /* Tailwind blue-700 */
}
</style>
