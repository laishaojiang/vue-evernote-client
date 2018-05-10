<template>
  <div id="login">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="main"></div>
          <div class="form">
            <h3 @click="showRegister">创建账户</h3>
            <transition>
              <div :class="['register' ,{show:isShowRegister}]">
                <input type="text" v-model="register.username" placeholder="用户名">
                <input type="password" v-model="register.password" placeholder="密码">
                <p :class="{error:register.isError}">{{register.notice}}</p>
                <div @click="onRegister" class="button">创建账号</div>
              </div>
            </transition>
            <h3 @click="showLogin">登录</h3>
            <transition>
              <div :class="['login' ,{show:isShowLogin}]">
                <input type="text" v-model="login.username" placeholder="输入用户名">
                <input type="password" v-model="login.password" placeholder="密码">
                <p :class="{error:login.isError}">{{login.notice}}</p>
                <div @click="onLogin" class="button"> 登录</div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        isShowRegister: true,
        isShowLogin: false,
        register: {
          username: '',
          password: '',
          isError: false,
          notice: '输入用户名和密码'
        },
        login: {
          username: '',
          password: '',
          isError: false,
          notice: '输入用户名和密码'
        }
      };
    },

    methods: {
      showRegister() {
        this.isShowRegister = true;
        this.isShowLogin = false;
      },

      showLogin() {
        this.isShowRegister = false;
        this.isShowLogin = true;
      },

      onRegister() {
        if (!this.checkName(this.register.username)) {
          this.register.isError = true;
          this.register.notice = '用户名不对';
          return;
        }
        if (!this.checkPassword(this.register.password)) {
          this.register.isError = true;
          this.register.notice = '密码不对';
          return;
        }
        this.register.isError = false;
        this.register.notice = '';
        console.log('开始注册 用户名为：' + this.register.username + '密码：' + this.register.password)
      },

      onLogin() {
        if (!this.checkName(this.login.username)) {
          this.login.isError = true;
          this.login.notice = '用户名不对';
          return;
        }
        if (!this.checkPassword(this.login.password)) {
          this.login.isError = true;
          this.login.notice = '密码不对';
          return;
        }
        this.login.isError = false;
        this.login.notice = '';
        console.log('开始登录 用户名为：' + this.login.username + '密码：' + this.login.password)
      },
      checkName(username) {
        var reg = /^[\w\u4e00-\u9fa5]{3,15}$/;
        if (reg.test(username)) {
          return true;
        } else {
          return false;
        }
      },
      checkPassword(password) {
        var reg = /^.{6,16}$/;
        if (reg.test(password)) {
          return true;
        } else {
          return false;
        }
      }
    }
  }

</script>

<style lang="less">
  .modal-mask {
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: table;
    transition: opacity 0.3s ease;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
    width: 800px;
    height: 500px;
    margin: 0px auto;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    font-family: Helvetica, Arial, sans-serif;
    display: flex;

    .main {
      flex: 1;
      background: #36bc64 url(//cloud.hunger-valley.com/17-12-13/38476998.jpg-middle) center center no-repeat;
      background-size: contain;
    }
    .form {
      width: 270px;
      border-left: 1px solid #ccc;

      h3 {
        padding: 10px 20px;
        font-weight: normal;
        font-size: 16px;
        border-top: 1px solid #eee;
        cursor: pointer;

        &:nth-of-type(2) {
          border-bottom: 1px solid #eee;
        }
      }

      .button {
        background-color: #2bb964;
        height: 36px;
        line-height: 36px;
        text-align: center;
        font-weight: bold;
        color: #fff;
        border-radius: 4px;
        margin-top: 18px;
        cursor: pointer;
      }

      .login,
      .register {
        padding: 10px 20px;
        border-top: 1px solid #eee;
        height: 0;
        overflow: hidden;
        transition: height .4s;
        &.show {
          height: 193px;
        }
        input {
          display: block;
          width: 100%;
          height: 35px;
          line-height: 35px;
          padding: 0 6px;
          border-radius: 4px;
          border: 1px solid #ccc;
          outline: none;
          font-size: 14px;
          margin-top: 10px;
        }
        input:focus {
          border: 3px solid #9dcaf8;
        }

        p {
          font-size: 12px;
          margin-top: 10px;
          color: #444;
        }
        .error {
          color: red;
        }
      }
      .login {
        border-top: 0;
      }
    }
  }

</style>
