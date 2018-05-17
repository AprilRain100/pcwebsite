<template>
    <div>
      <slideShow></slideShow>
      <slidesGrid></slidesGrid>
      <form-tab @clickList="clickList" :news="news" :industryList="industryList"></form-tab>
      <footers></footers>
      <div>{{msg}}</div>
      <pagination :totalPage="parentTotalPage" :currentPage="parentCurrentpage" :changeCallback="parentCallback"></pagination>
      <div class="mymap">
        <mapDrag @drag="dragMap" lat="22.524491" lng="113.942695"></mapDrag>
      </div>
    </div>
</template>
<script>
import slideShow from '../components/slideshow'
import slidesGrid from '../components/slidesGrid'
import footers from '../components/footer'
import mapDrag from '../components/mapDrag'
import formTab from '../components/formTab'
import pagination from '../components/pagination'

export default {
  data () {
    return {
      height: '', // 轮播图组件的高
      imgList: [], // 轮播图组件的图片
      news: [
        {
          text: '让企业创新激发市场活力!',
          date: '2017-03-23'
        },
        {
          text: '让企业创新激发市场活力!!',
            date: '2017-03-23'
        },
        {
          text: '让企业创新激发市场活力!!!',
            date: '2017-03-23'
        }
      ],
      industryList: [
        {
          text: '新安卓手机病毒出现：能自动读信息 收发短信?',
          date: '2017-03-23'
        },
        {
          text: '新安卓手机病毒出现：能自动读信息 收发短信???',
          date: '2017-03-23'
        },
        {
          text: '新安卓手机病毒出现：能自动读信息 收发短信????',
          date: '2017-03-23'
        }
      ],
      parentTotalPage: 3,
      parentCurrentpage: 1,
      msg: ''
    }
  },
  computed: {
  },
  components: {
    slideShow,
    slidesGrid,
    footers,
    mapDrag,
    formTab,
    pagination
  },
  methods: {
    dragMap (data) {
      console.log(data)
    },
    clickList(item) {
      console.log(1, item)
    },
    //在这里传入pagination的跳转页码回调方法
    //cPage参数是已跳转的当前页码
    parentCallback( cPage )  {
      //这里是页码变化后要做的事
      this.msg = 'Update your data here. Page: ' + cPage;
    }
  },
  mounted () {
  }
}
</script>
<style lang="less" scoped>
  .mymap{
    width: 500px;
    height: 300px;
  }
  .m-part .mapbox{ width: 600px; height: 400px; margin-bottom: 20px; float: left; }

</style>
