<template>
    <div class="contact-second">
       <div class="container1">
           <div class="form1">
               <form action="#" method="GET">
                   <p>Sign in</p>
                   <div class="input1">
                       <fa-icon icon="user"/>
                       <input type="text" placeholder="User Name">
                   </div>
                   <div class="input2">
                       <fa-icon icon="lock"/>
                       <input type="password" placeholder="password">
                   </div>
                   <input type="submit" value="LOG IN" class="submit">
                   <p>Or Sign in with social plotforms</p>
                   <div class="myicons">
                       <span>
                       <fa-icon :icon="['fab','facebook-f']"/>
                   </span>
                   <span>
                       <fa-icon :icon="['fab','twitter']"/>
                   </span>
                   <span>
                       <fa-icon :icon="['fab','google']"/>
                   </span>
                   <span>
                       <fa-icon :icon="['fab','linkedin-in']"/>
                   </span>
                   </div>
               </form>
           </div>

            <div class="form1-img">
                <p>New Here?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. quibusdam veritatis eius</p>
                <input type="submit" value="Sign Up" @click="first()">
                <img src="@/assets/product/aa.svg" alt="">
            </div>
            <div class="form2-img">
                <p>One Of Us?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. quibusdam veritatis eius</p>
                <input type="submit" value="Sign In" @click="second()">
                <img src="@/assets/product/a.svg" alt="">
            </div>










           <div class="form2">
               <form action="#" method="GET">
                   <p>Sign UP</p>
                   <div class="input1">
                       <fa-icon icon="user"/>
                       <input type="text" placeholder="User Name">
                   </div>
                   <div class="input2">
                       <fa-icon icon="envelope"/>
                       <input type="email" placeholder="Email">
                   </div>
                   <div class="input3">
                       <fa-icon icon="lock"/>
                       <input type="password" placeholder="password">
                   </div>
                   <div class="input4">
                       <fa-icon icon="phone-alt"/>
                       <input type="text" placeholder="Phone Number">
                   </div>
                   <input type="submit" value="Sign Up" class="submit">
                   <p>Or Sign in with social plotforms</p>
                   <div class="myicons">
                       <span>
                       <fa-icon :icon="['fab','facebook-f']"/>
                   </span>
                   <span>
                       <fa-icon :icon="['fab','twitter']"/>
                   </span>
                   <span>
                       <fa-icon :icon="['fab','google']"/>
                   </span>
                   <span>
                       <fa-icon :icon="['fab','linkedin-in']"/>
                   </span>
                   </div>
               </form>
           </div>
       </div>
    </div>
</template>
<script>
export default {
    name:"contact-second",
    methods:{
        first:function(){
            var cycle=document.querySelector(".contact-second .container1");
            cycle.classList.add("moving");
        },
        second:function(){
            var cycle=document.querySelector(".contact-second .container1");
            cycle.classList.remove("moving");
        }
    }
}
</script>
<style lang="scss">

//---------------------------------------------------------------------------
@mixin maxlarge {
  @media (max-width: 1200px) {
    @content;
  }
}
@mixin maxmediam {
  @media (max-width: 992px) {
    @content;
  }
}
@mixin maxsmall {
  @media (max-width: 768px) {
    @content;
  }
}
@mixin maxmobile {
  @media (max-width: 576px) {
    @content;
  }
}
@mixin maxtiny {
  @media (max-width: 350px) {
    @content;
  }
}
@mixin minlarge {
  @media (min-width: 1200px) {
    @content;
  }
}

@keyframes scaling{
    0%{
        transform: scale(1);
    }
    100%{
        transform: scale(1.1);
    }
}



