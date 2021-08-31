export default interface IShip {
  id: string
  name: string
  image: string
  model: string | null
  status: string
  year_built: number
  home_port? : string
  successful_landings? : string
  type? : string
}
