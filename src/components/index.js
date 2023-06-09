import {Layout, Header, Aside, Main, Footer} from './layout';
import Col from 'vant/lib/col';
import 'vant/lib/col/index.css';
import Row from 'vant/lib/row';
import 'vant/lib/row/index.css';
import BoxCenter from './box-center';
import SingleCenter from './single-center';
import BoxSkin from './box-skin';
import Launch from './launch';
import FootNav from './foot-nav';
import Magazine from './magazine';

const components = {
  Layout,
  Header,
  Aside,
  Main,
  Footer,
  CRow: Row,
  CCol: Col,
  BoxCenter,
  SingleCenter,
  BoxSkin,
  Launch,
  FootNav,
  Magazine
}

const install = (app) => {
  Object.keys(components).forEach(key => {
    if(key === 'CRow' || key === 'CCol') {
      app.component(key, components[key])
    }else{
      console.log('111',components[key]['name'])
      console.log('222',components[key])
      app.component(components[key]['name'], components[key])
    }
  });
}

const Mui = {
  install
}

export default Mui