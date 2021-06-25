import React, { useState } from 'react';
import Menu from './Menu';
import './context.css';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import IconButton from '@material-ui/core/IconButton';
import Box from './Box';



const Content = () => {
    const [inputvalue, setinputvalue] = useState({
        tytl: "",
        txt: ""
    });

    const [expnd, setexpnd] = useState({ display: 'none' });

    const [arraydata, setarraydata] = useState([]);

    // const [bin, setbin] = useState([]);
    // const [binarray, setbinarray] = useState([]);
//     const [bin, setbin] = useState([]);
//     const [binarray, setbinarray] = useState([]);


    const inputtext = (event) => {
        const value = event.target.value;
        const namme = event.target.name;

        setinputvalue((obbject) => {
            if (namme === 'tytl') {
                return {
                    tytl: value,
                    txt: obbject.txt
                }
            }
            else if (namme === 'txt') {
                return {
                    tytl: obbject.tytl,
                    txt: value
                }
            }
        })
    }

    const additem = () => {
        if (inputvalue.tytl === '' && inputvalue.txt === '') {
            return (alert("Note is Empty"));
        }
        setarraydata([...arraydata, inputvalue]);
        setinputvalue((oject) => {
            return {
                tytl: "",
                txt: ""
            }
        })
    }

    const smallsize = () => {
        setexpnd((dis) => {
            return {
                display: 'none'
            }
        });
        if (inputvalue.tytl === '' && inputvalue.txt === '') {
            return (null);
        }
        setarraydata([...arraydata, inputvalue]);
        setinputvalue((oject) => {
            return {
                tytl: "",
                txt: ""
            }
        })
    }
    const deletenote = (id) => {
        // setbin((binarray)=>{
        //     return arraydata.filter((arrayelmt, index)=>{
        //         return index === id;
        //     })
        // })
        // setbinarray([...binarray, bin]);

//         setbin((binarray)=>{
//             return arraydata.filter((arrayelmt, index)=>{
//                 return index === id;
//             })
//         })
//         setbinarray([...binarray, bin]);

        setarraydata((aray) => {
            return aray.filter((arrayelement, index) => {
                return index !== id;
            });
        });
    }

    const newarray = arraydata.map((cvalue, index) => {
        return (
            <>
                <Box key={index} id={index} tytll={cvalue.tytl} txtt={cvalue.txt} onselect={deletenote} />
            </>
        );
    })

    // const newbinarray = bin.map((cval, index) => {
    //     return (
    //         <>
    //             <Box key={index} id={index} tytll={cval.tytl} txtt={cval.txt}  />
    //         </>
    //     );
    // })





    const openn = () => {
        setexpnd((dis) => {
            return {
                display: 'block'
            }
        });
    }


    return (
        <>
            <div className="content">
                <Menu />
                <div className="content-1">
                    <div className="content-2">
                        <input type="text" name="tytl" style={expnd} placeholder="Title" onChange={inputtext} value={inputvalue.tytl} />
                        <TextareaAutosize name="txt" placeholder="Take a Note..." onClick={openn} onChange={inputtext} value={inputvalue.txt} />
                        <div style={expnd} className="content-button">
                            <IconButton onClick={additem}>Add</IconButton>
                            <IconButton onClick={smallsize} >Close</IconButton>
                        </div>

                    </div>
                    <div className="content-4">
                        {newarray}

                        {/* {newbinarray} */}

                    {/* {newbinarray} */}

                    </div>

                </div>
            </div>
        </>
    );
}

export default Content;
