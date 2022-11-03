<template>
  <div>
    <Header />
    <p>HomePage</p>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  name: "HomePage",
  props: {
    msg: String,
  },
  components: {
    Header,
  },
};
</script>
