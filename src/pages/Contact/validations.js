import * as Yup from 'yup';
import { object, string, number, date, InferType } from 'yup';

Yup.setLocale({
  mixed: {
    required: 'Zorunlu alan!',
  },
});

let contactSchema = object({
  name: string().required(),
  email: string().email('Geçerli bir e-posta adresi giriniz.').required(),
  message: string().min(5, 'En az 5 karakter giriniz.').required()
});

export default contactSchema