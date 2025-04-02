import sharedRoutes from './sharedRoutes'
import authRoutes from '../../auth/routes/routes'
import dashboardRoutes from '../../dashboard/routes/routes'
import todosRoutes from '../../todos/routes/routes'
import todosRTKRoutes from '../../todosRtk/routes/routes'
import sessionsRoutes from '../../Sessions/routes/routes'
import subjectsRoutes from '../../Subjects/routes/routes'
import libraryRoutes from "../../Library/routes/routes"
import offerRoutes from "../../Offers/routes/routes"
import walletRoutes from "../../Wallet/routes/routes"

const routes = [
  ...sharedRoutes,
  ...authRoutes,
  ...dashboardRoutes,
  ...todosRoutes,
  ...todosRTKRoutes,
  ...sessionsRoutes,
  ...subjectsRoutes,
  ...libraryRoutes,
  ...offerRoutes,
  ...walletRoutes,
]

export default routes
