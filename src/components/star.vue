<template>
  <div class="star">
    <span v-for="count in trues" :key="count" class="fa fa-star"></span>
    <span v-for="counts in falses" :key="counts" class="fa fa-star-o"></span>
  </div>
</template>

<script>
export default {
  name: "Star",
  data() {
    return {
      trues: [],
      falses: [],
    };
  },
  props: {
    score: {
      type: String,
      default: "0"
    }
  },
  methods: {},
  created() {
    this.trues.length = this.score;
    this.falses.length = 5 - this.score;
  }
};
</script>

<style>

.fa-star {
  color: orange;
  font-size: 100%;
  line-height: 30px;
}
.fa-star-o {
  color: gray;
  font-size: 100%;
  line-height: 30px;
}
</style>