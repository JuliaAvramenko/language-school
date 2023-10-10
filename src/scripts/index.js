import styles from "../pages/index.css";
import { General } from "./general";
import { Modal } from "./modal";
import { TeacherProfile } from "./teacher-profile";
import { Teachers } from "./teachers";
import { Script } from "./script";
//import { Validation } from "./validation";
import { Slider } from "./slider";
import { config } from "./config";

const teachersNames = config.teachers
const BUCKET_URI = config.bucketUri


async function getTeacher(name) {
    const url = `${BUCKET_URI}/teachers/data/${name}.json`;
    const data = fetch(url).then(response => response.json())

    return await data
}

const teachers = await Promise.all(
    teachersNames.map((name) => getTeacher(name))
)

Teachers.showCards(teachers)
Slider.init(teachers)
