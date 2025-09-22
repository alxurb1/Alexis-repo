import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function FormikPage() {
	const validationSchema = Yup.object({
		name: Yup.string().required("El nombre es obligatorio"),
		email: Yup.string()
			.email("Email invalido")
			.required("El email es obligatorio"),
	});
	return (
		<div>
			<Formik
				initialValues={{ name: "", email: "" }}
				validationSchema={validationSchema}
				onSubmit={values => {
					console.log(values);
				}}
			>
				<Form className='flex flex-col items-center gap-6'>
					<Field
						name='name'
						placeholder='Nombre'
						className='border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-blue-500 '
					/>
					<ErrorMessage name='name' component='div' style={{ color: "red" }} />
					<Field
						name='email'
						placeholder='Email'
						className='border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-blue-500 '
					/>
					<ErrorMessage name='email' component='div' style={{ color: "red" }} />
					<button
						type='submit'
						className='rounded-lg bg-green-500 text-amber-50 px-4 py-2 hover:bg-green-600 transition active:bg-green-700 active:scale-95'
					>
						Enviar
					</button>
				</Form>
			</Formik>
		</div>
	);
}
