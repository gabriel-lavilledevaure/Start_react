import Button from "./UI/Button";

function User({ src, name, fonction }) {
  return (
    <div className="flex items-center gap-7 py-5">
      <img
        className="h-20 w-20 rounded-full object-cover"
        alt={name}
        src={src}
      />
      <div className="min-w-0 flex-1">
        <h2 className="text-2xl font-semibold text-slate-900">{name}</h2>
        <p className="mt-1 text-xl text-slate-400">{fonction}</p>
      </div>
      <Button className="ml-auto">
        <svg
          id="message"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 400 400"
          className="h-8 w-8"
          aria-hidden="true"
        >
          <circle
            cx="124"
            cy="188.019"
            r="17.5"
            fill="none"
            stroke="#4f46e5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <circle
            cx="200"
            cy="188.019"
            r="17.5"
            fill="none"
            stroke="#4f46e5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <circle
            cx="276"
            cy="188.019"
            r="17.5"
            fill="none"
            stroke="#4f46e5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <path
            d="M335,288.019h-178.238c-2.425,0-4.768.881-6.592,2.48l-45.899,40.232c-3.235,2.836-8.303.533-8.296-3.769l.05-28.926c.01-5.53-4.47-10.017-10-10.017h-21.026c-8.284,0-15-6.716-15-15V103.019c0-8.284,6.716-15,15-15h270c8.284,0,15,6.716,15,15v170c0,8.284-6.716,15-15,15Z"
            fill="none"
            stroke="#191919"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
        </svg>
      </Button>
    </div>
  );
}

export default User;
