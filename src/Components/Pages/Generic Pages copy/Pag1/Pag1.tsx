import { LayoutBigCard } from '../../../Generics/Layout/LayoutBigCard'
import { LayoutSmallCard } from '../../../Generics/Layout/LayoutSmallCard'
import styles from "./Style/Pag1.module.scss"
import imgPag5 from "../../../../assets/img5.jpg"

const Pag1 = () => {
  return (
    <>
    <div className={styles["main"]}>
    <LayoutBigCard>
      <img src={imgPag5}/>
    </LayoutBigCard>
    <LayoutSmallCard>
    <div className={styles["text-part"]}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices commodo leo, et volutpat tortor blandit ac. Morbi eleifend dolor vitae purus pellentesque fringilla. Proin at lobortis nulla. Proin ut vehicula eros. Duis ullamcorper malesuada libero, vitae faucibus neque varius at. Aliquam feugiat sem ut tellus mollis congue. Phasellus ut pretium ligula, ac malesuada quam.
    Ut in erat eu felis semper laoreet. Sed quis augue enim. Aliquam nibh libero, molestie ac ultricies quis, mattis sit amet erat. Nulla ultricies massa ac arcu imperdiet, nec pulvinar arcu gravida. Etiam gravida dignissim lectus sit amet efficitur. Sed at ullamcorper nunc, eget facilisis augue. Curabitur feugiat ultrices ligula nec vulputate. Maecenas sit amet bibendum augue. Suspendisse in ex et magna scelerisque fermentum a in massa. Nullam sed semper lectus, at dignissim turpis. Donec at sapien sit amet turpis scelerisque facilisis
    </div>
    </LayoutSmallCard>
    </div>
    </>
  )
}

export default Pag1