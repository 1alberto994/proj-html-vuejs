<script>
        
        export default{
            name:'AppMain',
            data(){
                return{
                    backgroundImg:'src/assets/b.png'
                }
            },
            
        }  
</script>




<template>

    <main class="mt-5">
        <section class="first-section">
            <img :src="backgroundImg" alt="backgroungImg">
            <div class="container">
                <h1>
                    Welcome to Dogmilo pets
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, vel?</p>
                <a href="">Get it started</a>
            </div>

        </section>
        <section>

        </section>
        <section>

        </section>
        <section>

        </section>
        <section>

        </section>
       
       

    </main>

</template>

<style lang="scss" scoped>

 main{
    min-height: 200px;
    position: relative;
    img{
        object-fit: contain;
        width: 100%;
        
    }
    .container{
       
        position: absolute;
        top: 0;
        left: 0;
        h1,p{
            color: white;
        }
        a{
            text-decoration: none;
            background-color: #ce7c2a;
            color: white;
            border-radius: 10px 10px;
            padding: 5px;
        }
    }
   
 }
</style>