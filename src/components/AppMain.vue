<script>
        
        export default{
            name:'AppMain',
            data(){
                return{
                    backgroundImg:'src/assets/b.png',
                    aboutImg:'src/assets/about.png',
                    dogIcon:{
                        logo:'src/assets/dog-icon.png',
                        right:'src/assets/dog-logo.png',
                        left:'src/assets/dog-left.png'
                    },
                    services:[
                        {
                            image:'src/assets/d-1.png',
                            title:'Pet Sitting',
                            text:'the readble content of a page when looking at its layout',
                            right:'src/assets/right.png'
                        },
                        {
                            image:'src/assets/d-2.png',
                            title:'Puppy Sitting',
                            text:'the readble content of a page when looking at its layout',
                            right:'src/assets/right.png'
                        },
                        {
                            image:'src/assets/d-3.png',
                            title:'Dog Walking',
                            text:'the readble content of a page when looking at its layout',
                            right:'src/assets/right.png'
                        },
                        {
                            image:'src/assets/d-4.png',
                            title:'Night Care',
                            text:'the readble content of a page when looking at its layout',
                            right:'src/assets/right.png'
                        },
                        {
                            image:'src/assets/d-5.png',
                            title:'Pet Sitting',
                            text:'the readble content of a page when looking at its layout',
                            right:'src/assets/right.png'
                        },
                    ],
                    listAbout:[
                            {
                                image: 'src/assets/w-1.png',
                                title:'Safety First',
                                text:'It is a long established fact that a reader will be distructed by the readable content of a page when looking at its layout'
                            },
                            {
                                image: 'src/assets/w-2.png',
                                title:'Play Yards',
                                text:'It is a long established fact that a reader will be distructed by the readable content of a page when looking at its layout'
                            },
                            {
                                image: 'src/assets/w-3.png',
                                title:'Monitor Your Pets',
                                text:'It is a long established fact that a reader will be distructed by the readable content of a page when looking at its layout'
                            }
                        ]

                    

                    

                }
            },
            
        }  
</script>




<template>

    <main class="mt-2">
        <section class="first-section ">
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
                            <img class="dog-icon" :src="dogIcon.logo" alt="DOG-ICON">
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
                <img :src="dogIcon.right" alt="">
            </div>
        </section>
        <section class="third-section">
            <h5 class="text-center mt-5">Services</h5>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-3">
                        <img :src="dogIcon.left" alt="dog-icon">
                    </div>
                    <div class="col-6">
                        <h2>Dogmilo pet care services For your best friends</h2>
                       <div class="d-flex">
                            <div class=" services " v-for="service in services">
                                <div>
                                    <img :src="service.image" alt="">
                                    <h6>{{ service.title }}</h6>
                                    <p>{{ service.text }}</p>
                                    <img class="right" :src="service.right" alt="">
                                    
                                </div>

                            </div>
                       </div>
                    </div>
                    <div class="col-3">
                        <img :src="dogIcon.right" alt="dog-icon">
                    </div>
                </div>
            </div>
        </section>
        <section class="mt-5 fourth-section" >
            <div class="container-fluid">
                <div class="row">
                    <div class="col-6">
                        <img src="src/assets/why.png" alt="">
                    </div>
                    <div class="col-6">
                        <div class="d-flex container-logo">
                            <!-- <img class="logo" :src="dogIcon.logo" alt="dog-icon"> -->
                            <h6>choose us</h6>
                            <h2>WHY CHOOSE US?</h2>
                            
                            
                        </div>
                    </div>
                </div>
            </div>
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
            &:hover{
                background-color: #173b67;
            }
        }
    }
   
 }
 .second-section{
    // max-width: 1000px;
    // margin: auto;
    // background-image: url('src/assets/dog-logo.png');
    .container{
        max-width: 1000px;
        margin: auto;
    }
    .dog-icon{
        height: 50px;
        width: 50px;
        vertical-align: middle;
    }
    .about{
        vertical-align: middle;
    }
 }
 .third-section{
    background-color: #f5f5f5;
    .services{
        height: 100 px;
        width: 20%;
        background-color: #ce7c2a;
        border-radius: 40%;
        padding: 5px;
        margin: 5px;
        text-align: center;
        color: white;
        img{
            width: 50px;
            height: 50px;
            
        }
        &:hover{
            background-color: #7f7045;
            cursor: pointer;
        }
        .right{
            width: 30px;
            height: 30px;
            background-color: #ffcc01;
            border-radius: 50%;
            vertical-align: middle;
            padding: 5px;
        }
    }
   .logo{
    width: 100%;
   }
    
 }
 
</style>