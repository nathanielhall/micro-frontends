
import { registerApplication, start } from 'single-spa'

registerApplication(
  'app1',
  () => import('app1/App1'),
  (location) => location.pathname.startsWith('/')
)
registerApplication(
  'app2',
  () => import('app2/App2'),
  (location) => location.pathname.startsWith('/')
)

start()
