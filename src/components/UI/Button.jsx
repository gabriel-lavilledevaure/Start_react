function Button({ children, className }) {
  return (
    <button
      type="button"
      className="`${className}` flex h-14 w-20 items-center justify-center rounded-full border-2 border-cyan-200 text-cyan-500 transition hover:bg-cyan-100"
    >
      {children}
    </button>
  );
}

export default Button;
