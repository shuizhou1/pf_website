<template>
  <div class="cases">
    <pf-nav
      :active="true"
      class="navbar"
    ></pf-nav>

    <!-- 案例 -->

    <div class="cases_wraper">
      <div class="container">
        <div class="category_list">
          <a
            href="#"
            v-for="(val, ind) in categoryList"
            :key="ind"
            :class="{'active': curentInd == ind }"
            @click="dataFilter(val, ind)"
          >{{val}}</a>
        </div>
        <ul class="case_list clearfix">
          <li
            v-for="(val,key) in casesData"
            :key="key"
            class="fl"
          >
            <div class="icon"><img
                :src="val.icon"
                alt=""
              ></div>
            <p class="title"><span>{{val.title}}</span></p>
            <p class="content"><span>{{val.content}}</span></p>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>
<script>
import pfNav from "./commen/nav.vue";
import data from "../assets/js/data.js";
export default {
  components: {
    pfNav
  },
  data() {
    return {
      cases: [],
      currentCategory: null,
      categoryList: ["全部", "WEB", "移动", "微信"],
      curentInd: 0
    };
  },
  computed: {
    casesData() {
      let category = this.currentCategory;
      let cases = this.cases;
      if (category) {
        let arr = cases.filter((val, key) => {
          return val.category === category;
        });
        return arr;
      } else {
        return cases;
      }
    }
  },
  methods: {
    dataFilter(category, ind) {

      //改变当前的分类

      this.curentInd = ind 

      // 筛选分类数据

      if (category === "全部") {
        this.currentCategory = null;
      } else {
        this.currentCategory = category;
      }
    }
  },
  created() {
    this.cases = data.cases.data;
  }
};
</script>
<style lang="less" scoped>
.cases {
  .navbar {
    box-shadow: 0 1px 2px #aaa;
  }
  .cases_wraper {
    margin-top: 81px;
    margin-bottom: 100px;
    .category_list {
      padding: 50px 0 20px 0;
      a {
        font-size: 16px;
        padding-right: 15px;
      }
      a.active {
        color: #0086eb;
      }
      a:hover {
        color: #0086eb;
      }
    }
    .case_list {
      background: #f5f5f5;
      padding: 10px 10px 4px 10px;
      li:not(:nth-child(4n + 4)) {
        margin-right: 10px;
      }
      li:hover {
        box-shadow: 0px 0px 4px #aaa;
      }
      li {
        background: #fff;
        width: 211.5px;
        border: 8px solid #fff;
        box-shadow: 0px 0px 2px #ddd;
        padding-bottom: 10px;
        margin-bottom: 10px;
        .icon {
          width: 211px;
          height: 142px;
          img {
            width: 211px;
            height: 142px;
          }
        }
        .title {
          font-size: 20px;
          color: #555;
          padding: 10px 0 20px 0;
        }
        .content {
          color: #666;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
