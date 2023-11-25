import Button from "react-bootstrap/Button";

function CustomButton({ type, size, children }) {
  return (
    <>
      <style type="text/css">
        {`.btn-default {
            background: var(--surface-03);
            box-shadow: var(--elevation-03);
            backdrop-filter: blur(8px);
            color: var(--neutral-98);
            transform: translateY(0px);
            transition: all 0.2s ease-in-out;
        }

        .btn-default:hover {
            background: var(--surface-05);
            box-shadow: var(--elevation-05);
            color: var(--neutral-99);
            transform: translateY(-2px);
        }

        .btn-outlined {
            background: transparent;
            border: 3px solid var(--secondary-1295);
            backdrop-filter: blur(0px);
            color: var(--secondary-1295);
            transform: scale(1);
            transition: all 0.2s ease-in-out;
        }

        .btn-outlined:hover {
            border: 3px solid var(--secondary-1297);
            backdrop-filter: blur(4px);
            color: var(--secondary-1297);
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
          type === "ghost"
            ? "ghost"
            : type === "outlined"
            ? "outlined"
            : "default"
        }
        size={
          size === "large" ? "large" : size === "medium" ? "medium" : "small"
        }
      >
        {children}
      </Button>
    </>
  );
}

export default CustomButton;
