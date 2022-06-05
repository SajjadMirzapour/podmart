import Levels from "./Home/Levels/Levels"
import Slider from "./Home/Slider/Slider"
import Atracctive from "./Home/Atracctive/Atracctive"
import Manager from "./Home/Manager/Manager"
import Suitable from "./Home/Suitable/Suitable"
import Connection from "./Home/Connection/Connection"
import Questions from "./Home/Questions/Questions"

export default function Home() {
    return (
        <div>
            <Levels />
            <Slider />
            <Atracctive />
            <Manager />
            <Suitable />
            <Connection />
            <Questions />
        </div>
    )
}