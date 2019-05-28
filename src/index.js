import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
// import { CookiesProvider } from "react-cookie";
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from 'app/serviceWorker'

import 'bootstrap/scss/bootstrap.scss'
import 'assets/scss/fonts/artrogeno-fonts.scss'
import 'app/utils/i18n/i18n'
import Loader from 'app/components/UI/Loader/Loader'
import App from 'app/App'

ReactDOM.render(
  // <CookiesProvider>
  <BrowserRouter>
    <Suspense fallback={<Loader />}>
      <App />
    </Suspense>
  </BrowserRouter>,
  // </CookiesProvider>,
  document.getElementById('artrogeno')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
