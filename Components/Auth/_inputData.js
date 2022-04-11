export const inputData = {
    email: {
        name: "username",
        type: "email",
        label: "Email",
        placeholder: "name@example.com",
        keyboardType: "email-address",
        validation: { pattern: {message: "Must be a valid email", value: /^\S+@\S+$/i} }
    },
    reset_email: {
        name: "username",
        type: "text",
        label: "Reset email",
        disabled: "disabled",
        validation: { pattern: {message: "Must be a valid email", value: /^\S+@\S+$/i} }
    },
    reset_token: {
        name: "key",
        type: "text",
        label: "Key",
        disabled: "disabled",
        validation: {}
    },
    password: {
        name: "password",
        type: "password",
        label: "Password",
        placeholder: "Password",
        keyboardType: "default",
        secureTextEntry: true,
        validation: { minLength: {message: "Must be at least 8 characters", value: 8} }
    },
    password_confirm: {
        name: "password_confirm",
        type: "password",
        label: "Confirm password",
        placeholder: "Confirm password",
        keyboardType: "default",
        secureTextEntry: true,
        validation: { minLength: {message: "Must be at least 8 characters", value: 8} }
    }
}