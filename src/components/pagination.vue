<template>
  <div class="pagination-wrap" v-cloak v-if="totalPage!=0">
    <ul class="pagination">
      <li :class="currentPage==1?'disabled':''"><a @click="turnToPage(currentPage-1)" href="javascript:;">上一页</a></li>
      <li><a href="javascript:;" @click="turnToPage(currentPage-1)" v-text="currentPage-1" v-if="currentPage-1>0"></a>
      </li>
      <li class="active"><a href="javascript:;" @click="turnToPage(currentPage)" v-text="currentPage">3</a></li>
      <li><a href="javascript:;" @click="turnToPage(currentPage+1)" v-text="currentPage+1"
             v-if="currentPage+1<totalPage"></a></li>
      <li :class="currentPage==totalPage?'disabled':''"><a href="javascript:;"
                                                           @click="turnToPage(currentPage+1)">下一页</a></li>
    </ul>
  </div>
</template>

<script type="text/javascript">
  export default {
    props: {
      //传入总页数，默认100
      totalPage: {
        type: Number,
        default: 1,
        required: true,
        validator(value) {
          return value >= 0
        }
      },
      //传入页面改变时的回调，用于更新你的数据
      //回调默认是打印当前页
      //请根据需要在传入的回调函数里更改函数体
      changeCallback: {
        type: Function,
        default(cPage) {
          console.log("默认回调，显示页码：" + cPage);
        }
      }
    },
    data() {
      return {
        goToPage: '',
        myCurrentPage: 1,
        isPageNumberError: false
      }
    },
    computed: {
      // prop不应该在组件内部做改变
      // 所以我们这里设置一个内部计算属性myCurrentPage来代替props中的currentPage
      // 为什么要这么做？参考：https://cn.vuejs.org/v2/guide/components.html#单向数据流
      currentPage() {
        return this.myCurrentPage;
      }
    },
    methods: {
      //turnToPage为跳转到某页
      //传入参数pageNum为要跳转的页数
      turnToPage(pageNum) {
        var ts = this;
        var pageNum = parseInt(pageNum);

        //页数不合法则退出
        if (!pageNum || pageNum > ts.totalPage || pageNum < 1) {
          console.log('页码输入有误！');
          ts.isPageNumberError = true;
          return false;
        } else {
          ts.isPageNumberError = false;
        }

        //更新当前页
        ts.myCurrentPage = pageNum;

        //页数变化时的回调
        ts.changeCallback(pageNum);
      }
    }
  }
</script>

<style type="text/css">
  .pagination-wrap {
    margin: 0 auto;
    text-align: center;
  }

  .pagination {
    display: inline-block;
    padding-left: 0;
    margin: 20px 0;
    border-radius: 4px;
  }

  .pagination > li:first-child > a, .pagination > li:first-child > span {
    margin-left: 0;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  .pagination > .disabled > span, .pagination > .disabled > span:hover, .pagination > .disabled > span:focus, .pagination > .disabled > a, .pagination > .disabled > a:hover, .pagination > .disabled > a:focus {
    color: #777;
    cursor: not-allowed;
    background-color: #fff;
    border-color: #ddd;
  }

  .pagination > li:last-child > a, .pagination > li:last-child > span {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  .pagination > .active > a, .pagination > .active > span, .pagination > .active > a:hover, .pagination > .active > span:hover, .pagination > .active > a:focus, .pagination > .active > span:focus {
    z-index: 2;
    color: #fff;
    cursor: default;
    background-color: #428bca;
    border-color: #428bca;
  }

  .pagination > li > a, .pagination > li > span {
    position: relative;
    float: left;
    padding: 6px 12px;
    margin-left: -1px;
    line-height: 1.42857143;
    color: #428bca;
    text-decoration: none;
    background-color: #fff;
    border: 1px solid #ddd;
  }

  .pagination > li {
    display: inline;
  }
</style>
