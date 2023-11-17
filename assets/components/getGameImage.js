import { Image } from "react-native";
import BaseImageURI from "../services/baseImageURI";

function GetGameImage({game}) {
    return (
        <Image
            className="w-full h-full"
            source={
                { uri: BaseImageURI() + game.data.name.replace(/ /g, '%20') + "." + game.data.ext + "?alt=media" }
            } />
    );
}

export default GetGameImage;