import React from 'react'
import { useForm } from 'react-hook-form'

import { nameRegex, phoneRegex } from 'constants/validationRegex'

const Input = React.forwardRef(({ label, name, defaultValue, error, errorMessage }, ref) => <><div className="w-100-per display-flex justify-between mb-10">
    <label className="fw-500 font-size-16">{label}</label>
    <input
        className={`form-input ${error ? "error" : ""}`}
        name={name}
        placeholder={label}
        defaultValue={defaultValue}
        ref={ref}
    />
</div>
    {error ? <span className="error-message">{errorMessage}</span> : null}
</>
)

const UserForm = ({ onSubmit, onCancel, user = {} }) => {

    const { register, handleSubmit, errors } = useForm()

    console.log("UserForm ", errors)

    return <form onSubmit={handleSubmit(onSubmit)}>
        <Input
            label="First Name"
            name="firstName"
            defaultValue={user.firstName ? user.firstName : ""}
            ref={register({
                required: true,
                pattern: nameRegex,
            })}
            error={errors.firstName ? true : false}
            errorMessage={errors.firstName ? errors.firstName.type === "required" ? "First Name is required" : "First Name is invalid" : ""}
        />
        <Input
            label="Last Name"
            name="lastName"
            defaultValue={user.lastName ? user.lastName : ""}
            ref={register({
                required: true,
                pattern: nameRegex,
            })}
            error={errors.lastName ? true : false}
            errorMessage={errors.lastName ? errors.lastName.type === "required" ? "Last Name is required" : "Last Name is invalid" : ""}
        />
        <Input
            label="Phone Number"
            name="phoneNumber"
            defaultValue={user.phoneNumber ? user.phoneNumber : ""}
            ref={register({
                required: true,
                pattern: phoneRegex,
            })}
            error={errors.phoneNumber ? true : false}
            errorMessage={errors.phoneNumber ? errors.phoneNumber.type === "required" ? "Phone Number is required" : "Phone Number is invalid" : ""}
        />
        <div className="display-flex w-100-per justify-between mt-30">
            <input type="button" className="button secondary" onClick={onCancel} value="Cancel" />
            <input type="submit" className="button primary" value="Submit" />
        </div>
    </form>
}

export default UserForm