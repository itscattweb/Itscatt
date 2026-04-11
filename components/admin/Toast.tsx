type ToastProps = {
  msg: string;
  ok: boolean;
};

export function Toast({ msg, ok }: ToastProps) {
  return (
    <div
      className="fixed bottom-6 right-6 z-50 rounded-2xl px-5 py-3 text-sm font-medium text-white shadow-lg"
      style={{
        background: ok
          ? "linear-gradient(135deg, #1d4ed8, #0284c7)"
          : "linear-gradient(135deg, #ef4444, #dc2626)",
      }}
    >
      {msg}
    </div>
  );
}