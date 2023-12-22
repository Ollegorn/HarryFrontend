import Badge from "react-bootstrap/Badge";

function CustomBadge({ children }) {
  return (
    <>
      <style type="text/css">
        {`.badge {
            display: flex;
            padding: 0.25rem 0.5rem;
            align-items: flex-start;
            font-family: var(--label-font-family);
            font-size: var(--label-small-font-size);
            font-style: var(--label-font-style);
            font-weight: var(--label-font-weight);
            line-height: var(--label-line-height);
        }

        .badge-glass {
            color: var(--neutral-300);
            border-radius: 2rem;
            background: var(--surface-00);
            backdrop-filter: blur(36px);
        }

        @media only screen and (min-width: 992px){
            .badge {
                padding: 0.5rem 1rem;
                font-size: var(--label-large-font-size);
            }
        }

        }
        `}
      </style>
      <Badge className={`badge-glass`}>{children}</Badge>
    </>
  );
}

export default CustomBadge;
