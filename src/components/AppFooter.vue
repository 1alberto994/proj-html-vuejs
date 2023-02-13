<script>
        
        export default{
            name:'AppFooter',
            data(){
                return{
                    listFooter:[
                        {
                            title:'Get in touch',
                            text:"Have aquestion for us? we'll answer your problem here"
                        },
                        {
                            title:'Support',
                            arrayText:[
                                {
                                    lista:'Contact chat'
                                },
                                {
                                    lista:'online chat'
                                },
                                {
                                    lista:'Whatsapp'
                                },
                                {
                                    lista:'Telegram'
                                },
                                {
                                    lista:'Snapchat'
                                }
                            ]
                        },
                        {
                            title:'About',
                            arrayText:['About us','Blog','Carreer','Job']
                        },
                        {
                            title:'Faq',
                            arrayText:['Account','Order','Delivery','Payment','Return']
                        },
                        {
                            title:'Contact me',
                            arrayText:['via Giuseppe Garibaldi','+3910987654321','info@example.com']
                        },
                    ]
                    
                }
            },
            
        }  
</script>





<template>

    <footer>
        <div class="d-flex form">
            <div>
                <img src="src/assets/news.png" alt="">
            </div>
            <div class="mb-3  input ">
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
            </div>
        </div>

      <div>
        <ul class="d-flex ">
            <li class="text-center" v-for="listInfo in listFooter">
                <h3>{{listInfo.title}}</h3>
                <a href="">{{ listInfo.text }}</a>
                <a href="">{{ listInfo.arrayText }}</a>
            </li>
        </ul>
      </div>
       

    </footer>

</template>

<style lang="scss" scoped>
footer{
    margin-top: 30px;
    background-color: #444444;
    position: relative;
    .form{
        width: 300px;
        background-color: #ce7c2a;
        padding: 30px;
        border-radius: 20px;
        position: absolute;
        bottom: 50%;
        left: 50%;
        .input{
            width: 800px;

            
        }
        img{
            width: 100px;
            height:100px;
        }
    }
    div{
        max-width: 1000px;
        margin: auto;
    }
    h3{
        color: #ce7c2a;
    }
    ul{
        list-style: none;
    }
}

</style>