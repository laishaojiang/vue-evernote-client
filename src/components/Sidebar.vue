<template>
  <div id="sidebar">
    <avatar/>
    <div class="icons">
      <router-link to="/note/1" title="笔记">
        <i class="iconfont icon-note"></i>
      </router-link>
      <router-link to="/notebooks" title="笔记本">
        <i class="iconfont icon-notebook"></i>
      </router-link>
      <router-link to="/trash/2" title="回收站">
        <i class="iconfont icon-trash"></i>
      </router-link>
    </div>
    <div class="logout" @click="onLogout">
      <i class="iconfont icon-logout"></i>
    </div>
  </div>
</template>

<script>
import avatar from '@/components/Avatar.vue'
import Auth from '@/api/auth'

export default {
  components: {
    avatar
  },
  methods: {
    onLogout(event) {
      Auth.logout().then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style lang="less" scoped>
#sidebar {
  position: relative;
  width: 56px;
  text-align: center;
  background-color: #2c333c;

  .icons {
    margin-top: 15px;

    a {
      padding: 6px 0;
      display: block;
    }

    .router-link-active {
      background-color: #5e6266;
    }
  }

  .logout {
    position: absolute;
    bottom: 20px;
    width: 100%;
    text-align: center;
    cursor: pointer;
  }

  .iconfont {
    color: #fff;
  }
}
</style>
