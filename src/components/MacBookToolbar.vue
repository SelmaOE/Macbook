<template>
  <v-toolbar id="macToolbar" flat light>
    <v-toolbar-title class="headline">
      <span>MacBook Air</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-flex class="btn-container" hidden-sm-and-down>
      <v-btn  flat  >
        <span class="mr-2">Descripción</span>
      </v-btn>
      <v-btn  flat  >
        <span class="mr-2">macOS</span>
      </v-btn>
      <v-btn  flat  >
        <span class="mr-2">Especificaciones</span>
      </v-btn>
    </v-flex>
    <v-flex hidden-md-and-up>
      <v-menu offset-y bottom left class="dropdown">
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>arrow_drop_down</v-icon>
          </v-btn>
        </template>
        <v-list>
              <v-list-tile
                v-for="(item, i) in items"
                :key="i"
                @click=""
              >
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
      </v-menu>
    </v-flex>

    <v-btn dark round color="#0070c9">
      <span class="mr-2">Comprar</span>
    </v-btn>
  </v-toolbar>

</template>

<style media="screen">
  #macToolbar{
    position:sticky;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 9997;
    margin-top: 44px!important;
    margin-bottom: -96px;
  }
  .btn-container{
    text-align: end;
  }
  .dropdown{
    background-color: #f1f1f1!important;
    left: 0px;
    top: 230px;
  }
</style>
