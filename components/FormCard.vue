<template>
  <form @submit="onSubmit">
    <div class="rounded-sm overflow-hidden shadow mb-4 bg-white">
      <div class="px-6 py-4">
        <div class="font-bold text-xl">form</div>
      </div>
      <div class="px-6 py-4">
        <slot name="inputs" :recordErrors="recordErrors" :clearErrors="clearErrors"></slot>
      </div>
      <div class="px-6 py-4 bg-gray-200 flex justify-end">
        <button
          :disabled="form.hasErrors()"
          type="submit"
          class="bg-blue-600 hover:bg-blue-800 text-white font-semibold hover:text-white py-2 px-3 mx-2 rounded"
        >Submit Enquiry</button>
      </div>
    </div>
  </form>
</template>

<script>
import { Form } from "~/plugins/form";
export default {
  data() {
    return {
      form: new Form(),
    };
  },
  props: {
    booking: {
      type: Object,
      default: function() {
        return { message: "hello" };
      }
    }
  },
  methods: {
    onSubmit() {
      this.form.submit("POST", "nowhere");
    },
    recordErrors(errors) {
      this.form.recordErrors(errors);
    },
    clearErrors() {
      this.form.clearErrors()
    }, 
  }
};
</script>

<style>
</style>