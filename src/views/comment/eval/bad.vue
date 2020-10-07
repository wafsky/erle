<template>
  <div class="container">
    <ul>
      <li>
        <div class="left">
          <img src="http://static.galileo.xiaojukeji.com/static/tms/default_header.png" alt />
        </div>
        <div class="right">
          <div class="tops">
            <div class="hao">1*******3</div>
            <div class="gray">2020-10-06 15:40</div>
          </div>
          <div class="mids">
            <div class="star">
              <Star score="3"></Star>
            </div>
            <div class="gray times">70分钟送达</div>
          </div>
          <p>速度贼慢，垃圾</p>
        </div>
      </li>
      <li>
        <div class="left">
          <img src="http://static.galileo.xiaojukeji.com/static/tms/default_header.png" />
        </div>
        <div class="right">
          <div class="tops">
            <div class="hao">1*******3</div>
            <div class="gray">2020-10-06 15:40</div>
          </div>
          <div class="mids">
            <div class="star">
              <Star score="2"></Star>
            </div>
            <div class="gray times">70分钟送达</div>
          </div>
          <p>速度贼慢，垃圾</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Star from "../../../components/star.vue";
export default {
  components: {
    Star
  }
};
</script>

<style scoped lang="scss">
.container {
  height: 100%;
  background: #fff;
  ul {
    border-top: 1px solid #cecece;
    padding: 0 20px;
    li {
      padding: 10px 0;
      border-bottom: 1px solid #cecece;
      display: flex;
      .left {
        width: 40px;
        img {
          width: 28px;
          height: 28px;
          border-radius: 50%;
        }
      }
      .right {
        line-height: 20px;
        width: 335px;
        div {
          display: flex;
          .gray {
            color: #888;
          }
          .times {
            text-indent: 10px;
          }
        }
        .tops {
          justify-content: space-between;
        }
        p {
          color: #000;
        }
        .mids {
          line-height: 30px;
          
        }
      }
    }
  }
}
</style>