<template>

  <section>
      <div class="form-box">
          <div class="form-value">
              <form action="">
                <div>
                  <VAvatar class="avatar-1 my-3 border border-primary bg-white" size="90">
                  <v-icon size="80" class="text-primary" theme="dark">mdi-account</v-icon>
                  </VAvatar>
                </div>

                  <div class="inputbox">
                      <v-icon class="icon">mdi-account</v-icon>
                      <input autocomplete="off" type="text" name="username" v-model="postdata.name" required>
                      <label for="">Name (ชื่อ/tag)</label>
                  </div>
                  <div class="inputbox">
                    <v-icon class="icon">mdi-text-long</v-icon>
                      <input autocomplete="off" type="text" name="description" class="des" v-model="postdata.description" required>
                      <label for="">Description (คำใบ้/ฝากบอกถึง)</label>
                  </div>
                  <button type="submit" @click="sendData(postdata.name,postdata.description)">Submit</button>
              </form>
          </div>
      </div>
     </section>

  </template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios'
export default defineComponent({
  setup() {
    let  postdata={name:"",description:"",}
    const sendData = (name,description) =>{
      if( name!='' &&  description!=''){
        console.log("sendData Active!!");
        axios.post('http://26.228.141.51/insert.php', {name:name,description:description})
        .then(response => {
          // console.log(response)
          window.location.reload()
        }
        )
      }else console.log("Error data Null");
    }

    return{
        postdata,
        sendData
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
    position: relative;
    width: 400px;
    height: 450px;
    background: transparent ;
    backdrop-filter:contrast(20%);
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
  </style>
