<template>
  <div class="login-container">
    <div class="login-container-form">
      <h1 class="login-title mb-20">VITE 2022</h1>
      <div class="login-form">
        <a-form ref="loginFormRef" :model="loginFormData" @keyup.enter="handleSubmit" :label-col="{ span: 5 }" :wrapper-col="{ span: 24 }">
          <a-form-item name="userName" label="用户名" :rules="[{required: true, message: '请输入用户名',trigger: 'change'}]">
            <a-input v-model:value="loginFormData.userName" autocomplete="off" placeholder="请输入用户名" />
          </a-form-item>
          <a-form-item name="password" label="密码" :rules="[{required: true, message: '请输入密码',trigger: 'change'}]">
            <a-input v-model:value="loginFormData.password" autocomplete="off" placeholder="请输入密码" type="password" />
          </a-form-item>
          <a-form-item>          
            <a-button type="primary" block class="login_btn" @click="handleSubmit()">登陆</a-button>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue"
import { useRouter } from "vue-router"
import { useStore } from "vuex"

const loginFormData = reactive<any>({ // reactive 创建响应式对象
  userName: 'admin',
  password: 'mmkj201509',
})

const loginFormRef = ref()
const store = useStore()
const router = useRouter()

const rules = {
  userName: [{require: true, message: '请输入用户名', trigger: 'change'}],
  password: [{require: true, message: '请输入密码', trigger: 'change'}],
}

const handleSubmit = () => {
  loginFormRef.value.validate().then(() => {
    store.dispatch('user/login', loginFormData).then(resp => {
      const route = router.currentRoute.value
      const url = route.query?.redirect || '/'
      router.push(url as string)
    }).catch(err => {
      console.log('login page err: ', err)
    })
  })
}

</script>

<style lang="scss">
  .login-container{
    width: 100%;
    height: 100vh;
    background: #222;
    .login-container-form{
      width: 430px;
      margin: 0 auto;
      position: relative;
      top: 30%;
      .login-title{
        color: #2db7f5;
        text-align: center;
      }
      .login-form{
        .ant-form-item{
          border-bottom: 1px solid #515a6e;
          .ant-form-item-label{
            label{
              color: #515a6e;
            }
          }
          &:last-child{
            border-bottom: transparent;
          }
          .ant-form-item-control-input{
            .ant-input{
              color: #2db7f5;
              border: transparent;
              background: transparent;
              &:focus{
                box-shadow: none;
              }
              &::-webkit-input-placeholder {
                color: #515a6e;
                opacity: .6;
              }
            }
          }
        }        
      }
    }
  }
</style>