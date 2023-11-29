import Button from "react-bootstrap/Button";

function CustomButton({ type, size, onClick, children }) {
  return (
    <>
      <style type="text/css">
        {`.btn-default, 
          .btn-cta {
            position: relative;
            display: inline-flex;
            background: var(--tint-primary-0103);
            box-shadow: var(--elevation-03);
            backdrop-filter: blur(8px);
            color: var(--neutral-98);
            transform: translateY(0px);
            transition: all 0.2s ease-in-out;
        }

        .btn-default:hover, 
        .btn-cta:hover {
            background: var(--secondary-1295);
            box-shadow: var(--elevation-05);
            color: var(--neutral-10);
            transform: translateY(-2px);
        }

        .btn-outlined {
            position: relative;  
            background: transparent;
            border: 3px solid var(--secondary-1295);
            backdrop-filter: blur(0px);
            color: var(--secondary-1295);
            transform: scale(1);
            box-shadow: 0px 0px 0px 0px transparent;
            transition: all 0.2s ease-in-out;
        }

        .btn-cta::after {
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
          translateZ(0);
          filter: blur(0.9375rem);
          background: linear-gradient(to left, 
            var(--primary-010),
            var(--primary-0110),
            var(--primary-0120),
            var(--primary-0130),
            var(--primary-0140));
          background-size: 200% 200%;
          animation: animateGlow 1.7s linear infinite;
        }
        .btn-cta:hover::after {
          background: linear-gradient(to left, 
            var(--secondary-1295), 
            var(--secondary-1296), 
            var(--secondary-1297), 
            var(--secondary-1298), 
            var(--secondary-1299));
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

        .btn-outlined:hover {
            border: 3px solid var(--secondary-1297);
            backdrop-filter: blur(4px);
            color: var(--secondary-1297);
            box-shadow: 0px 0px 0.2712px 0px var(--secondary-1295), 
            0px 0px 0.5424px 0px var(--secondary-1295), 
            0px 0px 1.8984px 0px var(--secondary-1295), 
            0px 0px 3.7968px 0px var(--secondary-1295), 
            0px 0px 6.5088px 0px var(--secondary-1295), 
            0px 0px 11.3904px 0px var(--secondary-1295);
            transform: scale(1.05);
        }

        .btn-ghost {
            background: var(--gradient-01);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            backdrop-filter: blur(0px);
            transform: scale(1);
            text-transform: none;
            transition: all 0.2s ease-in-out;
        }

        .btn-ghost:hover {
            background: var(--gradient-01);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: var(--secondary-1295);
            backdrop-filter: blur(1px);
            transform: scale(1.05);
            text-transform: uppercase;
        }
        .btn-small {
            padding: 0.5rem 1rem;
            border-radius: var(--border-radius-s);
            font-family: var(--label-small-font-family);
            font-size: var(--label-small-font-size);
            font-style: var(--label-small-font-style);
            font-weight: var(--label-small-font-weight);
            line-height: var(--label-small-line-height);
            letter-spacing: var(--label-small-letter-spacing);
        }

        .btn-medium {
            padding: 0.75rem 1.5rem;
            border-radius: var(--border-radius-s);
            font-family: var(--label-medium-font-family);
            font-size: var(--label-medium-font-size);
            font-style: var(--label-medium-font-style);
            font-weight: var(--label-medium-font-weight);
            line-height: var(--label-medium-line-height);
            letter-spacing: var(--label-medium-letter-spacing);
        }

        .btn-large {
            padding: 1rem 2rem;
            border-radius: var(--border-radius-s);
            font-family: var(--label-large-font-family);
            font-size: var(--label-large-font-size);
            font-style: var(--label-large-font-style);
            font-weight: var(--label-large-font-weight);
            line-height: var(--label-large-line-height);
            letter-spacing: var(--label-large-letter-spacing);
        }
        `}
      </style>
      <Button
        variant={
          type === "cta"
            ? "cta"
            : type === "ghost"
            ? "ghost"
            : type === "outlined"
            ? "outlined"
            : "default"
        }
        size={
          size === "large" ? "large" : size === "medium" ? "medium" : "small"
        }
        onClick={onClick}
      >
        {children}
      </Button>
    </>
  );
}

export default CustomButton;
