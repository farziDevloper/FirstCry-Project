import CustomizedMenus, { Boyfashion ,Girlfashion , FootWear ,Toys, Diapering, Gear, Bathing, Feeding, Nursery, Moms, Health, Boutiques, Club, Carter } from "./First"

export const Head = () => {
    return <>
    <div style={{display: 'flex', flexDirection: 'row', gap:"12px", padding: '10px 55px', margin: '0px', backgroundColor: '#ffd91c',maxHeight:"40px" , minHeight: '50px' , zIndex:"10"}}>
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
</div>
    </>
}