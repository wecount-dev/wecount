import { Routify, Router } from '../node_modules/@roxi/routify/lib/runtime/index.js'
import routes from './routes.default.js'

export const instance = new Routify({routes})
export { Router }
