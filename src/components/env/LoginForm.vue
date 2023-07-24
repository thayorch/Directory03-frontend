<template>

<section>
    <div class="form-box">
        <div class="form-value">
            <form action="post">
                <h2 class="form-header">Login
              <p class="warning"><b>!! Only Staff !!</b></p>
            </h2>
            <div class="inputbox">
                    <v-icon class="icon">mdi-account</v-icon>
                    <input type="text" v-model="post_data.username" name="username" autocomplete="off" required>
                    <label for="">Username</label>
                </div>
                <div class="inputbox">
                  <v-icon class="icon">mdi-lock</v-icon>
                    <input type="password" v-model="post_data.password" name="password" autocomplete="off" required>
                    <label for="">Password</label>
                </div>
                  <VBtn type="button" @click="login">Log in</VBtn>
            </form>
        </div>
    </div>
   </section>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios';

export default defineComponent({
  emits:['submitlogin'],
  props:[],
  setup(props, {emit}) {
    let post_data={username: "",password: ""}
    let res=""
    const login = (e)=>{
        e.preventDefault();
        axios.post('http://26.228.141.51/login.php', {
        user: post_data.username,
        pass: post_data.password,
      }).then(response => {
        res = (response.data)
        console.log(res);           //admin\r\n\r\n
        emit('submitlogin',res) 
      })
    }
    return{
      post_data,
      res,
      login
    }
  },
})
</script>


<style lang="scss" scoped>
section{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 50%;
    width: 100%;
    background: transparent ;
}
.form-box{
  backdrop-filter:contrast(20%);
    position: relative;
    width: 400px;
    height: 450px;
    background: transparent ;
    border: 2px solid #fff;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.inputbox{
    position: relative;
    margin: 30px 0;
    width: 310px;
    border-bottom: 2px solid #fff;
}
.inputbox label {
    position: absolute;
    top: 60%;
    left: 5px;
    transform:translateX(0px) translateY(-50%) translateZ(0px) ;
    color:#fff;
    font-size: 1em;
    pointer-events: none;
    transition: .5s;
}

input:focus ~ label,
input:valid ~ label,
.inputbox :placeholder-shown ~ label{
  top: 25%;
}

.inputbox input {
    width: 100%;
    height: 50px;
    border: none;
    outline: none;
    font-size: 1em;
    padding:15px 35px 0 5px;
    color:#fff}
.icon {
    position: absolute;
    right: 8px;
    color: #fff;
    top:15px;
}
.form-box  button{
    width: 100%;
    height: 40px;
    border-radius: 40px ;
    background:#fff;
    border: none;
    outline: none;
    cursor: pointer
}
.form-box button:hover{
    background: #c5c5c5;
    transition:  0.4s;
    cursor: pointer;
}
.form-header{
  font-size: 2rem;
  color:#fff;
}
  </style>

