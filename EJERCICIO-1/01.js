const app = new Vue({
    el: '#app',
    data:{
        titulo:'hola mundo con Vue',
        frutas:[
            {nombre:'Pera', cantidad:10},
            {nombre:'Platano',cantidad:10},
            {nombre:'pera',cantidad:0}
        ],
        nuevaFruta: '',
        total:0
    },
    methods:{
        agregarFruta (){
            this.frutas.push({
               nombre: this.nuevaFruta,cantidad:0
            }) ;
            this.nuevaFruta = '';
        }
    },
    computed:{
       sumarFruta(){
          this.total = 0;
          for(fruta of this.frutas){
              this.total = this.total + fruta.cantidad;
          }
          return this.total; 
       }
    }
})