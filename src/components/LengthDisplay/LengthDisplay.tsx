import { useRecoilValue } from "recoil";
import { lengthState  } from "../../selectors/name";
 
export default function LengthDisplay() {
    const length = useRecoilValue(lengthState);

    return (
        <h3 className="text-3xl font-bold">{length}</h3>
    )
}