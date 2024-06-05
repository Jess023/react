import logo from './logo.svg';
import './App.css';
// import React, { useState } from 'react';
// import { createContext } from 'react';
// import {MyText} from './myText';

// export const AppContext = createContext();
// export const ColorContext = createContext();

// function App(){
//   const [username, setUsername] = useState("誰?");
//   const [color, setColor] = useState("grey");
//   return (
//     <div className='App'>
//       <ColorContext.Provider value={color}>
//         <AppContext.Provider value={username}>
//           <MyText/>
//         </AppContext.Provider>
//       </ColorContext.Provider>
//       <button onClick={e => {setUsername("C111156111"); setColor("brown")}}>學號</button>
//       <button onClick={e => {setUsername("紀呈澤"); setColor("yellow")}}>姓名</button>
//     </div>
//   );
// }

// import React, {createContext, useState, useContext} from 'react';
// import {MyText} from './myText';

// export const AppContext = createContext();
// export const ColorContext = createContext();
// export const tFontContext = createContext();

// function App() {
//   const [username, setUsername] = useState("Who?");
//   const [color, setColor] = useState("grey");
//   const [tFont, settFont] = useState("72px");
//   return (
//     <div className="App">
//       <ColorContext.Provider value={color}>
//         <AppContext.Provider value={username}>
//           <tFontContext.Provider value={tFont}>
//             <MyText />
//           </tFontContext.Provider>
//         </AppContext.Provider>
//       </ColorContext.Provider>

//       <button onClick={ e => {setColor("red"); setUsername("Alice"); settFont("48px");}}>Alice</button>
//       <button onClick={ e => {setColor("blue"); setUsername("Leon"); settFont("36px");}}>Leon</button>
//     </div>
//   );
// }

// import React, { useState } from 'react';
// import { useEffect } from 'react';

// function MyComponent() {
//     console.log("creating function component");
//     const [count1, setCount] = useState(0);
//     const [count2, setCount2] = useState(0);
//     const [color, setColor] = useState("white");

//     useEffect(() => {
//         console.log("useEffect1 excuted");
//     }, [count1]);

//     useEffect(() => {
//         console.log("useEffect1 excuted");
//     }, [count2]);

//     const addCount = (() => {
//         console.log("button1 be clicked.");
//         setCount(count1 + 1);
//         setColor("orange");
//     });

//     const addCount2 = (() => {
//         console.log("button1 be clicked.");
//         setCount2(count2 + 1);
//         setColor("purple");
//     });

//     return (
//         <>
//             {console.log("rendering")}
//             <h1 style={{ color: color }}>count1: {count1}</h1>
//             <h1 style={{ color: color }}>count2: {count2}</h1>
//             <button onClick={addCount}>addCount1</button>
//             <button onClick={addCount2}>addCount2</button>
//         </>
//     );
// }

// export function Myimg() {
//     return (
//         <img src="./1.jpg" width="40%"></img>
//     );
// }

// function App() {
//     return (
//         <div className='App'>
//             <MyComponent />
//             <Myimg />
//         </div>
//     );
// }


// import React, {createContext, useState, useContext} from 'react';
// import {MyText} from './myText'

// export const AppContext = createContext();
// export const ColorContext = createContext();
// export const CountContext = createContext();

// function App(){
//     let name1 = "YW";
//     let name2 = "Liao";
//     const [username, setUsername] = useState(name1);
//     const [color, setColor] = useState("red");
//     const [count, setCount] = useState(0);

//     const addCount = (() => {
//         setCount(count + 1);
//     });

//     return (
//         <div className='App'>
//             <ColorContext.Provider value={color}>
//                 <AppContext.Provider value={username}>
//                     <CountContext.Provider value={count}>
//                         <MyText />
//                     </CountContext.Provider>
//                 </AppContext.Provider>
//             </ColorContext.Provider>

//             <button onClick={e => {setUsername(name1); setColor("blue"); addCount();}}>YW</button>
//             <button onClick={e => {setUsername(name2); setColor("green"); addCount();}}>Liao</button>
//         </div>
//     )
// }


// import React, {useState} from 'react';
// import {useEffect} from 'react';

// function MyComponent () {
//     console.log("creating function component");

//     const [count1, setCount] = useState(0);
//     const [count2, setCount2] = useState(0);
//     const [count3, setCount3] = useState(0);

//     useEffect(() => {
//         console.log("useEffect1 excuted");
//     }, [count1]);

//     useEffect(() => {
//         console.log("useEffect1 excuted");
//     }, [count2]);

