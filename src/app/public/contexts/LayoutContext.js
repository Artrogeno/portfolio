import React from 'react'

export const layout = {
  config: {
    appTitle: 'Artrogeno',
    sidebar: true,
    match: {},
    location: {},
    history: {}
  }
}

export const LayoutContext = React.createContext({
  config: layout.config,
  toggleSideBar: () => {}
})
