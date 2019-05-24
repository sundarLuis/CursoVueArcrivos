const app = new Vue({
    el: '#app',
    data:{
        titulo:'hola mundo con Vue',
        frutas:[
            {nombre:'Pera', cantidad:10},
            {nombre:'Platano',cantidad:10},
            {nombre:'pera',cantidad:0}
        ],
        nuevaFruta: ''
    },
    methods:{
        agregarFruta (){
            this.frutas.push({
               nombre: this.nuevaFruta,cantidad:0
            })
        }
    }
})