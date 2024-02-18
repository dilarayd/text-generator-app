import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchParas, setParasNumber, setFormat } from '../redux/textSlice';

function Paragraphs() {
    const data = useSelector((state) => state.paras.data)
    const format = useSelector((state) => state.paras.format)
    const parasNumber = useSelector((state) => state.paras.parasNumber)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchParas(parasNumber, format))
    }, [parasNumber, format, dispatch])

    const handleFormatChange = (e) => {
        dispatch(setFormat(e.target.value))
    };

    const handleParasNumberChange = (e) => {
        dispatch(setParasNumber(parseInt(e.target.value)))
    }


    return (
        <>
            <form className='form-inline'>
                <div className='form-group'>
                    <label>Paragraphs</label>
                    <div className='number'>
                        <input type='number' value={parasNumber} onChange={handleParasNumberChange} />
                    </div>
                </div>
                <div className='form-group'>
                    <label>Include HTML</label>
                    <div className='select'>
                        <select className='form-control' onChange={handleFormatChange}>
                            <option value={"text"}>No</option>
                            <option value={"html"}>Yes</option>
                        </select>
                    </div>
                </div>
            </form>
            <p className='jumbotron'>{data}</p>
        </>
    )
}

export default Paragraphs