import { Link } from '@chakra-ui/react';

export function ExternalLink({ disabled, children, ...props }) {
  return (
    <Link
      target="_blank"
      rel="noopener noreferrer"
      data-disabled={disabled ? '' : undefined}
      onClick={(e) => {
        if (disabled) {
          e.preventDefault();
        }
      }}
      {...props}
    >
      {children}
    </Link>
  );
}
