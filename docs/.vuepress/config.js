module.exports = {
    title: 'Planificador de tareas de equipo multizona',
    //description: 'Planificador de tareas de equipo multizona',  //Esto se convertira en la metadescripción
    description: 'Proyecto fin de módulo',
    base: '/proyecto-daw-docs/', //Esto es porque meto la web en en subirectorio 'mis-apuntes' (https://javdome.github.io/mis-apuntes/)
    
    //Insertar favicon, lo siguiente aquivale a:
    //<link rel="icon" href="/favicon.ico"/>
    head: [
      ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    //Aunque creo que haciendo favicon: 'favicon.ico' tambien vale, pero lo de antes es mas versatil.

    themeConfig: {
      logo: '/Logo.png',
      
      /*
      //Enlaces zona superior
      nav: [
        { text: 'Portada', link: '/' },
        { text: 'Proyecto', link: '/proyecto/' },
      //  { text: 'Vuepress basico', link: '/tut_vuepress/' },
      //  { text: 'External', link: 'https://google.com' },
      ],
      */
      
      //sidebar: 'auto',
      /*
      sidebar: [
        ['/', 'Inicio'],
        ['/guide/', 'Guide']
      ]
      */
      sidebar: {
          '/proyecto/': [
              '',
              'Proyecto_02',
              'Proyecto_03',
              'Proyecto_04',
              'Proyecto_05',
              'Proyecto_06',
              'Proyecto_07',
              'Proyecto_08',
              'Proyecto_09',
              'Proyecto_10',
              'Proyecto_11'
          ]
      },
      displayAllHeaders: true, //Esto no se que hace
      sidebarDepth : 2,  //Subniveles que se meten en el sidebar
    }
}