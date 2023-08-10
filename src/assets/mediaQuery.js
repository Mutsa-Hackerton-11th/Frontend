import { useMediaQuery } from "react-responsive";

export default function MediaQuery() {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isBigMobile = useMediaQuery({ minWidth: 450, maxWidth: 768 });
  const isSmallMobile = useMediaQuery({ maxWidth: 450 });

  return { isDesktop, isTablet, isBigMobile, isSmallMobile };
}
