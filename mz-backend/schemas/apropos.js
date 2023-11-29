export default{
    name:'apropos',
    title:'Apropos',
    type: 'document',
    fields:[
        {
            name:'apropos',
            title:'Apropos',
            type:'string'
        },
        {
            name:'description',
            title:'Description',
            type:'string'
        },
        {
            name:'imgUrl',
            title:'ImgUrl',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        
    ]
}