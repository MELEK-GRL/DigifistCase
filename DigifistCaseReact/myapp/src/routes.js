import HomeLayout from './page/Home/index'
import Home from './page/Home/Home'

const routes=[
    {
        path:'/',
        elemeny:<HomeLayout/>,
        children:[
            {
                index:true,
                element:<Home/>
            }
        ]
    }
]
export default routes