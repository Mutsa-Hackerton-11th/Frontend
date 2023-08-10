import { useMediaQuery } from "react-responsive";

export default function MediaQuery() {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isBigMobile = useMediaQuery({ minWidth: 400, maxWidth: 767 });
  const isSmallMobile = useMediaQuery({ maxWidth: 399 });

  return { isDesktop, isTablet, isBigMobile, isSmallMobile };
}
