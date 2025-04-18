import React, { useEffect, useRef, useState } from 'react'
import { FaCheck } from 'react-icons/fa';
interface checkOpt {
    setSelected: (a: string) => string;
    val: string | any;
    select: any;
    idx: number;
}
const CheckBox: React.FC<checkOpt> = ({ val, idx, select, setSelected }) => {

    const selec = React.useRef<HTMLInputElement>(null);
    const [index, setIndex] = useState();
    useEffect(() => {
        setIndex(idx);

    }, [idx])
    const [show, isShow] = useState<boolean>(false);
    return (
        <div className="flex item-center justify-center mt-2 gap-2">
            <span onClick={() => {
                isShow(!show);
                if (show == false && idx == index) {
                    setSelected(prev => [...prev, val]);
                }
                else if (show == true && idx == index) {
                    select.splice(select.indexOf(val), 1);
                }







            }} className="checkbox border-1 border-black h-6 w-6 flex items-center justify-center rounded-sm">
                {show ? <FaCheck /> : ""}
            </span>
            <p ref={selec}>{val}</p>
        </div>
    )
}

export default CheckBox
