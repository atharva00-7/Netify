import React from 'react'

const Dropdown = ({ title, options, func }) => {
    return (
        <div>
            <div className='select'>
                <select onChange={func} name="format" id="format" value={title}>
                    <option value={title} disabled>
                        {title}
                    </option>
                    {options.map((item, index) => (
                        <option key={index} value={item}>{item.toUpperCase()}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default Dropdown
