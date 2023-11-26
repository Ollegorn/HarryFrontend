function UserAvatar({ variant, size, clickable = false, onClick }) {
  return (
    <>
      <style type="text/css">
        {`
        .user-avatar {
            border-radius: 50%;
            background: var(--x2d-avatar${variant});
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            cursor: ${clickable ? "pointer" : "default"};
        }

        .user-avatar-small {
            height: 2.5rem;
            width: 2.5rem;
        }
        .user-avatar-medium {
            height: 3rem;
            width: 3rem;
        }
        .user-avatar-large {
            height: 7.5rem;
            width: 7.5rem;
        }  
        `}
      </style>
      <div
        className={`user-avatar user-avatar-${size}`}
        onClick={onClick}
      ></div>
      ;
    </>
  );
}

export default UserAvatar;
