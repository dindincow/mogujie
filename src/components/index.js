import { Layout, Header, Aside, Main, Footer } from './layout'
import Col from 'vant/lib/col'
import 'vant/lib/col/index.css'
import Row from 'vant/lib/row'
import 'vant/lib/row/index.css'

const components = {
  CRow: Row,
  CCol: Col,
  Layout,
  Header,
  Aside,
  Main,
  Footer
}

// 註冊全局組件,編譯後
// Vue.component(CRow,CRow)
// Vue.component(CCol,CCol)
const install = (app) => {
  Object.keys(components).forEach(key => {
    if (key === 'CRow' || key === 'CCol') {
      app.component(key, components[key])
    } else {
      app.component(components[key].name, components[key])
    }
  })
}

const Mui = {
  install
}
export default Mui
