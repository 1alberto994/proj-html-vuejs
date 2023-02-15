<script>
        
        export default{
            name:'AppHeader',
            data(){
                return{
                   logo:'src/assets/logo.png',
                   listHeader:['Home','About','Services','Training','Blogs','Get in toch!'] 
                }
            },
            
        }  
</script>


<template>

    <header class="">
        <div class=" info container-fluid">
            <div class=" d-flex informazioni justify-content-between align-items-center mt-2 ">
                <p>
                    <a class="m-3" href="">
                        <span>
                            <font-awesome-icon icon="fa-solid fa-envelope" />
                        </span>
                        info@example.com
                    </a>
                    <a class="m-3" href="">
                        <span><font-awesome-icon icon="fa-solid fa-phone" /></span>
                        +1(817)9013377
                    </a>
                </p>
                <p >
                    <a class="m-3" href=""><font-awesome-icon icon="fa-brands fa-facebook" /></a>
                    <a class="m-3" href=""><font-awesome-icon icon="fa-brands fa-telegram" /></a>
                    <a class="m-3" href=""><font-awesome-icon icon="fa-brands fa-twitter" /></a>
                </p>
            </div>
        </div>
        

        <div class="d-flex justify-content-between align-items-center informazioni mt-3 ">
            <div>
                <img :src="logo" alt="DogLOgo">
                
            </div>
            <div >
                <ul class="d-flex">
                    <li v-for="list in listHeader">
                        <a href="">
                            {{ list }}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
       

    </header>

</template>

<style lang="scss" scoped>
 header{
    // max-width: 1000px;
    // margin: auto;
    min-height: 30px;
    background-color: white;
 }
 .info{
    background-color: #ce7c2a;
    height: 50px;
    margin: auto;
    
    a{
        text-decoration: none;
        color: white;
    }
 }
 .informazioni{
    max-width: 1000px;
    margin: auto;
    
 }
 ul{
    list-style: none;
    li{
        padding: 5px;
        &:last-child{
                background-color: #ce7c2a;
                border-radius: 10px 10px;
            }

        a{
            text-decoration: none;
            color: black;
            &:hover{
                color: #ce7c2a;
                
            }
           
        }
    }
 }
</style>