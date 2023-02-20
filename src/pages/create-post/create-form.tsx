import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { db, auth } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";


interface CreateFormData {
    title: string,
    fullName: string,
    description: string,
}


const CreateForm = () => {

    const [user] = useAuthState(auth)
    const navigate = useNavigate();

    const schema = yup.object().shape({
        title: yup.string().required("This field Cannot Be Empty"),
        fullName: yup.string().required("This Field Cannot Be Empty"),
        description: yup.string().required("This Field Cannot Be Empty"),
    
    })

    const {register, handleSubmit, formState: {errors}} = useForm<CreateFormData>({
        resolver: yupResolver(schema)
    });

    const postRef = collection(db, "Profile")

    const onCreatePost =async (data: CreateFormData) => {
        await addDoc(postRef, {
            ...data,
            fullName: user?.displayName,
            userID: user?.uid
        });
        navigate("/");     
    }

    return (  
        <div className="create-post" >
            <form onSubmit={handleSubmit(onCreatePost)} >
            
            <input placeholder="title" {...register("title")}/>
            <p style={{color: 'red'}}>{ errors.title?.message }</p>
            <input placeholder="Fullname" {...register("fullName")}/>
            <textarea placeholder="description" {...register("description")}/>
            <input type= "submit" className="submitForm" />
            </form>
        </div>
    );
}
 
export default CreateForm;