<template>
  <v-app>
    <v-toolbar id="global" dark scroll-toolbar-off-screen height='48px'>
        <v-spacer></v-spacer>
      <v-toolbar-items hidden-sm-and-down>
        <v-btn  flat >
          <span class="mr-2">Mac</span>
        </v-btn>
        <v-btn  flat  >
          <span class="mr-2">iPad</span>
        </v-btn>
        <v-btn  flat  >
          <span class="mr-2">Watch</span>
        </v-btn>
        <v-btn  flat  >
          <span class="mr-2">TV</span>
        </v-btn>
        <v-btn  flat  >
          <span class="mr-2">Music</span>
        </v-btn>
        <v-btn  flat  >
          <span class="mr-2">Soporte</span>
        </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
    </v-toolbar>

    <MacBookToolbar></MacBookToolbar>

    <div class="first-section">
      <v-container fluid fill-height >
        <v-flex xs12>
          <figure class="word-image" v-show="elementVisible" ></figure>
          <v-img  class="mac-image fade-in-anim resize-anim" alt="MacBook"
          src="https://www.apple.com/v/macbook-air/c/images/overview/hero_hw__c8csyptukngy_medium.png">
          </v-img>
        </v-flex>
      </v-container>
    </div>


    <div class="content-section">
      <v-container fill-height>
        <v-layout row wrap align-center justify-center v-show='contentSection'>
        <v-flex xs12 md6 lg8 text-xs-center >
          <h1 v-observe-visibility="visibilityChanged"
                    :class="{'up-anim': animation}"
                    class="headline-super">Ligera como&nbsp;siempre. Poderosa como&nbsp;nunca.</h1>
        </v-flex>
        <v-flex md8 lg8 text-md-center class="section-container">
          <p v-observe-visibility="visibilityChanged"
                    :class="{'up-anim': animation}"
                    class="elevated-text">La notebook Mac más querida de todas está de vuelta para que te vuelvas a enamorar.
            La&nbsp;nueva MacBook&nbsp;Air es más delgada y ligera, está disponible en gris espacial,
            color plata y color oro, y&nbsp;viene con una brillante pantalla Retina, Touch&nbsp;ID,
            teclado de última generación y&nbsp;trackpad Force&nbsp;Touch. Como su icónica estructura
            está hecha de aluminio 100% reciclado, es&nbsp;la Mac más ecológica hasta ahora.
            <sub><a href="footnote-1" class="footnote" >1</a>
             </sub>
              Y&nbsp;con una batería que dura todo el&nbsp;día, la MacBook&nbsp;Air es&nbsp;perfecta
               para llevar a&nbsp;todos lados y&nbsp;hacer de&nbsp;todo.
          </p>
        </v-flex>
        </v-layout>
      </v-container>
    </div>

  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import MacBookToolbar from './components/MacBookToolbar'

export default {
  name: 'App',
  components: {
    MacBookToolbar,
    HelloWorld
  },
  data(){
        return {
            animation:false,
            elementVisible:false,
            contentSection: false
        }
    },
    methods:{
        visibilityChanged(isVisible){
            console.log(isVisible)
            if(isVisible)
                this.animation = true;
        }
    },
    created() {
            setTimeout(() => this.elementVisible = true, 2000),
            setTimeout(() => this.contentSection = true, 500)
        }
}
</script>

<style>
  body{
    font-size: 17px;
    line-height: 1.47059;
    font-weight: 400;
    letter-spacing: -.022em;
    font-family: "SF Pro Text","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
    background-color: #fff;
    color: #333;
    font-style: normal;
  }
  #global{
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: 9999;
    display: block;
    margin: 0;
    width: 100%;
    height: 48px;
    max-height: 44px;
    align-items: flex-start;
  }
  .first-section{
    min-height: 400px;
    height: 100vh;
    position: relative;
    margin-left: auto;
    margin-right: auto;
  }

  .word-image{
    width: 984px;
    height: 134px;
    background-size: 984px 134px;
    background-repeat: no-repeat;
    margin-left: auto;
    margin-right: auto;
    z-index: -1;
    background-image: url(https://www.apple.com/v/macbook-air/c/images/overview/hero_air__c3y57bni07wy_large.png);
    animation: fade-title 3s 1;
  }
  .mac-image{
    top:-120px;
  }

  .headline-super{
    font-size: 64px;
    line-height: 1.0625;
    font-weight: 600;
    letter-spacing: -.009em;
    font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
  }
  .elevated-text{
    font-size: 24px;
    line-height: 1.33349;
    font-weight: 400;
    letter-spacing: .009em;
    font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
  }
  .section-container{
    text-align: center;
    margin-top: 52px;
    margin-bottom: 0;
  }
  @media only screen and (max-width: 1068px){
    .section-container {
        margin-top: 66px;
        margin-bottom: 115px;
    }
  }
  @media only screen and (max-width: 1032px){
    .word-image {
      width: 700px;
      height: 134px;
      background-size: 700px 134px;
    }
  }
  @media only screen and (max-width: 732px){
    .word-image {
      width: 400px;
      height: 51px;
      background-size: 400px 51px;
    }
    .mac-image{
      top:-50px;
    }
  .headline-super {
      font-size: 48px;
      line-height: 1.08365;
      font-weight: 600;
      letter-spacing: -.003em;
    }
  }
  @media only screen and (max-width: 432px){
    .word-image {
      width: 300px;
      height: 40px;
      background-size: 300px 40px;
    }
    .mac-image{
      top:-40px;
    }
  .headline-super {
      font-size: 42px;
    }
  }
  //ANIMATIONS
  .fade-in-anim{
    animation: fade-title 3s 1;
  }
  @keyframes fade-title{
    0%{opacity:0}
    to{opacity:1}
  }

  .resize-anim{
    animation: shrink 3s 1;
  }
  @keyframes shrink{
    0%{  transform: scale(1.3);}
    to{  transform: scale(1);}
  }

  .up-anim{
    animation: up-title 1.5s 1;
  }
  @keyframes up-title{
    0%{ transform:translateY(150px);
    opacity:0;}
    to{transform: translateY(0px);
    opacity: 1;}
  }

</style>