//     useEffect(() => {
//         console.log("useEffect1 excuted");
//     }, [count3]);

//     const addCount = (() => {
//         console.log("button1 be clicked");
//         setCount(count1 + 1);
//     });

//     const addCount2 = (() => {
//         console.log("button1 be clicked");
//         setCount2(count2 + 1);
//     });

//     const addCount3 = (() => {
//         console.log("button1 be clicked");
//         setCount3(count3 + 1);
//     });

//     return(
//         <>
//             {console.log("rendering")}
//             <h1>count1: {count1}</h1>
//             <h1>count2: {count2}</h1>
//             <h1>count3: {count3}</h1>
//             <button onClick={addCount}>addCount1</button>
//             <button onClick={addCount2}>addCount2</button>
//             <button onClick={addCount3}>addCount3</button>
//         </>
//     );
// }

// function App() {
//     return (
//         <div className='App'>
//             <MyComponent />
//         </div>
//     );
// }



// import React, {useState} from 'react';
// import { useMemo } from 'react';

// function MyComponent(){
//     const [state, setState] = useState(0);
//     const [state2, setState2] = useState(0);
//     const memoizeValue = useMemo(() => {
//         return Math.random();
//     }, [state]);

//     return (
//         <>
//             {console.log("rendering")}
//             <h1>Value = {memoizeValue} </h1>
//             <button onClick={() => { setState(state + 1) }}>Change state</button>
//             <button onClick={() => { setState2(state2 + 1) }}>Don't change state</button>
//         </>
//     );
// }

// function App() {
//     return (
//         <div className='App'>
//             <MyComponent />
//         </div>
//     );
// }

// import {Counter} from './Counter';
// import {Counter2} from './Counter2';
// import {MyText2} from './MyText2.js';
// import {Cal} from './X.js';

// function App(){
//     return (
//         <div className='App'>
//             <Counter />
//             <br></br>
//             <Counter2 />
//             <br></br>
//             <MyText2 />
//             <br></br>
//             <Cal />
//         </div>
//     );
// }

// import {Cal} from './X.js';

// function App(){
//     return (
//         <div className='App'>
//             <Cal />
//         </div>
//     );
// }

// export default App;

// import React from 'react';
// import { Button, Flex } from 'antd';

// const App: React.FC = () => (
//   <Flex vertical gap="small" style={{ width: '100%' }}>
//     <Button type="primary" block>
//       Primary
//     </Button>
//     <Button block>Default</Button>
//     <Button type="dashed" block>
//       Dashed
//     </Button>
//     <Button disabled block>
//       disabled
//     </Button>
//     <Button type="text" block>
//       text
//     </Button>
//     <Button type="link" block>
//       Link
//     </Button>
//   </Flex>
// );



// import React, {useState} from 'react';
// import {Col, Row} from 'antd';

// function App(){
//   return(
//     <div className='App'>
//       <Row>
//         <Col style={{borderStyle:'double'}} span={3}>col-3</Col>
//         <Col style={{borderStyle:'double'}} span={12}>col-12</Col>
//         <Col style={{borderStyle:'solid'}} span={9}>col-9</Col>
//       </Row>
//     </div>
//   )
// }



// import React from 'react';
// import {Watermark} from 'antd';

// const App:React.FC = () => (
//   <Watermark content="Cheng-Tse">
//     <div style={{height: 500}} />
//   </Watermark>
// )



// import './App.css';
// import {Layout} from 'antd';

// const { Header, Footer, Sider, Content } = Layout;

// const headerStyle = {
//   textAlign: 'center',
//   color: '#fff',
//   height: 64,
//   paddingInline: '64px',
//   background: '#7dbcea',
// };
// const contentStyle = {
//   extAlign: 'center',
//   minHeight: 120,
//   lineHeight: '120px',
//   color: '#fff',
//   background: '#108ee9',
// };
// const siderStyle = {
//   extAlign: 'center',
//   lineHeight: '120px',
//   color: '#fff',
//   background: '#3ba0e9',
// };
// const footerStyle = {
//   extAlign: 'center',
//   color: '#fff',
//   background: '#7dbcea',
// };

// function App(){
//   return (
//     <Layout>
//       <Sider style={siderStyle}>Sider</Sider>
//       <Layout>
//         <Header style={headerStyle}>Header</Header>
//         <Content style={contentStyle}>Content</Content>
//         <Footer style={footerStyle}>Footer</Footer>
//       </Layout>
//     </Layout>
//   )
// }



