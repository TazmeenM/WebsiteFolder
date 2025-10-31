import jewelry from "../../../data/jewelryInformation.json"
import {useParams} from "react-router-dom"
import PageLayout from  "./PageLayout"

interface JewelryProps{
    id: string
    name: string;
    description: string;
    price: number;
    images: {source: string, alt: string}[]
}

const JewelryPageCreator = () => {
    const {id} = useParams<{id:string}>();
    const jewelryInformation: JewelryProps[] = jewelry;
    const selectedJewelry = jewelryInformation.find((item) => item.id === id);
    if (!selectedJewelry) {
        return <div>Jewelry asked for does not exist</div>;
    }

    return(
        <PageLayout 
            images = {selectedJewelry.images.map(image => ({
                imageSource: image.source,
                imageAlt: image.alt
            }))}
            productName={selectedJewelry.name}
            productDescription={selectedJewelry.description}
        />
    )
}

export default JewelryPageCreator;