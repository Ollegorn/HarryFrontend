import Badge from "react-bootstrap/Badge";

function CustomBadge({ type = "current", style = "filled", children }) {
  return (
    <>
      <style type="text/css">
        {`.badge {
            backdrop-filter: blur(36px);
            border-radius: var(--border-radius-l);
            font-family: var(--label-extra-small-font-family);
            font-size: var(--label-extra-small-font-size);
            font-style: var(--label-extra-small-font-style);
            font-weight: var(--label-extra-small-font-weight);
            letter-spacing: var(--label-extra-small-letter-spacing);
            line-height: var(--label-extra-small-line-height);
            padding: 0.25rem 0.5rem;
        }
        
        .badge-current--filled,
        .badge-upcoming--filled,
        .badge-past--filled {
            color: var(--neutral-96, #B0B3BF);
        }

        .badge-current--filled {
            background: rgba(65, 108, 118, 0.21);
        }

        .badge-upcoming--filled {
            background: rgba(65, 56, 107, 0.21);
        }

        .badge-past--filled {
            background: rgba(86, 52, 36, 0.21);
        }

        .badge-current--outlined, 
        .badge-upcoming--outlined, 
        .badge-past--outlined {
            border: 2px solid;
        }

        .badge-current--outlined {
            border-color: rgba(171, 170, 135, 0.21);
            color: rgba(171, 170, 135, 0.75);
        }

        .badge-upcoming--outlined {
            border-color: rgba(81, 70, 134, 0.21);
            color: rgba(81, 70, 134, 0.75);
        }

        .badge-past--outlined {
            border-color: rgba(221, 174, 60, 0.21);
            color: rgba(221, 174, 60, 0.75);
        }
        }
        `}
      </style>
      <Badge className={`badge-${type}--${style}`}>{children}</Badge>
    </>
  );
}

export default CustomBadge;
