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

    <header class="mt-5">

        <div class="d-flex justify-content-between align-items-center">
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
    max-width: 1000px;
    margin: auto;
    min-height: 30px;
    background-color: white;
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