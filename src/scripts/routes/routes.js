import AllResto from '../views/pages/all_resto'
import DetailResto from '../views/pages/detail_resto'
import FavResto from '../views/pages/fav_resto'

const routes = {
  '/': AllResto, // default page
  '/home': AllResto,
  '/favorite': FavResto,
  '/detail/:id': DetailResto
}

export default routes
