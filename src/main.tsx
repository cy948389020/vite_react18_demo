import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import App from './App'
import zhCN from 'antd/es/locale/zh_CN'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <ConfigProvider locale={zhCN}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ConfigProvider>
  </BrowserRouter>
)
