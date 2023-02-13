<script>
        
        export default{
            name:'AppMain',
            data(){
                return{
                    backgroundImg:'src/assets/b.png',
                    aboutImg:'src/assets/about.png',
                    dogIcon:'src/assets/dog-icon.png'
                }
            },
            
        }  
</script>




<template>

    <main class="mt-5">
        <section class="first-section">
            <img :src="backgroundImg" alt="backgroungImg">
            <div class="container-principale">
                <h1>
                    Welcome to Dogmilo pets
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, vel?</p>
                <a href="">Get it started</a>
            </div>

        </section>
        <section class="second-section mt-5 d-flex">
            <div class="container">
                <div class="row">
                    <div class="col-6">
                        <img :src="aboutImg" alt="about-us">
                    </div>
                    <div class="col-6">
                        <div class="d-flex align-items-center ml-5">
                            <img class="dog-icon" :src="dogIcon" alt="DOG-ICON">
                            <p class="about">About us</p>
                        </div>
                        <div class="d-flex flex-column align-items-center">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, exercitationem recusandae aliquid adipisci quos error optio labore? Quae pariatur obcaecati eaque ipsa! Error similique natus quas suscipit omnis autem eius?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex fugiat excepturi quia. Aliquid deserunt distinctio eius magnam quaerat quasi saepe!</p>
                        </div>

                    </div>
                </div>
            </div>
            <div>
                <img src="src/assets/dog-logo.png" alt="">
            </div>
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
    .container-principale{
       
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
 .second-section{
    max-width: 1000px;
    margin: auto;
    // background-image: url('src/assets/dog-logo.png');
    .dog-icon{
        height: 50px;
        width: 50px;
        vertical-align: middle;
    }
.about{
    vertical-align: middle;
}
 }
</style>