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
            title={"ANTICIPATE ADVENTURE"} 
            img={images.imgHome} 
            parrafo={"Expedition goes the distance when you take it on your next adventure.This sturdy watch is built witch a 41mm stainless-steel case and is water resistant to 100 meters"}
            /> 
            <RelojesTwoHome 
            url={'http://localhost:5000/relojesTimexTwo/all'}
            _id={0o1}
            />
             <ContendImg_Parrafo 
            title={"TAKE THE NEXT STEP"} 
            img={images.imgHomeTwo} 
            parrafo={"Guided by our commitment to preserving Earth's wild spaces, our sustainable watch collections prioritize eco-friendly practices and product longevity to help build a better planet."}
            treinta={'treinta'}
            parrafoClass={'parrafoClass'}
            logo={images.wordIMg}
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