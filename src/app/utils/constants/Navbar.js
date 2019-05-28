export default {
  NAV: {
    PUBLIC: {
      config: {
        navbarColor: 'light',
        navbarLight: true,
        navbarExpand: 'md',
        navClass: 'ml-auto',
        fixed: 'top',
        scroll: {
          _top: 200,
          _class: 'navbar-transparent'
        }
      },
      brand: {
        title: 'Artrogeno',
        tag: 'top'
      },
      list: [
        { title: 'home', link: '/', tag: 'top' },
        { title: 'about', link: '/', tag: 'about' },
        { title: 'skills', link: '/', tag: 'skills' },
        { title: 'lab', link: '/lab', tag: 'top' },
        { title: 'profile', link: '/profile', tag: 'top' }
      ]
    }
  }
}

