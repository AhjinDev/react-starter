import { useRecoilState } from "recoil";
import { nameState } from "../../atoms/name";

export default function Input() {
    const [name, setName] = useRecoilState(nameState);

    let handleChangeInput = (e: any) => {
        setName(e.target.value);
    };

    return (
        <input 
            type="text"
            placeholder="Enter a string"
            onChange={handleChangeInput}
            value={name}
            style={{color: '#000000'}}
        />
    )
}