// import React from 'react';
// import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
// import { Breadcrumb, Layout, Menu, theme } from 'antd';
// const { Header, Content, Footer, Sider } = Layout;
// const items1 = ['1', '2', '3'].map((key) => ({
//   key,
//   label: `nav ${key}`,
// }));
// const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
//   const key = String(index + 1);
//   return {
//     key: `sub${key}`,
//     icon: React.createElement(icon),
//     label: `subnav ${key}`,
//     children: new Array(4).fill(null).map((_, j) => {
//       const subKey = index * 4 + j + 1;
//       return {
//         key: subKey,
//         label: `option${subKey}`,
//       };
//     }),
//   };
// });
// const App = () => {
//   const {
//     token: { colorBgContainer, borderRadiusLG },
//   } = theme.useToken();
//   return (
//     <Layout>
//       <Header
//         style={{
//           display: 'flex',
//           alignItems: 'center',
//         }}
//       >
//         <div className="demo-logo" />
//         <Menu
//           theme="dark"
//           mode="horizontal"
//           defaultSelectedKeys={['2']}
//           items={items1}
//           style={{
//             flex: 1,
//             minWidth: 0,
//           }}
//         />
//       </Header>
//       <Content
//         style={{
//           padding: '0 48px',
//         }}
//       >
//         <Breadcrumb
//           style={{
//             margin: '16px 0',
//           }}
//         >
//           <Breadcrumb.Item>Home</Breadcrumb.Item>
//           <Breadcrumb.Item>List</Breadcrumb.Item>
//           <Breadcrumb.Item>App</Breadcrumb.Item>
//         </Breadcrumb>
//         <Layout
//           style={{
//             padding: '24px 0',
//             background: colorBgContainer,
//             borderRadius: borderRadiusLG,
//           }}
//         >
//           <Sider
//             style={{
//               background: colorBgContainer,
//             }}
//             width={200}
//           >
//             <Menu
//               mode="inline"
//               defaultSelectedKeys={['1']}
//               defaultOpenKeys={['sub1']}
//               style={{
//                 height: '100%',
//               }}
//               items={items2}
//             />
//           </Sider>
//           <Content
//             style={{
//               padding: '0 24px',
//               minHeight: 280,
//             }}
//           >
//             Content
//           </Content>
//         </Layout>
//       </Content>
//       <Footer
//         style={{
//           textAlign: 'center',
//         }}
//       >
//         Chi-Cheng-Tse
//       </Footer>
//     </Layout>
//   );
// };




// import { useTranslation } from 'react-i18next';

// function App(){
//   const {t, i18n} = useTranslation();

//   return(
//     <div className='App'>
//       <div>
//         <h1>{t("hello")}</h1>
//         <h2>{t("link")}</h2>
//       </div>
//       <div>
//         <button onClick={() => i18n.changeLanguage("en")} type='button'>
//           英文
//         </button>
//         <button onClick={() => i18n.changeLanguage("tw")} type='button'>
//           中文
//         </button>
//         <button onClick={() => i18n.changeLanguage("kr")} type='button'>
//           韓文
//         </button>
//       </div>
//     </div>
//   )
// }





// import {QRCodeSVG} from 'qrcode.react';
// import { QRCodeCanvas } from 'qrcode.react';

// function App(){
//   return(
//     <div className='App'>
//       <h2>SVG QRcode</h2>
//       <QRCodeSVG
//         values={'https://github.com/'}
//         size={128}
//         bgColor={'#fffff'}
//         fgColor={'#828f1e'}
//         level={'Q'}
//         includeMargin={false}
//         imageSettings={{
//           src: "https://th.bing.com/th/id/OIP.1jYv5ATaoXUudvPc88r2pgFZC1?rs=1&pid=ImgDetMain",
//           x: 10,
//           y: 70,
//           height: 50,
//           width:100,
//           excavate: true,
//         }} />
//     </div>
//   )
// }



// import Player1 from './Player1.js';

// function App(){
//   return(
//     <div>
//       <Player1 />
//     </div>    
//   )
// }


// import SimpleForm from './asimpleform';

// function App(){
//   return(
//     <div>
//       <SimpleForm />
//     </div>
//   )
// }

// import FormikFormWithValidate from './formikFormWithValidate.js';

// function App(){
//   return(
//     <div>
//       <FormikFormWithValidate />
//     </div>
//   )
// }

import FormikFormWithYUP from './formikFormWithYUP.js';

function App(){
  return(
    <div>
      <FormikFormWithYUP />
    </div>
  )
}

export default App;