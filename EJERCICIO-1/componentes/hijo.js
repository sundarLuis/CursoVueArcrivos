Vue.component('hijo',{
    template: //html
    ` <div class="py-5 bg-success p-3">
        <h4>Componente hijo: {{ numero }}</h4>
    </div>
    `,
    props:['numero']
})