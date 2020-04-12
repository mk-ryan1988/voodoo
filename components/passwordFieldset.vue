<template>
  <div class="flex flex-wrap">
    <div class="w-full md:w-1/2"></div>
    <div class="w-full md:w-1/2">
      <div class="w-100 px-4 mb-6">
        <label class="block text-gray-600 border-gray-500 text-sm mb-2" for="password">Password</label>
        <input
          required
          class="appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="*************"
          v-model="password"
        />
      </div>
      <div class="w-100 px-4 mb-6">
        <label class="block text-gray-600 border-gray-500 text-sm mb-2" for="password">Password</label>
        <input
          ref="confirmPassword"
          @keyup="validateFieldset"
          required
          class="appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="confirmPassword"
          type="password"
          placeholder="*************"
          v-model="confirmPassword"
        />
        <span v-if="isInvalid">{{errorMessage}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    errorMessage: {
      type: String,
      required: false,
      default: "Passwords do not match!"
    }
  },
  data() {
    return {
      error: {
        password: this.errorMessage
      },
      isInvalid: false,
      username: "mkryan1988@gmail.com",
      password: "",
      confirmPassword: ""
    };
  },
  methods: {
    validateFieldset() {
      if (this.password !== this.confirmPassword) {
        this.$emit('record', this.error);
        this.isInvalid = true;
      } else {
        this.$emit('clear');
        this.isInvalid = false;
      }
    }
  }
};
</script>

<style>
</style>