import * as dotenv from 'dotenv';

dotenv.config();

export const testData = {
  validUser: {
    username: process.env.MAKER_USERNAME || '',
    password: process.env.MAKER_PASSWORD || '',
  },
  invalidUser: {
    username: process.env.INVALID_USERNAME || 'wronguser',
    password: process.env.INVALID_PASSWORD || 'wrongpassword',
  },
  payee: {
    validAccountNumber: process.env.PAYEE_ACCOUNT_NUMBER || '',
    validNickname: process.env.PAYEE_VALID_NICKNAME || 'TesterPayee',
    validEmail: process.env.PAYEE_EMAIL || 'testerpayee@example.com',

    invalidAccountNumber: '123',
    invalidEmail: 'invalid-email',
    blankValue: '',
  },
  payment: {
  savedPayeeName: process.env.PAYMENT_SAVED_PAYEE_NAME || 'Ali',
  validAmount: process.env.PAYMENT_VALID_AMOUNT || '1000',
  validRemarks: process.env.PAYMENT_VALID_REMARKS || 'Automation payment',
},
};