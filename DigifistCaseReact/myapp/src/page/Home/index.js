import { Outlet } from "react-router-dom"

export default function index() {
  return (
    <div className="w-full flex">
      <Outlet/>
    </div>
  )
}