//----------------------------------------------------------------------------------
.contact-second .container1.moving{
&::after{
left: 55%;
transition: all 1s linear;
@include maxlarge{
            left: 53%;
        }
@include maxmediam{
            left: 53%;
        }
        @include maxsmall{
             top: 80%;
             left:-50%;
           width: 200%;
        }
}
  .form1{

        @include maxlarge{
           right: 100%;
        }
  }

.form1-img{
right: 130%;
transition: all 1s linear;


}
.form2-img{
right: 8%;
transition: all 1s linear;
@include maxlarge{
            top: 7%;
        }
        @include maxmediam{
           right: 3%;
        }
        @include maxsmall{
             top: 85%;
             right: 0%;
             width: 100%;
        }
}
.form2{
    top: 7%;
right: 57%;
transition: all 1s linear;
@include maxlarge{
            right: 55%;
        }
        @include maxmediam{
           right: 51%;
        }
        @include maxsmall{
             top: 2%;
             right: 0%;
             width: 100%;
        }
}
}

.contact-second .container1{
    position: relative;
    overflow: hidden;
    height: 550px;
    width: 100%;
    @include maxsmall{
        height: 800px;
    }
    &::after{
        content: "";
        width: 1000px;
        height: 1000px;
        border-radius: 50%;
        background-color:#1D8793;
        position: absolute;
        top: -70%;
        left: -30%;
        transition: all 1s linear;
        @include maxlarge{
            left: -50%;
        }
        @include maxmediam{
           left: -600px;
        }
        @include maxsmall{
           top: -770px;
           left:-50%;
           width: 200%;
        }
    }
    .form1-img{
        position: absolute;
        width: 400px;
        top: 10%;
        right: 60%;
        text-align: center;
        z-index: 10;
        color: white;
        transition: all 1s linear;
        @include maxmediam{
           right:56%;
        }
        @include maxsmall{
           right: 0%;
           top: 3%;
           width: 100%;
        }
        p:first-of-type{
            font-weight: bold;
            font-size: 25px;
            margin-bottom: 0px;
            animation: scaling 1s linear infinite alternate ;
               @include maxmediam{
                font-size: 20px;
        }
        }
        p:last-of-type{
            font-size: 14px;
             @include maxmediam{
                font-size: 12px;
                width: 70%;
                margin: 0px auto 10px;
        }
        }
        input{
            background-color: transparent;
            font-size: 13px;
            font-weight: bold;
            padding: 5px 20px;
            border: 2px solid white;
            border-radius: 20px;
            color: white;
            margin-bottom: 100px;
            outline: none;
            @include maxsmall{
           margin-bottom:  10px;
        }
            &:hover{
                background-color:white;
            color: #1D8793;
            transition: all .5s linear;
            font-size: 14px;
            }
        }
        img{
            width: 80%;
             @include maxmediam{
         width: 75%;
         display: block;
         margin: auto;
        }
        @include maxsmall{
             width: 45%;
        }
        }
    }



.form2-img{
        position: absolute;
        width: 400px;
        top: 10%;
        right: -260%;
        text-align: center;
        z-index: 10;
        color: white;
        transition: all 1s linear;
        p:first-of-type{
            font-weight: bold;
            font-size: 25px;
            margin-bottom: 0px;
            animation: scaling 1s linear infinite alternate ;
              @include maxmediam{
                font-size: 20px;
        }

        }
        p:last-of-type{
            font-size: 14px;
              @include maxmediam{
                font-size: 12px;
                width: 70%;
                margin: 0px auto 10px;
        }
        }
        input{
            background-color: transparent;
            font-size: 13px;
            font-weight: bold;
            padding: 5px 20px;
            border: 2px solid white;
            border-radius: 20px;
            color: white;
            margin-bottom: 60px;
            outline: none;
             @include maxmediam{
                font-size: 12px;
                margin-bottom: 70px;
        }
        @include maxsmall{
            margin-bottom: 10px;
        }
            &:hover{
                background-color:white;
            color: #1D8793;
            transition: all .5s linear;
            font-size: 14px;
            }
        }
        img{
            width: 70%;
            display: block;
            margin: auto;
             @include maxmediam{
                width: 65%;
        }
        @include maxsmall{
         display: none;
        }
        }
    }







    .form1{
        position: absolute;
        width: 400px;
        top: 10%;
        right: 10%;
        text-align: center;
        @include maxmediam{
           right: 3%;
        }
        @include maxsmall{
           right: 0%;
           top: 60%;
           width: 100%;
        }
        
        p:first-of-type{
            font-size: 34px;
            font-family: 'Lobster', cursive;
            text-align: center;
        @include maxmediam{
             font-size: 30px;
        }
        @include maxsmall{
            font-size: 27px;
        }

        }
        .input1,.input2{
            width: 100%;
            border-radius: 20px;
            height: 50px;
            background-color: #d1d1d1;
            display: flex;
            align-items: center;
            margin: 10px 0px;
             @include maxmediam{
           width: 80%;
           margin: 10px auto;
        }
            input{
                background-color: transparent;
                border: none;
                outline: none;
                width: 85%;
                &::placeholder{
                    font-weight: bold;
                }
                
            }
            svg{
                width: 14%;
                text-align: center;
                path{
                    fill: gray!important;
                }
            }
        }
        .submit{
            background-color: #4C7590;
            border: none;
            padding: 7px 35px;
            border-radius: 20px;
            color: white;
            font-weight: bold;
            margin-top: 20px;
            margin-bottom: 30px;
            &:hover{
             background-color: #eee;
            border: 2px solid #1D8793;
            color: #1D8793; 
            font-weight: bold;
            transition: all .5s linear;
                }
             @include maxmediam{
             font-size: 13px;
        }
        @include maxsmall{
            font-size: 12px;
            margin-top: 10px;
            margin-bottom: 20px;
        }
        }
        p:last-of-type{
            font-weight: bold;
            margin-bottom: 0px;
            @include maxmediam{
             font-size: 14px;
        }
        }
        .myicons{
            span{
                width: 40px;
                line-height: 40px;
                height: 40px;
                display: inline-block;
                border-radius: 50%;
                border: 1px solid #4C7590;
                margin: 10px;
                 cursor: pointer;
                &:hover svg{
                    transform: scale(1.5);
                    transition: all .5s linear;
                }
                 @include maxmediam{
              width: 30px;
                line-height: 30px;
                height: 30px;
        }
        @include maxsmall{
             margin: 5px;
        }
            }
        }
    }

    .form2{
        position: absolute;
        width: 400px;
        top: 10%;
        right: -200%;
        z-index: 11;
        text-align: center;
        p:first-of-type{
            font-size: 34px;
            font-family: 'Lobster', cursive;
            text-align: center;
            @include maxmediam{
             font-size: 30px;
        }
        @include maxsmall{
            font-size: 27px;
        }
        }
        .input1,.input2,.input3,.input4{
            width: 100%;
            border-radius: 20px;
            height: 50px;
            background-color: #d1d1d1;
            display: flex;
            align-items: center;
            margin: 10px 0px;
              @include maxmediam{
           width: 80%;
           margin: 10px auto;
        }
            input{
                background-color: transparent;
                border: none;
                outline: none;
                width: 85%;
                &::placeholder{
                    font-weight: bold;
                }
            }
            svg{
                width: 14%;
                text-align: center;
                path{
                    fill: gray!important;
                }
            }
        }
        .submit{
            background-color: #4C7590;
            border: none;
            padding: 7px 35px;
            border-radius: 20px;
            color: white;
            font-weight: bold;
            margin-top: 10px;
            margin-bottom: 10px;
            &:hover{
             background-color: #eee;
            border: 2px solid #1D8793;
            color: #1D8793; 
            font-weight: bold;
            transition: all .5s linear;
                }
             @include maxmediam{
             font-size: 13px;
        }
         @include maxsmall{
            font-size: 12px;
            margin-top: 10px;
            margin-bottom: 10px;
        }
        }
        p:last-of-type{
            font-weight: bold;
            margin-bottom: 0px;
            @include maxmediam{
             font-size: 14px;
        }
        }
        .myicons{
            span{
                width: 40px;
                line-height: 40px;
                height: 40px;
                display: inline-block;
                border-radius: 50%;
                border: 1px solid #4C7590;
                margin: 10px;
                cursor: pointer;
                &:hover svg{
                    transform: scale(1.5);
                    transition: all .5s linear;
                }
                 @include maxmediam{
              width: 30px;
                line-height: 30px;
                height: 30px;
        }
           @include maxsmall{
             margin: 5px;
        }     
            }
        }
    }
}
</style>