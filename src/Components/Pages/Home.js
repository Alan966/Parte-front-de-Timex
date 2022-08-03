import PartTwoTimex from "../Molecules/PartTwoTimex"
import ToMonWithLove from "../Molecules/ToMomWithLove"
import WordEcology from "../Molecules/Word_Ecology"
import RelojOneHome from "../Organisms/RelojOneHome"
import SliderShowPage from "../Organisms/SliderShowPage" 
import ContendRelojesHome from "../Organisms/ContendRelojesHome"
import ContendImg_Parrafo from "../Molecules/ContendImg_Parrafo"
import images from "../Templates/images"
import RelojesTwoHome from "../Organisms/RelojesTwoHome"
import SectionIMg from "../Atoms/section_img"
import SectionImages from "../Organisms/Section_Images"
import ContendPieTimex from "../Organisms/ContendPieTimex"
import Modal from "../Atoms/modal"
import { BACKEND } from "../Atoms/backend"

const Home = () => {
    return(
        <>
        <Modal/>
        <section>
            <SliderShowPage />
            <ToMonWithLove />
            <WordEcology />
            <PartTwoTimex 
            url={`${BACKEND}/home/all`}
            />
            <ContendRelojesHome 
                id={1}
                children={<RelojOneHome 
                    url={`${BACKEND}/relojesTimexOne/all`}
                    id={1}
                />}
            />
            <ContendImg_Parrafo 
            numero={3}
            title={"RETRO AND REFINED"}
            url={`${BACKEND}/home/all`}
            parrafo={"Our Q Timex watches get a new feature for spring. You can now wear your iconic Q Timex in a black synthetic rubber strap.First released in the 1970s our original Q Timex gave the people a modern watch with quartz technology"}
            /> 
            <RelojesTwoHome 
            url={`${BACKEND}/home/all`}
            />
            <SectionImages  
            />
            <SectionIMg 
            img={images.celebritiImg} 
            img2={images.celebriti}
            title={'CELEBRATING 50 YEARS OF QUARTZ'}
            />
            <ContendPieTimex />
        </section>
        </>
    )
}
export default Home