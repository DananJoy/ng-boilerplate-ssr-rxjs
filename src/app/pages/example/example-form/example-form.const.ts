export interface Model {
    exampleForm: any,
    errors: {
        name: string,
        address: string,
        phone: string
    }
}

export const VALIDATIONS: any = {
    name: {
        required: 'Nama wajib diisi.'
    },
    address: {
        required: 'Alamat wajib diisi.',
        minlength: 'Alamat minimal 5 karakter.'
    },
    phone: {
        required: 'Nomor telefon wajib diisi.',
        numerical: 'Nomor telefon harus diisi angka.'
    }
}