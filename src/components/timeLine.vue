<template>
  <section class="time-line tg-center tg-card">
    <div class="time-line-wrapper">
      <div class="time-line-list">
        <div
          class="time-line-item"
          v-for="item of timeLineList"
        >
          <div>
            <svg-icon
              class="time-icon"
              iconClass="time-line"
            ></svg-icon>
            <time class="publish-time">
              {{ item.created_at.slice(0,10)}}
            </time>

          </div>
          <div class="item-content-wrapper">
            <div class="arrow">
            </div>
            <div class="item-content">
              <p>
                <router-link :to="{ name: 'article-detail', params: { id:item.id} }"> {{item.title}}</router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "time-line",
  data() {
    return {
      timeLineList: [
        {
          title: "测试标题测试标题测试标题测试标题",
          created_at: "2019-11-22T06:28:15.000Z",
          id: 7
        },
        { title: "测试标题", created_at: "2019-11-22T06:28:15.000Z", id: 7 },
        {
          title: "测试标题测试标题测试标题测试标题测试标题测试标题测试标题",
          created_at: "2019-11-22T06:28:15.000Z",
          id: 7
        },
        { title: "测试标题", created_at: "2019-11-22T06:28:15.000Z", id: 7 },
        {
          title: "测试测试标题测试标题测试标题测试标题测试标题标题",
          created_at: "2019-11-22T06:28:15.000Z",
          id: 7
        },
        { title: "测试标题", created_at: "2019-11-22T06:28:15.000Z", id: 7 },
        {
          title: "测试标题测试标题测试标题",
          created_at: "2019-11-22T06:28:15.000Z",
          id: 7
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.time-line-wrapper {
  margin: 40px;
}
.time-line-list {
  position: relative;
}
.publish-time {
  color: rgb(26, 192, 214);
  letter-spacing: 2px;
  font-size: 20px;
  font-family: cursive;
  font-weight: 400;
  margin-left: 30px;
  margin-top: 50px;
}
.time-line-item {
  display: flex;
  flex-direction: column;
}
.item-content-wrapper {
  color: #7d7d7d;
  border-left: 1px dashed #dedede;
  padding-bottom: 40px;
  display: flex;
  letter-spacing: 0px;
  position: relative;
}
.item-content {
  background: #f5f5f5;
  padding: 20px;
  border-radius: 3px;
  flex: 1;
  a {
    font-size: 16px;
  }
}
.time-icon {
  width: 2.5em;
  height: 2.5em;
  position: absolute;
  left: -1.25em;
}
.arrow {
  width: 0;
  height: 0;
  display: block;
  margin-top: 10px;
  border-left: 20px solid transparent;
  border-bottom: 20px solid #f5f5f5;
  margin-left: 11px;
}
.arrow::before {
  content: "";
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: rgb(26, 192, 214);
  position: absolute;
  left: -0.25rem;
  top: 1.7rem;
}
</style>