<template>
  <div class="container-fluid">
    <div class="panel">
      <div class="panel-body">
        <div class="font20" v-if="quote.english">{{ quote.english }}</div>
        <div class="font20" v-if="quote.chinese">{{ quote.chinese }}</div>
        <el-row>
          <el-col :span="20">
            <div class="chat-element">
              <div class="pull-left img-element">
                <img alt="image" style="width: 80px; height: 80px" class="img-circle" src="../assets/img/Avatar.jpg">
              </div>
              <div class="media-body">
                <p class="font24 header">{{ welcome_msg }}</p>
                <p class="font13">
                  跑步呐，最重要的是要有动力
                </p>
              </div>
            </div>
          </el-col>
          <el-col :span="4">&nbsp;</el-col>
        </el-row>
      </div>
    </div>

    <div class="panel margintop10">
      <div class="panel-header" style="height: 30px">
        <p class="panel-title pull-left">常用功能</p>
        <el-button class="pull-right" icon="el-icon-refresh">刷新</el-button>
      </div>
      <div class="panel-body">
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="metric">
              <span class="icon"><i class="el-icon-sold-out"/></span>
              <p>
                <span class="number">4</span>
                <span class="title">xxx</span>
              </p>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="metric">
              <span class="icon"><i class="el-icon-sold-out"></i></span>
              <p>
                <span class="number">4</span>
                <span class="title">xsss</span>
              </p>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="metric">
              <span class="icon"><i class="el-icon-sold-out"></i></span>
              <p>
                <span class="number">4</span>
                <span class="title">ssss</span>
              </p>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="metric">
              <span class="icon"><i class="el-icon-sold-out"></i></span>
              <p>
                <span class="number">4</span>
                <span class="title">sssss</span>
              </p>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

  </div>
</template>

<script>
import {ref} from "vue"
import {randomQuote} from '@/api/quote'

const weekDays = ['日', '一', '二', '三', '四', '五', '六']

function getMsg(hour) {
  let msg
  if (hour < 5) {
    msg = '是不是又熬夜了，注意身体哦！'
  } else if (hour < 8) {
    msg = '一日之计在于晨！做好一天的计划'
  } else if (hour < 10) {
    msg = '上班开始！每天都是元气满满'
  } else if (hour < 12) {
    msg = '多和同事沟通能提高效率哦'
  } else if (hour < 13) {
    msg = '该吃饭了吧，人是铁，饭是钢哦！'
  } else if (hour < 14) {
    msg = '休息一下，下午才有力气搬砖！'
  } else if (hour < 17) {
    msg = '努力中....'
  } else if (hour < 18) {
    msg = '工作了一天，适当休息一下吧！'
  } else if (hour < 19) {
    msg = '看看自己劳动成功，好好的犒劳一下自己吧!'
  } else if (hour < 23) {
    msg = '不会在加班吧，努力吧骚年!'
  } else if (hour === 23) {
    msg = '偷偷告诉我：你最近是不是又胖了！'
  } else {
    msg = '鬼知道这是什么时间'
  }
  return msg
}

export default {
  data() {
    let myDate = new Date()
    myDate.getHours() // 获取当前小时数(0-23)
    return {
      welcome_msg: '告诉我现在几点了？',
      dayOfWeek: '星期几',
      quote: {
        english: 'A friend is one of the nicest things you can have, and one of the best things you can be.',
        chinese: ''
      }
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      setInterval(this.timer, 1000)
    })

    randomQuote()
      .then(response => {
        this.quote.english = response.data.english
        this.quote.chinese = response.data.chinese
      })
      .catch(error => {
        console.error(error)
      })
  },
  methods: {
    timer: function () {
      let now = new Date()
      this.dayOfWeek = weekDays[now.getDay()]
      this.welcome_msg = getMsg(now.getHours())
    }
  }
}
</script>

<style scoped>
.media-body .header {
  margin-bottom: 10px;
  margin-top: 20px;
  font-weight: 100;
}

.img-element {
  padding: 10px;
}

.chat-element {
  padding: 15px;
}
</style>
