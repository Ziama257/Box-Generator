import React, { useState } from  'react';
    
const BoxForm = (props) => {
    const{ boxColors, setBoxColors} = props;
    const [color, setColor] = useState("");


    const createBox = (e) => {
        e.preventDefault();
        setBoxColors([...boxColors, color]);
        setColor("");

    }
    return(
        <>
            <h1>BOX GENERATOR</h1>
            <h3 style={{fontStyle:"italic"}}>now with inverted color labels</h3>
            <form onSubmit={ createBox } className="form col-md-4 mx-auto">
                <div className='Form-group mt-3'>
                    {
                        color && color.length < 2 ? <p className='text-danger'>Color must be 2 or more characters.</p> : ""
                    }
                    <label htmlFor="" className='form-label'>Color:</label> 
                    <input type="text" name='color' className='form-control' value = {color} onChange={ (e) =>setColor(e.target.value)} />
                    <button className='btn btn-primary mt-3'>Add {color}  box</button>
                </div>
            </form>
            <div>{
        boxColors.map((boxColor, i)=>(
            <div key={i} style={{display:"inline-block", margin:"5px", height:"150px", width:"150px", backgroundColor: boxColor}}>
                <p style={{fontSize: "40px",color: boxColor, filter: "invert(1)"}}>{boxColor}</p>
            </div>
        ))
        }
        </div>
        </>
    );
};
export default BoxForm;