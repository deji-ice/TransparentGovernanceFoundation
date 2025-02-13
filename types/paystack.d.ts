declare module '@paystack/inline-js' {
  interface PaystackOptions {
    key: string;
    email: string;
    amount: number;
    currency: string;
    ref: string;
    onSuccess: (transaction: any) => void;
    onCancel: () => void;
  }

  class PaystackPop {
    newTransaction(options: PaystackOptions): void;
  }

  export default PaystackPop;
}