<script>
        
        export default{
            name:'AppFooter',
            data(){
                return{
                   listFooter:['Get in touch','Have a question for us?'],
                   listFooterUnno:['Support','Contact us','Online chat','whatsapp','Telegram','Snapchat'],
                   listFooterDue:['About','About us','Blog','Carreer','Job','In press'],
                   listFooterTre:['Faq','Account','Order','Delivery','Payment','Return'],
                   listFooterQuattro:['Contact me','4500 mercantile plaza','+1(817)9013377','info@example.com']
                    
                }
            },
            
        }  
</script>





<template>

    <footer class="p-5">
        <div class="d-flex form align-items-center">
            <div>
                <img src="src/assets/news.png" alt="">
            </div>
            <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">@</span>
                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
            </div>
        </div>

        <div class="d-flex justify-content-center ">
            <ul class="m-2" >
                <li  v-for="listInfo in listFooter">
                    
                    <a href="">{{ listInfo }}</a>
                    
                    
                </li>
                <li>
                    <font-awesome-icon icon="fa-brands fa-facebook" />
                </li>
            
            </ul>
            <ul class="m-2">
                <li v-for= "listInfoDue in listFooterDue">
                    
                    <a href="" >{{ listInfoDue }}</a>
                </li>
            </ul>
            <ul class="m-2">
                <li v-for= "listInfoTre in listFooterTre">
                    
                    <a href="" >{{ listInfoTre}}</a>
                </li>
            </ul>
            <ul class="m-2">
                <li v-for= "listInfoQuattro in listFooterQuattro">
                    
                    <a href="" >{{ listInfoQuattro }}</a>
                </li>
            </ul>
        
        </div>
      <hr>
        <div class="text-center">
            <em>Alberto Giardina</em>
        </div>

    </footer>

</template>

<style lang="scss" scoped>
footer{
    margin-top: 200px;
    background-color: #444444;
    position: relative;
    .form{
        width: 1000px;
        background-color: #ce7c2a;
        padding: 10px;
        border-radius: 20px;
        position: absolute;
        bottom: 90%;
        left: 20%;
        right: 20%;
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
    
    
    ul{
        list-style: none;
        li{
            padding: 5px;
            color: #444444;
            a{
                text-decoration: none;
                
                color: #ce7c2a;
                
            }

            &:first-child{
            font-size: 1.5rem;
            
        }
        }
        
    }
    hr,em{
        color: white;
    }
}

</style>