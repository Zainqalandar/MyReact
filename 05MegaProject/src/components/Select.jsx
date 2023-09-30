import React, { useId } from 'react'

function Select({
    lable,
    className = '',
    options,
    ...props

}, ref) {
    const id = useId()
    return (
        <div className=' w-full'>
            {lable && <label htmlFor={id}></label>}
            <section
                {...props}
                id={id}
                ref={ref}
                className={` px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            >
                {options?.map(() => (
                    <option key={options} value={options}>
                        {options}
                    </option>
                ))}
            </section>

        </div>
    )
}

export default Select