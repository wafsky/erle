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
      light: "fa fa-star",
      gray: "fa fa-star-o"
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
    console.log(this.score);
    this.trues.length = this.score;
    this.falses.length = 5 - this.score;
  }
};
</script>

<style>
.star {
  height: 100%;
}
.fa-star {
  color: orange;
}
.fa-star-o {
  color: gray;
}
</style>