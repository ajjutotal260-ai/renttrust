export function mockPayment({
  amount,
  onSuccess,
}: {
  amount: number;
  onSuccess: () => void;
}) {
  const confirmPay = window.confirm(
    `Demo Payment\n\nPay ₹${amount} to feature your listing?\n\n(This is a temporary demo payment)`
  );

  if (confirmPay) {
    setTimeout(() => {
      onSuccess();
    }, 500);
  }
}
