import CustomizedMenus, { Boyfashion ,Girlfashion , FootWear ,Toys, Diapering, Gear, Bathing, Feeding, Nursery, Moms, Health, Boutiques, Club, Carter } from "./First"
import { Div } from "./Style";

export const Head = () => {

  return <>
  <Div className="flex gap13 pad mt8 mb8 " >
<CustomizedMenus />
<Boyfashion  />
<Girlfashion />
<FootWear />
<Toys />
<Diapering />
<Gear />
<Feeding />
<Bathing />
<Nursery />
<Moms />
<Health />
<Boutiques />
<Club />
<Carter />
</Div>

    </>
}