import Button from "react-bootstrap/Button";

function CustomButton({ type, size, theme = 4, onClick, children }) {
  return (
    <>
      <style type="text/css">
        {`.btn-default0${theme},
          .btn-cta0${theme} {
            border: none;
            position: relative;
            color: var(--primary-0${theme}-50);
            background: var(--primary-0${theme}-800);
            box-shadow: var(--elevation-01);
            backdrop-filter: blur(21px);
            transform: translateY(0px);
            transition: all 0.2s ease-in-out;
        }

        .btn-cta0${theme}::after {
          position: absolute;
          content: "";
          top: 0;
          left: 0;
          right: 0;
          z-index: -1;
          height: 100%;
          width: 100%;
          transform: scaleX(1.2);
          transform: scaleY(1.2);
          transform: translateZ(0);
          filter: blur(0.9375rem);
          background: linear-gradient(to left,
            var(--primary-0${theme}-900),
            var(--primary-0${theme}-800),
            var(--primary-0${theme}-700),
            var(--primary-0${theme}-600),
            var(--primary-0${theme}-500));
          background-size: 200% 200%;
          animation: animateGlow 1.7s linear infinite;
        }

        .btn-default0${theme}:hover,
        .btn-cta0${theme}:hover {
            background: var(--primary-0${theme}-700);
            box-shadow: var(--elevation-03);
            transform: translateY(-2px);
        }

        .btn-cta0${theme}:hover {
          color: var(--primary-0${theme}-900);
        }

        .btn-cta0${theme}:hover::after {
          background: linear-gradient(to left,
            var(--primary-0${theme}-400),
            var(--primary-0${theme}-300),
            var(--primary-0${theme}-200),
            var(--primary-0${theme}-100),
            var(--primary-0${theme}-50));
          background-size: 200% 200%;
          animation: animateGlow 1.7s linear infinite;
        }

        @keyframes animateGlow {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }

        .btn-outlined0${theme} {
            position: relative;
            background: transparent;
            color: var(--primary-0${theme}-500);
            border: 2px solid var(--primary-0${theme}-500);
            backdrop-filter: blur(21px);
            transform: translateY(0px);
            box-shadow: 0px 0px 0px 0px transparent;
            transition: all 0.2s ease-in-out;
        }

        .btn-outlined0${theme}:hover {
          color: var(--primary-0${theme}-400);
          border: 2px solid var(--primary-0${theme}-400);
          box-shadow: var(--focus-0${theme});
          transform: translateY(-2px);
      }

        .btn-ghost0${theme} {
            border: none;
            background: transparent;
            color: var(--primary-0${theme}-50);
            transform: scale(1);
            transition: all 0.2s ease-in-out;
        }

        .btn-ghost0${theme}:hover {
          color: var(--primary-0${theme}-400);
            transform: scale(1.05);
        }

        .btn-small,
        .btn-medium,
        .btn-large,
        .btn-extra-large {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          font-family: var(--label-font-family);
          font-style: var(--label-font-style);
          font-weight: var(--label-font-weight);
          line-height: var(--label-line-height);
        }

        .btn-small,
        .btn-medium {
          border-radius: var(--border-radius-base);
        }

        .btn-large,
        .btn-extra-large {
          border-radius: var(--border-radius-small);
        }

        .btn-small {
            padding: 0.5rem 1rem;
            font-size: var(--label-small-font-size);
        }

        .btn-medium {
            padding: 0.75rem 1.5rem;
            font-size: var(--label-medium-font-size);
        }

        .btn-large {
            padding: 1rem 2rem;
            font-size: var(--label-large-font-size);
        }

        .btn-extra-large {
          padding: 1rem 2rem;
          font-size: var(--label-extra-large-font-size);
      }
        `}
      </style>
      <Button
        variant={
          type === "cta"
            ? `cta0${theme}`
            : type === "ghost"
            ? `ghost0${theme}`
            : type === "outlined"
            ? `outlined0${theme}`
            : `default0${theme}`
        }
        size={
          size === "extra-large"
            ? "extra-large"
            : size === "large"
            ? "large"
            : size === "medium"
            ? "medium"
            : "small"
        }
        onClick={onClick}
      >
        {children}
      </Button>
    </>
  );
}

export default CustomButton;
