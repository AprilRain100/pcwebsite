<template>
  <div class="wrap">
    <ul class="list">
      <li v-for="item in reverseArr"><img :src="item.src" alt=""></li>
    </ul>
  </div>
</template>

<script>
    export default {
      data () {
          return {
            arr: [
              {
                src: require('../assets/img/1.png')
              },
              {
                src: require('../assets/img/2.png')
              },
              {
                src: require('../assets/img/3.jpg')
              }
            ]
          }
      },
      computed: {
          reverseArr () {
            return [...this.arr, ...this.arr]
          }
      }
    }
</script>

<style lang="less" scoped>
  .wrap {
    overflow:hidden;
    width:1200px;
    height:200px;
    margin:50px auto;
  }
  .list {
    position:relative;
    top:0;
    left:0;
    width:200%;
    height:100%;
    animation: mymove 18s infinite linear;
    -webkit-animation: mymove 18s infinite linear;
    -moz-animation: mymove 18s infinite linear;
    -o-animation: mymove 18s infinite linear;
  }
  .list li {
    width:380px;
    height:200px;
    margin-right: 20px;
    float:left;
    vertical-align:middle;
    img {
      width: 100%;
      height: 100%;
    }
  }
  @keyframes mymove {
    from {
      left:0;
    }
    to {
      left:-1200px;
    }
  }
  @-webkit-keyframes mymove {
    from {
      left:0;
    }
    to {
      left:-1200px;
    }
  }
  @-moz-keyframes mymove {
    from {
      left:0;
    }
    to {
      left:-1200px;
    }
  }
  @-o-keyframes mymove {
    from {
      left:0;
    }
    to {
      left:-1200px;
    }
  }
  .list:hover {
    animation-play-state: paused;
    -webkit-animation-play-state: paused;
    -moz-animation-play-state: paused;
    -o-animation-play-state: paused;
  }
</style>
