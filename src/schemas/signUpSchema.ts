import {z} from 'zod'

export const usernameValidation = z .string()
                                    .min(6, "Username must be of atleast 6 characters")
                                    .max(20, "Username must nor exceed 20 characters")
                                    .regex(/^[a-zA-Z0-9_]+$/, "Username must contain a special character")

export const signUpSchema = z.object({
    username : usernameValidation,
    email : z.string().email({message: 'Invalid Email address'}),
    password : z. string()
                .min(6,{ message : "Password must be of atleast 6 characters"})
                .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, {message : "Invalid email"})
    
})