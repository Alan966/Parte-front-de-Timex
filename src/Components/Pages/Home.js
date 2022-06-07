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
import PieTimex from "../Molecules/PieTimex"
import Pagostimex from "../Molecules/Pagostimex"
import SectionImages from "../Organisms/Section_Images"

const Home = () => {
    return(
        <section>
            <SliderShowPage 
            _id={1}
            />
            <ToMonWithLove />
            <WordEcology />
            <PartTwoTimex />
            <ContendRelojesHome 
                children={<RelojOneHome />}
            />
            <ContendImg_Parrafo 
            numero={3}
            title={"RETRO AND REFINED"}
            parrafo={"Our Q Timex watches get a new feature for spring. You can now wear your iconic Q Timex in a black synthetic rubber strap.First released in the 1970s our original Q Timex gave the people a modern watch with quartz technology"}
            /> 
            <RelojesTwoHome 
            url={'http://localhost:5000/home/all'}
            />
            <SectionImages 
            url={"http://localhost:5000/home/all"}
            />
            <SectionIMg 
            img={images.celibriti} 
            title={'CELEBRATING 50 YEARS OF QUARTZ'}
            />
            <PieTimex />
            <Pagostimex />
        </section>
    )
}
export default Home