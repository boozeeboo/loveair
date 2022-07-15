import * as React from 'react'
import { createRoot } from 'react-dom/client';
import mobxConfig from './storage/mobxConfig'
import './style.css';

import App from "./components/App";

mobxConfig();
const root = createRoot(document.getElementById('root'));

root.render(<App />)