import { IconButton } from '@chakra-ui/react';
import { forwardRef } from 'react';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';

export const CarouselNavButton = forwardRef(function CarouselNavButton(
  { direction, ...props },
  ref,
) {
  const isPrev = direction === 'prev';

  return (
    <IconButton
      ref={ref}
      aria-label={isPrev ? 'Previous slide' : 'Next slide'}
      size="sm"
      variant="outline"
      backgroundColor="bg.primary"
      borderWidth="1.5px"
      {...props}
    >
      {isPrev ? <LuChevronLeft /> : <LuChevronRight />}
    </IconButton>
  );
});
